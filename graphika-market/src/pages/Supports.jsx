import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Image, 
  Package, 
  Printer, 
  Palette,
  CreditCard,
  Shirt,
  Frame,
  Coffee,
  Gift,
  Award,
  Camera,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Supports = () => {
  const conceptionSupports = [
    {
      category: "Identité Visuelle",
      icon: Palette,
      items: [
        { name: "Logo & Charte graphique", price: "À partir de 100 000 CFA", features: ["Création logo", "Déclinaisons", "Guide d'utilisation"] },
        { name: "Cartes de visite", price: "À partir de 15 000 CFA", features: ["Design personnalisé", "Recto-verso", "Formats standards"] },
        { name: "Papier à en-tête", price: "À partir de 20 000 CFA", features: ["Design coordonné", "Format A4", "Fichiers haute résolution"] },
      ]
    },
    {
      category: "Communication Print",
      icon: FileText,
      items: [
        { name: "Flyers & Prospectus", price: "À partir de 25 000 CFA", features: ["Design attractif", "Formats variés", "Optimisé impression"] },
        { name: "Affiches & Posters", price: "À partir de 35 000 CFA", features: ["Grand format", "Haute résolution", "Impact visuel"] },
        { name: "Brochures & Catalogues", price: "À partir de 50 000 CFA", features: ["Mise en page pro", "Multi-pages", "Reliure incluse"] },
        { name: "Dépliants", price: "À partir de 30 000 CFA", features: ["3 volets", "Design harmonieux", "Pliage optimisé"] },
      ]
    },
    {
      category: "Packaging & Étiquetage",
      icon: Package,
      items: [
        { name: "Emballages produits", price: "À partir de 75 000 CFA", features: ["Design créatif", "Découpe sur-mesure", "Matériaux variés"] },
        { name: "Étiquettes & Autocollants", price: "À partir de 20 000 CFA", features: ["Formes personnalisées", "Finitions spéciales", "Résistant"] },
        { name: "Sachets & Sacs", price: "À partir de 40 000 CFA", features: ["Impression couleur", "Poignées renforcées", "Éco-responsable"] },
      ]
    },
    {
      category: "Communication Digitale",
      icon: Image,
      items: [
        { name: "Bannières web", price: "À partir de 15 000 CFA", features: ["Formats standards", "Animations", "Optimisé web"] },
        { name: "Publications réseaux sociaux", price: "À partir de 10 000 CFA", features: ["Stories", "Posts", "Couvertures"] },
        { name: "Présentations PowerPoint", price: "À partir de 40 000 CFA", features: ["Templates", "Animations", "Cohérence graphique"] },
      ]
    }
  ];

  const impressionSupports = [
    {
      category: "Papeterie & Bureau",
      icon: FileText,
      items: [
        { name: "Cartes de visite", materials: ["Papier premium 350g", "Pelliculage mat/brillant"], price: "75 CFA/unité" },
        { name: "Papier à en-tête", materials: ["Papier 90g", "Impression couleur"], price: "150 CFA/unité" },
        { name: "Enveloppes", materials: ["Différents formats", "Impression personnalisée"], price: "125 CFA/unité" },
        { name: "Carnets & Blocs-notes", materials: ["Reliure spirale", "Couverture cartonnée"], price: "2 500 CFA/unité" },
      ]
    },
    {
      category: "Communication Extérieure",
      icon: Frame,
      items: [
        { name: "Banderoles", materials: ["Bâche PVC", "Œillets renforcés"], price: "7 500 CFA/m²" },
        { name: "Panneaux rigides", materials: ["Dibond", "PVC expansé"], price: "12 500 CFA/m²" },
        { name: "Affiches grand format", materials: ["Papier photo", "Encres résistantes"], price: "5 000 CFA/m²" },
        { name: "Kakémonos", materials: ["Toile polyester", "Enrouleur inclus"], price: "25 000 CFA/unité" },
      ]
    },
    {
      category: "Objets Publicitaires",
      icon: Gift,
      items: [
        { name: "Mugs personnalisés", materials: ["Céramique", "Sublimation"], price: "2 500 CFA/unité" },
        { name: "T-shirts & Polos", materials: ["Coton", "Sérigraphie/Flex"], price: "5 000 CFA/unité" },
        { name: "Clés USB", materials: ["Marquage laser", "Capacités variées"], price: "7 500 CFA/unité" },
        { name: "Calendriers", materials: ["Papier couché", "Reliure spirale"], price: "3 500 CFA/unité" },
      ]
    },
    {
      category: "Supports Premium",
      icon: Award,
      items: [
        { name: "Toiles Canvas", materials: ["Toile artistique", "Châssis bois"], price: "12 500 CFA/unité" },
        { name: "Plexiglas", materials: ["Impression directe", "Épaisseur 3mm"], price: "15 000 CFA/m²" },
        { name: "Métal brossé", materials: ["Aluminium", "Finition premium"], price: "20 000 CFA/m²" },
        { name: "Cartes PVC", materials: ["Plastique rigide", "Finitions spéciales"], price: "500 CFA/unité" },
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-2xl backdrop-blur-sm border border-primary/20">
                <Package className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
              Supports <span className="text-primary">Variés</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Découvrez notre gamme complète de supports de conception graphique et d'impression professionnelle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/conception">
                  <Palette className="w-4 h-4 mr-2" />
                  Commander une conception
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/impressions">
                  <Printer className="w-4 h-4 mr-2" />
                  Commander une impression
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16 -mt-8">
        {/* Supports de Conception */}
        <section className="mb-16 mt-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Supports de <span className="text-primary">Conception</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nos graphistes créent des designs uniques pour tous vos besoins de communication
            </p>
          </div>
          
          <div className="space-y-12">
            {conceptionSupports.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="border-0 shadow-lg bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {item.price}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="space-y-2">
                          {item.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Supports d'Impression */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Supports d'<span className="text-secondary-foreground">Impression</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Impression professionnelle haute qualité sur une large gamme de supports
            </p>
          </div>
          
          <div className="space-y-12">
            {impressionSupports.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    <category.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="border-0 shadow-lg bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="border-secondary/30 text-secondary-foreground">
                            {item.price}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="space-y-2">
                          {item.materials.map((material, materialIndex) => (
                            <li key={materialIndex} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-secondary-foreground mr-2 flex-shrink-0" />
                              {material}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contactez-nous pour discuter de vos besoins spécifiques ou obtenez un devis personnalisé
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/conception">
                    Demander une conception
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    Nous contacter
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Supports;
