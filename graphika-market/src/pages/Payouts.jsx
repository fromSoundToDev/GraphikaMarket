import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { CreditCard, Calendar, DollarSign, CheckCircle } from "lucide-react";


export default function Payouts() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Système de Paiements
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comment fonctionnent les paiements pour les créateurs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">70% de Commission</h3>
              <p className="text-gray-600">Vous gardez 70% du prix de vente</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Paiements Hebdomadaires</h3>
              <p className="text-gray-600">Tous les vendredi via Mobile Money</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Mobile Money</h3>
              <p className="text-gray-600">Flooz, Tmoney, tous supports</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Méthodes de Paiement Disponibles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <h4 className="font-semibold">Flooz (Moov)</h4>
                    <p className="text-gray-600 text-sm">Paiement direct sur votre numéro Flooz</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">Disponible</Badge>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <h4 className="font-semibold">Tmoney (Togocom)</h4>
                    <p className="text-gray-600 text-sm">Paiement direct sur votre numéro Tmoney</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">Disponible</Badge>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <h4 className="font-semibold">Virement Bancaire</h4>
                    <p className="text-gray-600 text-sm">Pour les montants supérieurs à 100 000 CFA</p>
                  </div>
                </div>
                <Badge className="bg-blue-100 text-blue-800">Sur demande</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
