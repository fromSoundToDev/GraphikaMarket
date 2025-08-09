import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Users, Target, Award, Heart, Zap, Shield } from "lucide-react";


const About = () => {
  const stats = [
    { label: "Créateurs actifs", value: "500+", icon: Users },
    { label: "Designs vendus", value: "50K+", icon: Target },
    { label: "Clients satisfaits", value: "10K+", icon: Award },
    { label: "Pays couverts", value: "25+", icon: Heart }
  ];

  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Nous encourageons la créativité et l'innovation dans chaque design."
    },
    {
      icon: Heart,
      title: "Qualité",
      description: "Chaque création est vérifiée et sélectionnée pour sa qualité exceptionnelle."
    },
    {
      icon: Shield,
      title: "Confiance",
      description: "Sécurité des transactions et protection des droits d'auteur garanties."
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Une communauté bienveillante qui favorise l'entraide entre créateurs."
    }
  ];

  const team = [
    {
      name: "Marie Dupont",
      role: "CEO & Fondatrice",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
      bio: "Ex-directrice artistique chez Publicis, passionnée par l'art numérique."
    },
    {
      name: "Thomas Laurent",
      role: "CTO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      bio: "Développeur senior avec 10 ans d'expérience dans les plateformes e-commerce."
    },
    {
      name: "Sarah Chen",
      role: "Directrice Marketing",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      bio: "Experte en marketing digital et stratégie de marque pour startups créatives."
    },
    {
      name: "Lucas Martin",
      role: "Responsable Communauté",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      bio: "Designer graphique devenu community manager, pont entre créateurs et clients."
    }
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Notre Histoire
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Graphika est né de la passion pour la création graphique et de la volonté de connecter les talents avec ceux qui en ont besoin.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Notre Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Démocratiser l'accès au design graphique de qualité en créant une plateforme qui met en relation les créateurs talentueux avec les entrepreneurs, PME et particuliers qui ont besoin de visuels exceptionnels.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Nous croyons que chaque projet mérite un design unique et professionnel, quel que soit le budget. C'est pourquoi nous avons créé un écosystème où la créativité rencontre l'accessibilité.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Rejoindre la communauté
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Équipe créative"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            DesignMarket en Chiffres
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center text-white">
                  <IconComponent className="h-12 w-12 mx-auto mb-4 text-purple-200" />
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-purple-200">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Nos Valeurs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-0">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Notre Équipe
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-0">
                <div className="relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Prêt à Rejoindre l'Aventure ?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Que vous soyez créateur ou client, DesignMarket vous attend pour donner vie à vos projets les plus ambitieux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
              Commencer à vendre
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Explorer les designs
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
