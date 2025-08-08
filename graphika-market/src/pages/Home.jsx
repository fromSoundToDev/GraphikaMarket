import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  ArrowRight, Palette, Camera, Users, Star, CheckCircle, Zap, Shield, Clock, Award, Truck
} from 'lucide-react';

export const Home = () => {
  const features = [
    {
      icon: Palette,
      title: 'Design Graphique Professionnel',
      description: 'Créations sur mesure par nos graphistes experts certifiés',
    },
    {
      icon: Camera,
      title: 'Impression Haute Qualité',
      description: "Technologies d'impression dernière génération pour tous supports",
    },
    {
      icon: Users,
      title: 'Réseau de Graphistes',
      description: 'Plus de 200 créatifs talentueux à votre service',
    },
    {
      icon: Zap,
      title: 'Livraison Express',
      description: 'Livraison sous 24h à Lomé et 48h en province',
    },
    {
      icon: Shield,
      title: 'Garantie Qualité',
      description: 'Satisfaction garantie ou remboursement intégral',
    },
    {
      icon: Clock,
      title: 'Service 24/7',
      description: 'Support client disponible tous les jours de la semaine',
    },
  ];

  const services = [
    {
      title: 'Logo & Identité Visuelle',
      description: 'Création de logos, charte graphique, cartes de visite',
      price: 'À partir de 75.000 CFA',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=200&fit=crop',
      features: ['3 propositions de design', 'Révisions illimitées', 'Fichiers HD + vectoriels']
    },
    {
      title: 'Supports Print',
      description: 'Flyers, affiches, brochures, catalogues',
      price: 'À partir de 15.000 CFA',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop',
      features: ['Papier premium', 'Finition brillante/mate', 'Formats personnalisés']
    },
    {
      title: 'Packaging & Emballage',
      description: "Design d'emballages, étiquettes, packaging produits",
      price: 'À partir de 125.000 CFA',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop',
      features: ['Design 3D', 'Prototypage inclus', 'Conseils matériaux']
    },
    {
      title: 'Signalétique',
      description: 'Panneaux, enseignes, bâches publicitaires',
      price: 'À partir de 45.000 CFA',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop',
      features: ['Installation comprise', 'Matériaux résistants', 'Design personnalisé']
    },
    {
      title: 'Textile Personnalisé',
      description: 'T-shirts, polos, casquettes, uniformes',
      price: 'À partir de 8.500 CFA',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=200&fit=crop',
      features: ['Broderie & sérigraphie', 'Coton premium', 'Tailles variées']
    },
    {
      title: 'Supports Digitaux',
      description: 'Bannières web, posts réseaux sociaux, newsletters',
      price: 'À partir de 25.000 CFA',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop',
      features: ['Formats optimisés', 'Animations incluses', 'Pack 10 visuels']
    },
  ];

  const testimonials = [
    {
      name: 'Akosua Mensah',
      role: 'Directrice, Bella Fashion',
      content: 'Graphika a transformé notre image de marque ! Nos ventes ont augmenté de 40% depuis le nouveau logo.',
      rating: 5,
      location: 'Lomé'
    },
    {
      name: 'Koffi Adjei',
      role: 'Gérant, Restaurant Le Palmier',
      content: 'Service impeccable et livraison ultra rapide. Nos menus et cartes de visite sont magnifiques !',
      rating: 5,
      location: 'Kara'
    },
    {
      name: 'Ama Dovlo',
      role: 'Responsable Communication, NGO Hope',
      content: 'Équipe très professionnelle et créative. Ils ont parfaitement saisi nos besoins pour notre campagne.',
      rating: 5,
      location: 'Atakpamé'
    },
    {
      name: 'Edem Tettey',
      role: 'Entrepreneur, TechStart',
      content: 'Prix compétitifs et qualité au rendez-vous. Je recommande vivement pour tous vos projets graphiques.',
      rating: 5,
      location: 'Sokodé'
    },
  ];

  const stats = [
    { number: '2,500+', label: 'Projets réalisés' },
    { number: '200+', label: 'Graphistes actifs' },
    { number: '98%', label: 'Clients satisfaits' },
    { number: '24h', label: 'Délai moyen' },
  ];

  const advantages = [
    {
      icon: Award,
      title: 'Expertise Locale',
      description: 'Nous connaissons le marché togolais et adaptons nos créations à votre clientèle'
    },
    {
      icon: Truck,
      title: 'Livraison Partout',
      description: 'Livraison dans toutes les régions du Togo avec suivi en temps réel'
    },
    {
      icon: CheckCircle,
      title: 'Prix Transparents',
      description: 'Aucun frais caché, devis détaillé avant validation de votre commande'
    },
  ];

  return (
 <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white">
               Plateforme #1 au Togo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Créez, Imprimez,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Réussissez au Togo
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              La première plateforme togolaise de création graphique et d'impression professionnelle. 
              Des prix adaptés au marché local, une qualité internationale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Commencer maintenant
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/supports">
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-purple-600">
                  Découvrir nos services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl md:text-4xl font-bold text-purple-600">{stat.number}</p>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir Graphika ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              La plateforme qui comprend les besoins des entreprises togolaises
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes adaptées au marché togolais
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                      <Link to="/register">
                        <Button size="sm">Commander</Button>
                      </Link>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              L'avantage Graphika au Togo
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ils nous font confiance à travers le Togo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-sm italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-purple-600 font-medium">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à créer votre projet au Togo ?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Rejoignez plus de 2500 clients satisfaits et donnez vie à vos idées avec Graphika
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Créer mon compte gratuitement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-purple-600">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
