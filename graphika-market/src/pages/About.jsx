import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Palette, Users, Award, Target } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: Palette,
      title: 'Créativité',
      description: "Nous encourageons l'innovation et la créativité dans chaque projet.",
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Une plateforme qui unit clients et graphistes pour des résultats exceptionnels.',
    },
    {
      icon: Award,
      title: 'Qualité',
      description: 'Nous garantissons un service de haute qualité à chaque étape.',
    },
    {
      icon: Target,
      title: 'Efficacité',
      description: 'Des processus optimisés pour des délais respectés et des clients satisfaits.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            À propos de Graphika
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La plateforme qui révolutionne la création graphique en connectant
            les talents créatifs avec les entreprises qui en ont besoin.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Notre Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Graphika a été créée pour démocratiser l'accès au design graphique de qualité.
                Nous croyons que chaque entreprise, quelle que soit sa taille, mérite une identité
                visuelle forte et professionnelle. Notre plateforme connecte les meilleurs graphistes
                freelance avec des clients qui cherchent à donner vie à leurs idées.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Story */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fondée en 2017, Graphika est née de la frustration de voir trop d'entreprises
                  lutter pour trouver des graphistes talentueux et abordables.
                </p>
                <p>
                  Nos fondateurs, issus du monde du design et de la technologie, ont imaginé
                  une plateforme qui simplifierait ce processus tout en garantissant la qualité
                  et la satisfaction de tous les acteurs.
                </p>
                <p>
                  Aujourd'hui, Graphika compte plus de 500 graphistes vérifiés et a livré
                  plus de 10 000 projets créatifs à travers la France.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-8">
              <div className="text-center">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-3xl font-bold text-purple-600">500+</p>
                    <p className="text-sm text-gray-600">Graphistes</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-purple-600">10k+</p>
                    <p className="text-sm text-gray-600">Projets livrés</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-purple-600">98%</p>
                    <p className="text-sm text-gray-600">Satisfaction client</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-purple-600">24h</p>
                    <p className="text-sm text-gray-600">Délai moyen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
