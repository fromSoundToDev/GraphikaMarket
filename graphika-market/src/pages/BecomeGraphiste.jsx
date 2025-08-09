import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Palette,
  Users,
  TrendingUp,
  Clock,
  Star,
  Euro,
} from "lucide-react";

export const BecomeGraphiste = () => {
  const benefits = [
    {
      icon: Euro,
      title: "Revenus attractifs",
      description: "Fixez vos tarifs et augmentez vos revenus",
      highlight: "Jusqu'à 5000FCFA/j",
    },
    {
      icon: Users,
      title: "Clients qualifiés",
      description: "Accédez à une base de clients sérieux",
      highlight: "1000+ projets/mois",
    },
    {
      icon: Clock,
      title: "Flexibilité totale",
      description: "Travaillez selon votre planning",
      highlight: "Liberté complète",
    },
    {
      icon: TrendingUp,
      title: "Croissance garantie",
      description: "Développez votre activité avec nous",
      highlight: "Support inclus",
    },
  ];

  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Graphiste depuis 2 ans",
      content:
        "Graphika m'a permis de doubler mes revenus tout en gardant ma liberté. Les clients sont sérieux et les projets variés.",
      rating: 5,
      earnings: "75000FCFA/mois",
    },
    {
      name: "Pierre Dubois",
      role: "Designer freelance",
      content:
        "Une plateforme professionnelle avec un vrai support. Je recommande à tous les graphistes qui veulent développer leur activité.",
      rating: 5,
      earnings: "230000FCFA/mois",
    },
    {
      name: "Marie Lefebvre",
      role: "Illustratrice",
      content:
        "Grâce à Graphika, j'ai pu me spécialiser dans l'illustration et trouver des clients qui valorisent mon travail.",
      rating: 5,
      earnings: "100000FCFA/mois",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Palette className="w-16 h-16 mx-auto mb-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Devenez Graphiste Partenaire
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Rejoignez notre réseau de créatifs et développez votre activité
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-gray-200">Graphistes actifs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100.000 FCFA</div>
              <div className="text-gray-200">Revenus moyens</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-gray-200">Satisfaction client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi nous rejoindre ?
            </h2>
            <p className="text-xl text-gray-600">
              Développez votre carrière avec des avantages uniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <Badge className="mx-auto">{benefit.highlight}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Témoignages de nos graphistes
            </h2>
            <p className="text-xl text-gray-600">
              Ils ont choisi Graphika pour développer leur activité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <Badge variant="secondary">{testimonial.earnings}</Badge>
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section>
        <p className="text-lg text-gray-600 mb-8">
          Rejoignez notre équipe ! Remplissez le formulaire pour proposer vos
          services sur la plateforme.
        </p>
        <Link to="/apply-graphist">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700"
          >
            S'inscrire comme graphiste
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default BecomeGraphiste;
