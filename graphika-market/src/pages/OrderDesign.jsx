import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Palette, Upload, CreditCard } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function OrderDesign() {
  const [projectType, setProjectType] = useState("");
  const [urgency, setUrgency] = useState("normal");
  const [additionalServices, setAdditionalServices] = useState([]);

  const handleServiceChange = (service, checked) => {
    if (checked) {
      setAdditionalServices([...additionalServices, service]);
    } else {
      setAdditionalServices(additionalServices.filter(s => s !== service));
    }
  };

  const calculatePrice = () => {
    let basePrice = 0;
    switch (projectType) {
      case "logo": basePrice = 150; break;
      case "flyer": basePrice = 80; break;
      case "brochure": basePrice = 200; break;
      case "carte-visite": basePrice = 60; break;
      case "illustration": basePrice = 120; break;
      default: basePrice = 100;
    }
    
    if (urgency === "urgent") basePrice *= 1.5;
    if (urgency === "express") basePrice *= 2;
    
    const servicesPrice = additionalServices.length * 30;
    return Math.round(basePrice + servicesPrice);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-4xl py-16 px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Palette className="h-16 w-16 text-purple-500" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Commander votre visuel personnalisé
          </h1>
          <p className="text-lg text-gray-600">
            Décrivez votre projet et obtenez un devis personnalisé
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Détails du projet
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="project-type">Type de projet</Label>
                  <Select value={projectType} onValueChange={setProjectType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisissez le type de design" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="logo">Logo d'entreprise</SelectItem>
                      <SelectItem value="flyer">Flyer publicitaire</SelectItem>
                      <SelectItem value="brochure">Brochure commerciale</SelectItem>
                      <SelectItem value="carte-visite">Carte de visite</SelectItem>
                      <SelectItem value="illustration">Illustration personnalisée</SelectItem>
                      <SelectItem value="autre">Autre (précisez)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">Description détaillée</Label>
                  <Textarea 
                    id="description"
                    placeholder="Décrivez votre projet : style souhaité, couleurs, message à transmettre, utilisation prévue..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Nom de l'entreprise/marque</Label>
                    <Input id="company" placeholder="Votre entreprise" />
                  </div>
                  <div>
                    <Label htmlFor="sector">Secteur d'activité</Label>
                    <Input id="sector" placeholder="Ex: Restaurant, Tech, Santé..." />
                  </div>
                </div>

                <div>
                  <Label htmlFor="references">Références visuelles</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      Uploadez des images d'inspiration (optionnel)
                    </p>
                    <Button variant="outline" size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Choisir des fichiers
                    </Button>
                  </div>
                </div>

                <div>
                  <Label>Délai souhaité</Label>
                  <Select value={urgency} onValueChange={setUrgency}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">Standard (7-10 jours)</SelectItem>
                      <SelectItem value="urgent">Urgent (3-5 jours) +50%</SelectItem>
                      <SelectItem value="express">Express (24-48h) +100%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Services additionnels</Label>
                  <div className="space-y-3 mt-3">
                    {[
                      { id: "formats", label: "Formats multiples (web, print, réseaux sociaux)" },
                      { id: "variations", label: "3 variations de couleurs" },
                      { id: "mockups", label: "Mockups de présentation" },
                      { id: "charte", label: "Mini charte graphique" }
                    ].map((service) => (
                      <div key={service.id} className="flex items-center space-x-2">
                        <Checkbox 
                          id={service.id}
                          checked={additionalServices.includes(service.id)}
                          onCheckedChange={(checked) => 
                            handleServiceChange(service.id, checked)
                          }
                        />
                        <Label htmlFor={service.id} className="text-sm">
                          {service.label} <span className="text-gray-500">(+30€)</span>
                        </Label>
                      </div>
                    ))}
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
                    <span>Type de projet:</span>
                    <span className="font-medium">
                      {projectType ? projectType.charAt(0).toUpperCase() + projectType.slice(1) : "-"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Délai:</span>
                    <span className="font-medium">
                      {urgency === "normal" ? "Standard" : 
                       urgency === "urgent" ? "Urgent" : "Express"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Services additionnels:</span>
                    <span className="font-medium">{additionalServices.length}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total estimé:</span>
                    <span className="text-purple-600">{calculatePrice()}€</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Prix final confirmé après validation du brief
                  </p>
                </div>

                <Link to="/payment">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600" size="lg">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Procéder au paiement
                  </Button>
                </Link>

                <p className="text-xs text-center text-gray-500">
                  Paiement sécurisé • Satisfaction garantie
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
