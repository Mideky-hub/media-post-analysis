
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload, Link, Type } from "lucide-react";
import { useState } from "react";

export const DataInput = () => {
  const [dragActive, setDragActive] = useState(false);

  return (
    <div className="space-y-6 animate-fadeIn">
      <Card className="p-6 space-y-4">
        <h3 className="text-lg font-semibold">Input Data</h3>
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive ? "border-media-500 bg-media-100" : "border-gray-300"
          }`}
          onDragEnter={() => setDragActive(true)}
          onDragLeave={() => setDragActive(false)}
          onDrop={() => setDragActive(false)}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Drag and drop your files here, or click to select files
          </p>
          <input type="file" className="hidden" />
          <Button variant="outline" size="sm" className="mt-4">
            Select Files
          </Button>
        </div>
      </Card>

      <Card className="p-6 space-y-4">
        <h3 className="text-lg font-semibold">Social Media URL</h3>
        <div className="flex space-x-2">
          <Input placeholder="Enter social media post URL" />
          <Button>
            <Link className="mr-2 h-4 w-4" />
            Analyze
          </Button>
        </div>
      </Card>

      <Card className="p-6 space-y-4">
        <h3 className="text-lg font-semibold">Text Analysis</h3>
        <textarea
          className="w-full h-32 p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-media-500"
          placeholder="Enter text for analysis..."
        />
        <Button className="w-full">
          <Type className="mr-2 h-4 w-4" />
          Analyze Text
        </Button>
      </Card>
    </div>
  );
};
