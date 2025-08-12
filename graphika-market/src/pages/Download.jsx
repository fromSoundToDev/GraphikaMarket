import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Download, FileText, Image } from "lucide-react";

const downloadableFiles = [
  { id: 1, name: "Logo_Final.svg", type: "SVG", size: "2.3 MB", icon: Image },
  { id: 2, name: "Logo_PNG_HD.png", type: "PNG", size: "1.8 MB", icon: Image },
  { id: 3, name: "Charte_Graphique.pdf", type: "PDF", size: "4.2 MB", icon: FileText },
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-4xl py-16 px-4">
        <h1 className="text-3xl mt-20 font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Téléchargements disponibles
        </h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Commande #CMD001 - Logo personnalisé</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Votre commande est terminée ! Vous pouvez maintenant télécharger tous vos fichiers.
            </p>
            <div className="space-y-4">
              {downloadableFiles.map((file) => (
                <div key={file.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <file.icon className="h-8 w-8 text-pink-600" />
                    <div>
                      <h3 className="font-semibold">{file.name}</h3>
                      <p className="text-sm text-gray-600">{file.type} • {file.size}</p>
                    </div>
                  </div>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                <Download className="mr-2 h-4 w-4" />
                Télécharger tout (Archive ZIP)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
