import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Upload, FileText } from "lucide-react";
import { useState } from "react";

export default function UploadPage() {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-2xl py-16 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Upload de fichier
        </h1>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-6 w-6" />
              Téléverser votre fichier
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-500 transition-colors">
              <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <Label htmlFor="file-upload" className="cursor-pointer">
                <span className="text-lg font-medium text-purple-600 hover:text-purple-500">
                  Cliquez pour sélectionner un fichier
                </span>
                <Input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </Label>
              <p className="text-sm text-gray-500 mt-2">
                Formats supportés: PNG, JPG, PDF, SVG, AI
              </p>
              {uploadedFile && (
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <FileText className="inline mr-2 h-4 w-4 text-green-600" />
                  <span className="text-green-700 font-medium">{uploadedFile.name}</span>
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="description">Description (optionnelle)</Label>
              <Input id="description" placeholder="Décrivez votre fichier..." />
            </div>

            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600" disabled={!uploadedFile}>
              <Upload className="mr-2 h-4 w-4" />
              Téléverser le fichier
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
