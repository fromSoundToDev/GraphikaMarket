
import { Button } from "../components/ui/button";
import { Palette } from "lucide-react";
import { Link } from "react-router-dom";

const Conception = () => (
  <div className="min-h-screen ">
    <section className="py-16 px-4 text-center">
      <div className="max-w-3xl mt-24 -mb-20 mx-auto">
        <div className="flex justify-center mb-6">
          <Palette className="h-16 w-16 text-purple-500" />
        </div>
        <h1 className=" text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
          Commandez votre visuel personnalisé
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Faites une demande de création graphique sur-mesure : logo, flyer, illustration, support web…
        </p>
        <Link to="/order-design">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700">
            Commencer une conception
          </Button>
        </Link>
      </div>
    </section>
  </div>
);

export default Conception;
