import { Printer } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Impression = () => (
  <div className="min-h-screen">
    <section className="py-16  px-4 -mb-20 text-center">
      <div className="max-w-4xl  mt-24 mx-auto ">
        <div className="flex justify-center mb-6">
          <Printer className="h-16 w-16 text-blue-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
          Commandez votre impression professionnelle
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Uploadez vos fichiers et imprimez vos créations : flyers, cartes de visite, brochures, etc.
        </p>
        <Link to="/print-order">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700">
            Commander une impression
          </Button>
        </Link>
      </div>
    </section>
  </div>
);

export default Impression;
