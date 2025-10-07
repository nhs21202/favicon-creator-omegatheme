import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";
import { toast } from "sonner";

interface PreviewPanelProps {
  favicon: string;
}

export const PreviewPanel = ({ favicon }: PreviewPanelProps) => {
  const sizes = [16, 32, 48, 64, 128];

  const downloadFavicon = (size: number, format: string) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = size;
    canvas.height = size;

    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, size, size);
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `favicon-${size}x${size}.${format}`;
        a.click();
        URL.revokeObjectURL(url);
        toast.success(`Downloaded ${size}x${size} ${format.toUpperCase()}`);
      }, `image/${format}`);
    };
    img.src = favicon;
  };

  const downloadAll = () => {
    sizes.forEach((size) => {
      setTimeout(() => downloadFavicon(size, "png"), 100 * size);
    });
    toast.success("Downloading all sizes...");
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  return (
    <div className="mt-8 border-t pt-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Preview</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button size="sm" onClick={downloadAll} className="gradient-primary">
            <Download className="w-4 h-4 mr-2" />
            Download All
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-6">
        {sizes.map((size) => (
          <div key={size} className="text-center">
            <div className="bg-secondary rounded-lg p-4 mb-2 flex items-center justify-center">
              <img
                src={favicon}
                alt={`${size}x${size}`}
                style={{ width: size, height: size }}
                className="pixelated"
              />
            </div>
            <p className="text-sm font-medium">{size}x{size}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Button
          variant="outline"
          onClick={() => downloadFavicon(64, "png")}
          className="w-full"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PNG
        </Button>
        <Button
          variant="outline"
          onClick={() => downloadFavicon(64, "ico")}
          className="w-full"
        >
          <Download className="w-4 h-4 mr-2" />
          Download ICO
        </Button>
        <Button
          variant="outline"
          onClick={() => downloadFavicon(64, "svg")}
          className="w-full"
        >
          <Download className="w-4 h-4 mr-2" />
          Download SVG
        </Button>
      </div>
    </div>
  );
};
