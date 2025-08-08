import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Search, Users, Star, CheckCircle, XCircle, Eye, Edit, Mail, Phone } from 'lucide-react';

export const AdminGraphistes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // const [statusFilter, setStatusFilter] = useState('all');

  const activeGraphistes = [ 
   {
      id: 1,
      name: 'Marie Dubois',
      email: 'marie.dubois@email.com',
      phone: '+33 1 23 45 67 89',
      city: 'Paris',
      joinDate: '2023-11-20',
      status: 'Actif',
      specialties: ['Logo Design', 'Identité Visuelle', 'Print'],
      rating: 4.9,
      reviewsCount: 45,
      completedOrders: 27,
      activeOrders: 3,
      totalEarnings: '3,450€',
      monthlyEarnings: '890€',
      responseTime: '< 2h',
      completionRate: '98%',
      portfolio: 12,
    },
    {
      id: 2,
      name: 'Pierre Martin',
      email: 'pierre.martin@email.com',
      phone: '+225 782 65 23 41',
      city: 'Lyon',
      joinDate: '2023-12-05',
      status: 'Actif',
      specialties: ['Web Design', 'Packaging', 'Illustration'],
      rating: 4.8,
      reviewsCount: 32,
      completedOrders: 19,
      activeOrders: 2,
      totalEarnings: '1.025.000 fcfa',
      monthlyEarnings: '325.000 fcfa',
      responseTime: '< 4h',
      completionRate: '95%',
      portfolio: 8,
    },
    {
      id: 3,
      name: 'Sophie Laurent',
      email: 'sophie.laurent@email.com',
      phone: '+33 1 56 78 90 12',
      city: 'Marseille',
      joinDate: '2023-10-15',
      status: 'Actif',
      specialties: ['Motion Design', 'Branding', 'Typography'],
      rating: 4.7,
      reviewsCount: 28,
      completedOrders: 17,
      activeOrders: 1,
      totalEarnings: '823.000 fcfa',
      monthlyEarnings: '452.000 fcfa',
      responseTime: '< 3h',
      completionRate: '94%',
      portfolio: 15,
    },
];
  const pendingApplications = [  
    {
      id: 4,
      name: 'Thomas Petit',
      email: 'thomas.petit@email.com',
      phone: '+229 96 23 52 41',
      city: 'Toulouse',
      applicationDate: '2024-01-10',
      specialties: ['Logo Design', 'Print Design'],
      experience: '3 ans',
      portfolio: 6,
      status: 'En attente',
      bio: 'Graphiste freelance passionné par le design minimaliste et moderne. Spécialisé dans la création d\'identités visuelles pour startups.',
    },
    {
      id: 5,
      name: 'Julie Bernard',
      email: 'julie.bernard@email.com',
      phone: '+1 025 320 321',
      city: 'Bordeaux',
      applicationDate: '2024-01-08',
      specialties: ['Packaging', 'Illustration', 'Web Design'],
      experience: '5 ans',
      portfolio: 10,
      status: 'En attente',
      bio: 'Designer expérimentée avec une forte expertise en packaging et illustration. Diplômée d\'une école de design reconnue.',
    },
];
  const suspendedGraphistes = [    
    {
      id: 6,
      name: 'Marc Durand',
      email: 'marc.durand@email.com',
      status: 'Suspendu',
      suspensionDate: '2024-01-05',
      reason: 'Retards répétés dans les livraisons',
      completedOrders: 8,
      rating: 3.2,
    },
];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Actif': return 'bg-green-100 text-green-800';
      case 'En attente': return 'bg-yellow-100 text-yellow-800';
      case 'Suspendu': return 'bg-red-100 text-red-800';
      case 'Inactif': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const ActiveGraphisteCard = ({ graphiste }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <CardTitle className="text-lg">{graphiste.name}</CardTitle>
              <CardDescription>{graphiste.city}</CardDescription>
            </div>
          </div>
          <Badge className={getStatusColor(graphiste.status)}>{graphiste.status}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-1 text-sm">
            <div className="flex items-center text-gray-600">
              <Mail className="w-4 h-4 mr-2" />
              {graphiste.email}
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="w-4 h-4 mr-2" />
              {graphiste.phone}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Spécialités:</p>
            <div className="flex flex-wrap gap-1">
              {graphiste.specialties.map((specialty, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="font-bold">{graphiste.rating}</span>
              </div>
              <p className="text-xs text-gray-600">{graphiste.reviewsCount} avis</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-green-600">{graphiste.totalEarnings}</p>
              <p className="text-xs text-gray-600">Revenus totaux</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Missions terminées:</span>
              <span className="font-medium">{graphiste.completedOrders}</span>
            </div>
            <div className="flex justify-between">
              <span>Missions actives:</span>
              <span className="font-medium">{graphiste.activeOrders}</span>
            </div>
            <div className="flex justify-between">
              <span>Taux de finalisation:</span>
              <span className="font-medium">{graphiste.completionRate}</span>
            </div>
            <div className="flex justify-between">
              <span>Temps de réponse:</span>
              <span className="font-medium">{graphiste.responseTime}</span>
            </div>
          </div>
          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Eye className="w-4 h-4 mr-1" /> Profil
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Edit className="w-4 h-4 mr-1" /> Modifier
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const PendingApplicationCard = ({ application }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{application.name}</CardTitle>
            <CardDescription>{application.city} • {application.experience}</CardDescription>
          </div>
          <Badge className={getStatusColor(application.status)}>{application.status}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-1 text-sm">
            <div className="flex items-center text-gray-600">
              <Mail className="w-4 h-4 mr-2" />
              {application.email}
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="w-4 h-4 mr-2" />
              {application.phone}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">Présentation:</p>
            <p className="text-sm text-gray-600">{application.bio}</p>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Spécialités:</p>
            <div className="flex flex-wrap gap-1">
              {application.specialties.map((specialty, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>
          <div className="text-sm">
            <div className="flex justify-between">
              <span>Date de candidature:</span>
              <span className="font-medium">{application.applicationDate}</span>
            </div>
            <div className="flex justify-between">
              <span>Portfolio:</span>
              <span className="font-medium">{application.portfolio} projets</span>
            </div>
          </div>
          <div className="flex gap-2 pt-2">
            <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
              <CheckCircle className="w-4 h-4 mr-1" /> Approuver
            </Button>
            <Button variant="outline" size="sm" className="flex-1 text-red-600 hover:text-red-700">
              <XCircle className="w-4 h-4 mr-1" /> Refuser
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const SuspendedGraphisteCard = ({ graphiste }) => (
    <Card className="hover:shadow-lg transition-shadow border-red-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{graphiste.name}</CardTitle>
            <CardDescription>{graphiste.email}</CardDescription>
          </div>
          <Badge className={getStatusColor(graphiste.status)}>{graphiste.status}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-sm">
            <p className="font-medium text-red-600 mb-1">Motif de suspension:</p>
            <p className="text-gray-600">{graphiste.reason}</p>
          </div>
          <div className="text-sm">
            <div className="flex justify-between">
              <span>Date de suspension:</span>
              <span className="font-medium">{graphiste.suspensionDate}</span>
            </div>
            <div className="flex justify-between">
              <span>Missions terminées:</span>
              <span className="font-medium">{graphiste.completedOrders}</span>
            </div>
            <div className="flex justify-between">
              <span>Note moyenne:</span>
              <span className="font-medium">{graphiste.rating}/5</span>
            </div>
          </div>
          <div className="flex gap-2 pt-2">
            <Button size="sm" className="flex-1" variant="outline">Réactiver</Button>
            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">Supprimer</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const stats = [
    { title: 'Graphistes Actifs', value: activeGraphistes.length, color: 'text-green-600' },
    { title: 'Candidatures', value: pendingApplications.length, color: 'text-yellow-600' },
    { title: 'Suspendus', value: suspendedGraphistes.length, color: 'text-red-600' },
    { title: 'Total', value: activeGraphistes.length + pendingApplications.length + suspendedGraphistes.length, color: 'text-blue-600' },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestion des Graphistes</h1>
        <p className="text-gray-600">Gérez les graphistes actifs, candidatures et suspensions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6 text-center">
              <Users className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Rechercher un graphiste..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="active">Actifs ({activeGraphistes.length})</TabsTrigger>
          <TabsTrigger value="pending">Candidatures ({pendingApplications.length})</TabsTrigger>
          <TabsTrigger value="suspended">Suspendus ({suspendedGraphistes.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeGraphistes.map((g) => (
              <ActiveGraphisteCard key={g.id} graphiste={g} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pending">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pendingApplications.map((a) => (
              <PendingApplicationCard key={a.id} application={a} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="suspended">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suspendedGraphistes.map((g) => (
              <SuspendedGraphisteCard key={g.id} graphiste={g} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminGraphistes;
