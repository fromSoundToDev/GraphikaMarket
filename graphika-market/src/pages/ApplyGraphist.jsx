import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { UserPlus, Upload } from "lucide-react";

export default function ApplyGraphist() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-2xl py-16 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
          Devenir graphiste partenaire
        </h1>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserPlus className="h-6 w-6" />
              Candidature graphiste
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input id="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Nom</Label>
                  <Input id="lastName" required />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email professionnel</Label>
                <Input id="email" type="email" required />
              </div>

              <div>
                <Label htmlFor="portfolio">Portfolio (URL)</Label>
                <Input id="portfolio" type="url" placeholder="https://..." />
              </div>

              <div>
                <Label htmlFor="experience">Expérience professionnelle</Label>
                <Textarea 
                  id="experience" 
                  placeholder="Décrivez votre expérience en design graphique..."
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="specialties">Spécialités</Label>
                <Textarea 
                  id="specialties" 
                  placeholder="Logo, web design, print, illustration..."
                  className="min-h-[80px]"
                />
              </div>

              <div>
                <Label htmlFor="cv">CV (PDF)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                  <Input id="cv" type="file" accept=".pdf" className="hidden" />
                  <Label htmlFor="cv" className="cursor-pointer text-purple-600 hover:text-purple-500">
                    Cliquer pour uploader votre CV
                  </Label>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700">
                <UserPlus className="mr-2 h-4 w-4" />
                Envoyer ma candidature
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
