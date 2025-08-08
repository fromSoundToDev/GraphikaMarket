import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Search, ShoppingCart, Eye, Edit, Users, Palette, Camera, Clock } from 'lucide-react';

export const AdminOrders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: 'ORD-1247',
      type: 'design',
      title: 'Logo startup tech innovante',
      client: 'TechCorp Solutions',
      clientEmail: 'contact@techcorp.com',
      graphiste: 'Marie Dubois',
      graphisteEmail: 'marie.dubois@email.com',
      status: 'En cours',
      priority: 'Normal',
      amount: '86.000 fcfa',
      createdDate: '2024-01-15',
      deadline: '2024-01-25',
      progress: 65,
      category: 'Logo & Identité',
    },
    {
      id: 'ORD-1246',
      type: 'print',
      title: 'Impression flyers 1000 ex.',
      client: 'Restaurant Le Gourmet',
      clientEmail: 'contact@legourmet.fr',
      graphiste: null,
      status: 'Production',
      priority: 'Urgent',
      amount: '27.000 fcfa',
      createdDate: '2024-01-14',
      deadline: '2024-01-20',
      progress: 80,
      category: 'Impression Papier',
    },
    {
      id: 'ORD-1245',
      type: 'design',
      title: 'Carte de visite cabinet avocat',
      client: 'Cabinet Legal & Partners',
      clientEmail: 'info@cabinettlegal.com',
      graphiste: 'Pierre Martin',
      graphisteEmail: 'pierre.martin@email.com',
      status: 'Terminé',
      priority: 'Normal',
      amount: '49.000 fcfa',
      createdDate: '2024-01-12',
      deadline: '2024-01-18',
      progress: 100,
      category: 'Print Design',
      completedDate: '2024-01-17',
    },
    {
      id: 'ORD-1244',
      type: 'design',
      title: 'Packaging produit cosmétique',
      client: 'BeautyBrand Corp',
      clientEmail: 'design@beautybrand.com',
      graphiste: 'Sophie Laurent',
      graphisteEmail: 'sophie.laurent@email.com',
      status: 'Révision',
      priority: 'Normal',
      amount: '290.000 fcfa',
      createdDate: '2024-01-10',
      deadline: '2024-01-28',
      progress: 90,
      category: 'Packaging',
    },
    {
      id: 'ORD-1243',
      type: 'print',
      title: 'Bâche publicitaire 3x2m',
      client: 'Boutique Fashion Style',
      clientEmail: 'promo@fashionstyle.fr',
      graphiste: null,
      status: 'En attente',
      priority: 'Normal',
      amount: '78.000 fcfa',
      createdDate: '2024-01-09',
      deadline: '2024-01-22',
      progress: 15,
      category: 'Grand Format',
    },
];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Terminé': return 'bg-green-100 text-green-800';
      case 'En cours': return 'bg-blue-100 text-blue-800';
      case 'Révision': return 'bg-orange-100 text-orange-800';
      case 'Production': return 'bg-purple-100 text-purple-800';
      case 'En attente': return 'bg-yellow-100 text-yellow-800';
      case 'Annulé': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Urgent': return 'bg-red-100 text-red-800';
      case 'Élevé': return 'bg-orange-100 text-orange-800';
      case 'Normal': return 'bg-green-100 text-green-800';
      case 'Bas': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type) => {
    return type === 'design' ? Palette : Camera;
  };

  const getTypeColor = (type) => {
    return type === 'design' ? 'text-purple-600' : 'text-green-600';
  };

  const filterOrders = (filter) => {
    let filtered = orders;

    if (filter !== 'all') {
      filtered = filtered.filter(order => order.status === filter);
    }

    if (searchTerm) {
      filtered = filtered.filter(order =>
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.client.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  const OrderCard = ({ order }) => {
    const Icon = getTypeIcon(order.type);

    return (
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Icon className={`w-5 h-5 ${getTypeColor(order.type)}`} />
              </div>
              <div>
                <CardTitle className="text-lg">#{order.id}</CardTitle>
                <CardDescription>{order.title}</CardDescription>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
              <Badge className={getPriorityColor(order.priority)} variant="outline">{order.priority}</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Client:</p>
                <p className="font-medium">{order.client}</p>
                <p className="text-xs text-gray-500">{order.clientEmail}</p>
              </div>
              <div>
                <p className="text-gray-500">Graphiste:</p>
                <p className="font-medium">{order.graphiste || 'Non assigné'}</p>
                {order.graphisteEmail && (
                  <p className="text-xs text-gray-500">{order.graphisteEmail}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progression</span>
                <span>{order.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full transition-all"
                  style={{ width: `${order.progress}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Catégorie:</span>
                <p className="font-medium">{order.category}</p>
              </div>
              <div>
                <span className="text-gray-500">Montant:</span>
                <p className="font-medium text-green-600">{order.amount}</p>
              </div>
              <div>
                <span className="text-gray-500">Créé le:</span>
                <p className="font-medium">{order.createdDate}</p>
              </div>
              <div>
                <span className="text-gray-500">Échéance:</span>
                <p className="font-medium">{order.deadline}</p>
              </div>
            </div>

            {order.completedDate && (
              <div className="text-sm">
                <span className="text-gray-500">Terminé le:</span>
                <p className="font-medium text-green-600">{order.completedDate}</p>
              </div>
            )}

            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Eye className="w-4 h-4 mr-1" />
                Voir détails
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Edit className="w-4 h-4 mr-1" />
                Modifier
              </Button>
              {!order.graphiste && (
                <Button variant="outline" size="sm" className="flex-1">
                  <Users className="w-4 h-4 mr-1" />
                  Assigner
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const stats = [
    {
      title: 'Total Commandes',
      value: orders.length.toString(),
      icon: ShoppingCart,
      color: 'text-blue-600',
    },
    {
      title: 'En cours',
      value: orders.filter(o => ['En cours', 'Révision', 'Production'].includes(o.status)).length.toString(),
      icon: Clock,
      color: 'text-yellow-600',
    },
    {
      title: 'Terminées',
      value: orders.filter(o => o.status === 'Terminé').length.toString(),
      icon: Clock,
      color: 'text-green-600',
    },
    {
      title: 'Non assignées',
      value: orders.filter(o => !o.graphiste).length.toString(),
      icon: Users,
      color: 'text-red-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Gestion des Commandes
          </h1>
          <p className="text-gray-600">
            Surveillez et gérez toutes les commandes de la plateforme
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Rechercher par ID, titre ou client..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filtrer par statut" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les statuts</SelectItem>
              <SelectItem value="En attente">En attente</SelectItem>
              <SelectItem value="En cours">En cours</SelectItem>
              <SelectItem value="Révision">Révision</SelectItem>
              <SelectItem value="Production">Production</SelectItem>
              <SelectItem value="Terminé">Terminé</SelectItem>
              <SelectItem value="Annulé">Annulé</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterOrders(statusFilter).map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>

        {filterOrders(statusFilter).length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <ShoppingCart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Aucune commande trouvée</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;
