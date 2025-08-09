import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Search, User, Filter, Grid, List } from "lucide-react";


const mockDesigns = [
  {
    id: 1,
    title: "Logo Restaurant Le Baobab",
    price: "25 000 CFA",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop",
    category: "Logo",
    author: "Designer Lomé",
    badgeColor: "bg-purple-500",
    downloads: 45
  },
  {
    id: 2,
    title: "Flyer Événement Cultural",
    price: "12 000 CFA",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    category: "Flyer",
    author: "Atelier Créatif",
    badgeColor: "bg-blue-500",
    downloads: 32
  },
  {
    id: 3,
    title: "Carte de Visite Avocat",
    price: "8 000 CFA",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop",
    category: "Print",
    author: "Studio Design",
    badgeColor: "bg-green-500",
    downloads: 67
  },
  {
    id: 4,
    title: "Banderole Magasin",
    price: "35 000 CFA",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=300&fit=crop",
    category: "Banderole",
    author: "Pixel Art Togo",
    badgeColor: "bg-orange-500",
    downloads: 23
  },
  {
    id: 5,
    title: "Menu Restaurant",
    price: "15 000 CFA",
    image: "https://images.unsplash.com/photo-1572441713132-c542fc821dd5?w=500&h=300&fit=crop",
    category: "Menu",
    author: "Design Plus",
    badgeColor: "bg-pink-500",
    downloads: 56
  },
  {
    id: 6,
    title: "Logo Salon de Coiffure",
    price: "20 000 CFA",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
    category: "Logo",
    author: "Creative Studio",
    badgeColor: "bg-purple-500",
    downloads: 41
  }
];

export default function AllDesigns() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const filteredDesigns = mockDesigns.filter(design =>
    design.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    design.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 mt-24 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
            Nos Designs
          </h1>
          <p className="text-gray-600 text-lg">Découvrez notre collection complète de créations graphiques</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Rechercher un design, catégorie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filtrer
            </Button>
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
          {filteredDesigns.map((design) => (
            <Card key={design.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <Badge className={`${design.badgeColor} text-white border-0`}>
                    {design.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800">{design.title}</h3>
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                  <User className="h-4 w-4" />
                  {design.author}
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">{design.price}</span>
                  <span className="text-sm text-gray-500">{design.downloads} téléchargements</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 hover:to-blue-600 text-white border-0">
                  Voir détails
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
}
