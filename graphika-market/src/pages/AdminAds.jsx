import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Search, Plus, Eye, Edit, Trash2, Megaphone, BarChart3, Calendar, Image } from 'lucide-react';

export const AdminAds = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const ads = [
    {
      id: 1,
      title: 'Promo Logo -50%',
      description: 'Réduction sur les créations de logos',
      image: '/placeholder.svg',
      link: 'https://graphika.com/promo-logo',
      targetPage: 'Conception',
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      status: 'Actif',
      clicks: 1250,
      views: 15680,
      budget: '500€',
    },
    {
      id: 2,
      title: 'Nouveaux Graphistes',
      description: 'Découvrez nos nouveaux talents',
      image: '/placeholder.svg',
      link: 'https://graphika.com/graphistes',
      targetPage: 'Accueil',
      startDate: '2024-01-10',
      endDate: '2024-01-31',
      status: 'Terminé',
      clicks: 890,
      views: 12450,
      budget: '180.000 fcfa',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Actif': return 'bg-green-100 text-green-800';
      case 'Terminé': return 'bg-gray-100 text-gray-800';
      case 'En attente': return 'bg-yellow-100 text-yellow-800';
      case 'Suspendu': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const AdCard = ({ ad }) => {
    return (
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={ad.image} alt={ad.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <CardTitle className="text-lg">{ad.title}</CardTitle>
                <CardDescription>{ad.description}</CardDescription>
              </div>
            </div>
            <Badge className={getStatusColor(ad.status)}>
              {ad.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Page cible:</span>
                <p className="font-medium">{ad.targetPage}</p>
              </div>
              <div>
                <span className="text-gray-500">Budget:</span>
                <p className="font-medium text-green-600">{ad.budget}</p>
              </div>
              <div>
                <span className="text-gray-500">Début:</span>
                <p className="font-medium">{ad.startDate}</p>
              </div>
              <div>
                <span className="text-gray-500">Fin:</span>
                <p className="font-medium">{ad.endDate}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">{ad.views}</p>
                <p className="text-sm text-gray-600">Vues</p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">{ad.clicks}</p>
                <p className="text-sm text-gray-600">Clics</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Eye className="w-4 h-4 mr-1" />
                Voir
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Edit className="w-4 h-4 mr-1" />
                Modifier
              </Button>
              <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const CreateAdForm = () => {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Créer une nouvelle publicité
          </CardTitle>
          <CardDescription>
            Ajoutez une nouvelle publicité pour promouvoir vos services
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Titre de la publicité</Label>
                <Input id="title" placeholder="Ex: Promo Logo -50%" />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Description de la publicité" />
              </div>
              <div>
                <Label htmlFor="link">Lien de destination</Label>
                <Input id="link" placeholder="https://..." />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="targetPage">Page cible</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une page" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home">Accueil</SelectItem>
                    <SelectItem value="conception">Conception</SelectItem>
                    <SelectItem value="impressions">Impressions</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="budget">Budget</Label>
                <Input id="budget" placeholder="Ex: 500€" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate">Date de début</Label>
                  <Input id="startDate" type="date" />
                </div>
                <div>
                  <Label htmlFor="endDate">Date de fin</Label>
                  <Input id="endDate" type="date" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="image">Image de la publicité</Label>
            <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Image className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-sm text-gray-600">Cliquez pour télécharger une image</p>
              <p className="text-xs text-gray-500">PNG, JPG jusqu'à 2MB</p>
            </div>
          </div>

          <Button className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Créer la publicité
          </Button>
        </CardContent>
      </Card>
    );
  };

  const stats = [
    {
      title: 'Publicités Actives',
      value: ads.filter(ad => ad.status === 'Actif').length.toString(),
      icon: Megaphone,
      color: 'text-green-600',
    },
    {
      title: 'Total Vues',
      value: ads.reduce((sum, ad) => sum + ad.views, 0).toLocaleString(),
      icon: Eye,
      color: 'text-blue-600',
    },
    {
      title: 'Total Clics',
      value: ads.reduce((sum, ad) => sum + ad.clicks, 0).toLocaleString(),
      icon: BarChart3,
      color: 'text-purple-600',
    },
    {
      title: 'Taux de Clic Moyen',
      value: `${(ads.reduce((sum, ad) => sum + (ad.clicks / ad.views * 100), 0) / ads.length).toFixed(1)}%`,
      icon: Calendar,
      color: 'text-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Gestion des Publicités
          </h1>
          <p className="text-gray-600">
            Créez et gérez les publicités de la plateforme
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="list" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="list">Liste des publicités</TabsTrigger>
            <TabsTrigger value="create">Créer une publicité</TabsTrigger>
          </TabsList>

          <TabsContent value="list">
            <div className="mb-6">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Rechercher une publicité..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ads.map((ad) => (
                <AdCard key={ad.id} ad={ad} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="create">
            <CreateAdForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminAds;
