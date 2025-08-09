
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { CreditCard, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Payment() {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      window.location.href = "/order-tracking";
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-2xl py-16 px-4">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <CreditCard className="h-6 w-6 text-green-600" />
              Paiement sécurisé
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Récapitulatif de la commande</h3>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>Design personnalisé</span>
                  <span>150€</span>
                </div>
                <div className="flex justify-between">
                  <span>Services additionnels</span>
                  <span>30€</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-2">
                  <span>Total</span>
                  <span>180€</span>
                </div>
              </div>
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                handlePayment();
              }}
            >
              <div>
                <Label htmlFor="card-number">Numéro de carte</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Date d'expiration</Label>
                  <Input id="expiry" placeholder="MM/AA" required />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" required />
                </div>
              </div>

              <div>
                <Label htmlFor="cardholder">Nom du titulaire</Label>
                <Input id="cardholder" placeholder="John Doe" required />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white"
                disabled={isProcessing}
              >
                <Lock className="mr-2 h-4 w-4" />
                {isProcessing ? "Traitement en cours..." : "Payer 180€"}
              </Button>
            </form>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Après paiement, vous pourrez suivre l'avancement de votre commande
              </p>
              <Link
                to="/order-tracking"
                className="text-blue-600 hover:text-blue-800 text-sm inline-flex items-center"
              >
                Voir un exemple de suivi
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
