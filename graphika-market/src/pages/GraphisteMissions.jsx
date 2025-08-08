import React, { useState } from 'react';
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import {
  Tabs, TabsContent, TabsList, TabsTrigger
} from '../components/ui/tabs';
import { Input } from '../components/ui/input';
import {
  Search, Calendar, Euro, MessageSquare, Upload, Clock
} from 'lucide-react';

const GraphisteMissions = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const activeMissions = [
   {
      id: 'M001',
      title: 'Logo startup tech innovante',
      client: 'TechCorp Solutions',
      type: 'Logo & Identité',
      deadline: '2024-01-25',
      price: '180€',
      status: 'En cours',
      progress: 60,
      description: 'Création d\'un logo moderne pour une startup spécialisée dans l\'IA',
      deliverables: ['Logo principal', 'Déclinaisons', 'Charte couleurs'],
    },
    {
      id: 'M002',
      title: 'Flyer événement corporate',
      client: 'Event Pro Management',
      type: 'Print',
      deadline: '2024-01-22',
      price: '120€',
      status: 'Révision',
      progress: 85,
      description: 'Design de flyer pour un événement d\'entreprise premium',
      deliverables: ['Flyer A5', 'Version web'],
    },
    {
      id: 'M003',
      title: 'Carte de visite cabinet avocat',
      client: 'Cabinet Legal & Partners',
      type: 'Print',
      deadline: '2024-01-28',
      price: '75€',
      status: 'Nouveau',
      progress: 10,
      description: 'Cartes de visite élégantes pour cabinet d\'avocats',
      deliverables: ['Design recto-verso', 'Fichiers impression'],
    },
  ];

  const availableMissions = [
  {
      id: 'A001',
      title: 'Design packaging produit cosmétique',
      type: 'Packaging',
      deadline: '2024-02-01',
      price: '250€',
      difficulty: 'Intermédiaire',
      client: 'BeautyBrand',
      description: 'Création de packaging pour une nouvelle gamme de produits bio',
      skills: ['Packaging', 'Illustration', 'Print'],
      applications: 3,
    },
    {
      id: 'A002',
      title: 'Identité visuelle restaurant gastronomique',
      type: 'Logo & Identité',
      deadline: '2024-02-05',
      price: '320€',
      difficulty: 'Avancé',
      client: 'Le Gourmet Parisien',
      description: 'Identité complète pour restaurant haut de gamme',
      skills: ['Logo Design', 'Branding', 'Typography'],
      applications: 7,
    },
    {
      id: 'A003',
      title: 'Affiche festival musical',
      type: 'Print',
      deadline: '2024-01-30',
      price: '150€',
      difficulty: 'Débutant',
      client: 'Music Festival Org',
      description: 'Affiche colorée et dynamique pour festival de musique',
      skills: ['Poster Design', 'Typography', 'Illustration'],
      applications: 12,
    },
  ];

  const completedMissions = [
    {
      id: 'C001',
      title: 'Logo boulangerie artisanale',
      client: 'Boulangerie du Coin',
      completedDate: '2024-01-15',
      price: '140€',
      rating: 5,
      feedback: 'Excellent travail, très professionnel et créatif!',
    },
    {
      id: 'C002',
      title: 'Menu restaurant',
      client: 'Bistrot Central',
      completedDate: '2024-01-12',
      price: '95€',
      rating: 4,
      feedback: 'Design très réussi, quelques petites modifications demandées.',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Nouveau': return 'bg-blue-100 text-blue-800';
      case 'En cours': return 'bg-yellow-100 text-yellow-800';
      case 'Révision': return 'bg-orange-100 text-orange-800';
      case 'Terminé': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Débutant': return 'bg-green-100 text-green-800';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800';
      case 'Avancé': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const MissionCard = ({ mission, type }) => {
    if (type === 'active') {
      return (
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">{mission.title}</CardTitle>
                <CardDescription>{mission.client} • {mission.type}</CardDescription>
              </div>
              <div className="text-right">
                <Badge className={getStatusColor(mission.status)}>{mission.status}</Badge>
                <p className="font-bold text-purple-600 mt-1">{mission.price}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">{mission.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progression</span>
                  <span>{mission.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: `${mission.progress}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-1" />
                Échéance: {mission.deadline}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Livrables:</p>
                <ul className="text-sm text-gray-600">
                  {mission.deliverables.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">
                  <Upload className="w-4 h-4 mr-1" />
                  Livrer
                </Button>
                <Button variant="outline">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  Message
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }

    if (type === 'available') {
      return (
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">{mission.title}</CardTitle>
                <CardDescription>{mission.client} • {mission.type}</CardDescription>
              </div>
              <div className="text-right">
                <Badge className={getDifficultyColor(mission.difficulty)}>{mission.difficulty}</Badge>
                <p className="font-bold text-purple-600 mt-1">{mission.price}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">{mission.description}</p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-1" />
                  {mission.deadline}
                </div>
                <span className="text-gray-500">{mission.applications} candidature(s)</span>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Compétences requises:</p>
                <div className="flex flex-wrap gap-1">
                  {mission.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button className="w-full">Postuler à cette mission</Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">{mission.title}</CardTitle>
              <CardDescription>{mission.client}</CardDescription>
            </div>
            <div className="text-right">
              <p className="font-bold text-green-600">{mission.price}</p>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${i < mission.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-1" />
              Terminé le {mission.completedDate}
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm italic">"{mission.feedback}"</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mes Missions</h1>
          <p className="text-gray-600">Gérez vos projets et découvrez de nouvelles opportunités</p>
        </div>

        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Rechercher une mission..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-600">{activeMissions.length}</p>
              <p className="text-sm text-gray-600">Missions actives</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-600">{completedMissions.length}</p>
              <p className="text-sm text-gray-600">Missions terminées</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Euro className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-purple-600">1,240€</p>
              <p className="text-sm text-gray-600">Revenus ce mois</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-2xl font-bold text-yellow-600">4.8</p>
              <p className="text-sm text-gray-600">Note moyenne</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">Missions actives ({activeMissions.length})</TabsTrigger>
            <TabsTrigger value="available">Disponibles ({availableMissions.length})</TabsTrigger>
            <TabsTrigger value="completed">Terminées ({completedMissions.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeMissions.map((mission) => (
                <MissionCard key={mission.id} mission={mission} type="active" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="available">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableMissions.map((mission) => (
                <MissionCard key={mission.id} mission={mission} type="available" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedMissions.map((mission) => (
                <MissionCard key={mission.id} mission={mission} type="completed" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GraphisteMissions;
