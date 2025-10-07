import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { TextGenerator } from "./TextGenerator";
import { ImageGenerator } from "./ImageGenerator";
import { EmojiGenerator } from "./EmojiGenerator";
import { PreviewPanel } from "./PreviewPanel";

export const FaviconGenerator = () => {
  const [generatedFavicon, setGeneratedFavicon] = useState<string | null>(null);

  return (
    <Card className="shadow-medium p-6 md:p-8 bg-card">
      <Tabs defaultValue="text" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="text" className="text-sm md:text-base">
            Text
          </TabsTrigger>
          <TabsTrigger value="image" className="text-sm md:text-base">
            Image
          </TabsTrigger>
          <TabsTrigger value="emoji" className="text-sm md:text-base">
            Emoji
          </TabsTrigger>
        </TabsList>

        <TabsContent value="text">
          <TextGenerator onGenerate={setGeneratedFavicon} />
        </TabsContent>

        <TabsContent value="image">
          <ImageGenerator onGenerate={setGeneratedFavicon} />
        </TabsContent>

        <TabsContent value="emoji">
          <EmojiGenerator onGenerate={setGeneratedFavicon} />
        </TabsContent>
      </Tabs>

      {generatedFavicon && <PreviewPanel favicon={generatedFavicon} />}
    </Card>
  );
};
