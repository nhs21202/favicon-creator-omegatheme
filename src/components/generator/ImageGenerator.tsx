import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { toast } from "sonner";

interface ImageGeneratorProps {
  onGenerate: (favicon: string) => void;
}

export const ImageGenerator = ({ onGenerate }: ImageGeneratorProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const processImage = (file: File) => {
    if (!file.type.match("image.*")) {
      toast.error("Please upload an image file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const size = 256;
        canvas.width = size;
        canvas.height = size;

        // Calculate dimensions to fit and center the image
        const scale = Math.min(size / img.width, size / img.height);
        const x = (size - img.width * scale) / 2;
        const y = (size - img.height * scale) / 2;

        ctx.clearRect(0, 0, size, size);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

        const dataUrl = canvas.toDataURL("image/png");
        setImagePreview(dataUrl);
        onGenerate(dataUrl);
        toast.success("Image processed successfully!");
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processImage(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processImage(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-6">
      <canvas ref={canvasRef} className="hidden" />
      
      <div
        className={`border-2 border-dashed rounded-lg p-12 text-center transition-smooth ${
          dragActive ? "border-primary bg-primary/5" : "border-border"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">Upload Your Image</h3>
        <p className="text-muted-foreground mb-4">
          Drag and drop your image here or click to browse
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          Supports: PNG, JPG, SVG, GIF
        </p>
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
        <Button onClick={() => fileInputRef.current?.click()} variant="outline">
          Choose File
        </Button>
      </div>

      {imagePreview && (
        <div className="flex justify-center">
          <div className="text-center">
            <p className="text-sm font-medium mb-2">Preview</p>
            <img src={imagePreview} alt="Preview" className="w-32 h-32 rounded-lg shadow-soft" />
          </div>
        </div>
      )}
    </div>
  );
};
