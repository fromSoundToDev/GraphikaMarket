import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { CheckCircle, Clock, Truck, Package } from "lucide-react";

const orderSteps = [
  { id: 1, title: "Commande confirmée", icon: CheckCircle, status: "completed", date: "2024-06-10 14:30" },
  { id: 2, title: "En conception", icon: Clock, status: "completed", date: "2024-06-10 16:00" },
  { id: 3, title: "Design validé", icon: CheckCircle, status: "current", date: "2024-06-12 09:15" },
  { id: 4, title: "En livraison", icon: Truck, status: "pending", date: null },
  { id: 5, title: "Livré", icon: Package, status: "pending", date: null },
];

export default function OrderTracking() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-4xl py-16 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Suivi de commande #CMD001
        </h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Détails de la commande</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Produit</p>
                <p className="font-semibold">Logo personnalisé</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Graphiste</p>
                <p className="font-semibold">Marie Dupont</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Montant</p>
                <p className="font-semibold">150€</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Suivi de la commande</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {orderSteps.map((step) => (
                <div key={step.id} className="flex items-center gap-4">
                  <div
                    className={`p-2 rounded-full ${
                      step.status === "completed"
                        ? "bg-green-100 text-green-600"
                        : step.status === "current"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{step.title}</h3>
                    {step.date && (
                      <p className="text-sm text-gray-600">{step.date}</p>
                    )}
                  </div>
                  <Badge
                    variant={
                      step.status === "completed"
                        ? "default"
                        : step.status === "current"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {step.status === "completed"
                      ? "Terminé"
                      : step.status === "current"
                      ? "En cours"
                      : "En attente"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
