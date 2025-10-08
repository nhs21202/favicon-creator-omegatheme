import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const GOOGLE_FONTS = [
  "Inter", "Roboto", "Open Sans", "Lato", "Montserrat", "Oswald", "Raleway", "PT Sans",
  "Merriweather", "Nunito", "Playfair Display", "Poppins", "Ubuntu", "Mukta", "Rubik",
  "Work Sans", "Noto Sans", "Fira Sans", "Oxygen", "Quicksand", "Barlow", "Josefin Sans",
  "Bebas Neue", "Arimo", "Karla", "Titillium Web", "Anton", "Lobster", "Pacifico",
  "Dancing Script", "Caveat", "Satisfy", "Great Vibes", "Permanent Marker"
];

const BACKGROUND_SHAPES = ["Rounded", "Circle", "Square"];

interface TextGeneratorProps {
  onGenerate: (favicon: string) => void;
}

export const TextGenerator = ({ onGenerate }: TextGeneratorProps) => {
  const [text, setText] = useState("F");
  const [fontColor, setFontColor] = useState("#FFFFFF");
  const [backgroundColor, setBackgroundColor] = useState("#0073E6");
  const [fontFamily, setFontFamily] = useState("Inter");
  const [fontSize, setFontSize] = useState("110");
  const [backgroundShape, setBackgroundShape] = useState("Rounded");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    generateFavicon();
  }, [text, fontColor, backgroundColor, fontFamily, fontSize, backgroundShape]);

  const generateFavicon = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 256;
    canvas.width = size;
    canvas.height = size;

    // Clear canvas
    ctx.clearRect(0, 0, size, size);

    // Draw background
    ctx.fillStyle = backgroundColor;
    
    if (backgroundShape === "Circle") {
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.fill();
    } else if (backgroundShape === "Rounded") {
      const radius = size * 0.15;
      ctx.beginPath();
      ctx.roundRect(0, 0, size, size, radius);
      ctx.fill();
    } else {
      ctx.fillRect(0, 0, size, size);
    }

    // Draw text
    ctx.fillStyle = fontColor;
    ctx.font = `bold ${fontSize}px ${fontFamily}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text.slice(0, 3), size / 2, size / 2);

    const dataUrl = canvas.toDataURL("image/png");
    onGenerate(dataUrl);
  };

  const handleGenerate = () => {
    if (!text.trim()) {
      toast.error("Please enter text");
      return;
    }
    generateFavicon();
    toast.success("Favicon generated!");
  };

  return (
    <div className="space-y-6">
      <canvas ref={canvasRef} className="hidden" />
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="text">Text (1-3 characters)</Label>
            <Input
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value.slice(0, 3))}
              placeholder="Enter text"
              maxLength={3}
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="fontFamily">Font Family</Label>
            <Select value={fontFamily} onValueChange={setFontFamily}>
              <SelectTrigger className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {GOOGLE_FONTS.map((font) => (
                  <SelectItem key={font} value={font}>
                    {font}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="fontSize">Font Size</Label>
            <Input
              id="fontSize"
              type="number"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              min="50"
              max="200"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="backgroundShape">Background Shape</Label>
            <Select value={backgroundShape} onValueChange={setBackgroundShape}>
              <SelectTrigger className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {BACKGROUND_SHAPES.map((shape) => (
                  <SelectItem key={shape} value={shape}>
                    {shape}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="fontColor">Font Color</Label>
            <div className="flex gap-2 mt-2">
              <Input
                id="fontColor"
                value={fontColor}
                onChange={(e) => setFontColor(e.target.value)}
                className="flex-1"
              />
              <input
                type="color"
                value={fontColor}
                onChange={(e) => setFontColor(e.target.value)}
                className="w-12 h-10 rounded border"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="backgroundColor">Background Color</Label>
            <div className="flex gap-2 mt-2">
              <Input
                id="backgroundColor"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="flex-1"
              />
              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="w-12 h-10 rounded border"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button onClick={handleGenerate} className="gradient-primary px-12" size="lg">
          Generate Favicon
        </Button>
      </div>
    </div>
  );
};
