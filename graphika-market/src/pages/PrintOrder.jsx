import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Printer, Upload, CreditCard } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PrintOrder() {
  const [format, setFormat] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [paper, setPaper] = useState("");
  const [finish, setFinish] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const calculatePrice = () => {
    let basePrice = 0;
    switch (format) {
      case "a4": basePrice = 15; break;
      case "a3": basePrice = 25; break;
      case "carte-visite": basePrice = 10; break;
      case "flyer": basePrice = 12; break;
      default: basePrice = 15;
    }
    
    if (paper === "premium") basePrice += 5;
    if (paper === "glossy" || paper === "matte") basePrice += 8;
    if (finish === "lamination") basePrice += 10;
    if (finish === "uv") basePrice += 15;
    
    return Math.round(basePrice * quantity);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-4xl py-16 px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Printer className="h-16 w-16 text-orange-500" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Commander une impression
          </h1>
          <p className="text-lg text-gray-600">
            Uploadez votre fichier et configurez vos options d'impression
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Printer className="h-5 w-5" />
                  Configuration d'impression
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="file-upload">Fichier à imprimer</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <Label htmlFor="file-upload" className="cursor-pointer">
                      <span className="text-orange-600 font-medium">
                        Choisir un fichier à imprimer
                      </span>
                      <Input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png,.svg"
                        onChange={handleFileUpload}
                      />
                    </Label>
                    <p className="text-sm text-gray-500 mt-2">
                      PDF, JPG, PNG, SVG jusqu'à 10MB
                    </p>
                    {uploadedFile && (
                      <p className="text-sm text-green-600 mt-2 font-medium">
                        Fichier sélectionné : {uploadedFile.name}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="format">Format</Label>
                    <Select value={format} onValueChange={setFormat}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir le format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a4">A4 (21x29.7cm)</SelectItem>
                        <SelectItem value="a3">A3 (29.7x42cm)</SelectItem>
                        <SelectItem value="carte-visite">Carte de visite (8.5x5.4cm)</SelectItem>
                        <SelectItem value="flyer">Flyer A5 (14.8x21cm)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="quantity">Quantité</Label>
                    <Input 
                      type="number" 
                      min="1" 
                      max="1000" 
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="paper">Type de papier</Label>
                    <Select value={paper} onValueChange={setPaper}>
                      <SelectTrigger>
                        <SelectValue placeholder="Type de papier" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard 80g</SelectItem>
                        <SelectItem value="premium">Premium 120g (+5€)</SelectItem>
                        <SelectItem value="glossy">Brillant 200g (+8€)</SelectItem>
                        <SelectItem value="matte">Mat 200g (+8€)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="finish">Finition</Label>
                    <Select value={finish} onValueChange={setFinish}>
                      <SelectTrigger>
                        <SelectValue placeholder="Finition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Aucune</SelectItem>
                        <SelectItem value="lamination">Plastification (+10€)</SelectItem>
                        <SelectItem value="uv">Vernis UV (+15€)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Récapitulatif</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span className="font-medium">
                      {format ? format.toUpperCase() : "-"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantité:</span>
                    <span className="font-medium">{quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Papier:</span>
                    <span className="font-medium">
                      {paper ? paper.charAt(0).toUpperCase() + paper.slice(1) : "-"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Finition:</span>
                    <span className="font-medium">
                      {finish && finish !== "none" ? finish.charAt(0).toUpperCase() + finish.slice(1) : "Aucune"}
                    </span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-orange-600">{calculatePrice()}€</span>
                  </div>
                </div>

                <Link to="/payment">
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600" 
                    size="lg"
                    disabled={!uploadedFile || !format}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Procéder au paiement
                  </Button>
                </Link>

                <p className="text-xs text-center text-gray-500">
                  Paiement sécurisé • Livraison rapide
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
