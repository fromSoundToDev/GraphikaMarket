import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Search, Users, Mail, Phone, MoreHorizontal, Edit, Trash2, Eye } from 'lucide-react';

export const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    {
      id: 1,
      name: 'Jean Dupont',
      email: 'jean.dupont@email.com',
      phone: '+228 97 85 12 24',
      role: 'user',
      status: 'Actif',
      joinDate: '2024-01-15',
      orders: 5,
      totalSpent: '320.000 fcfa',
    },
    {
      id: 2,
      name: 'Marie Martin',
      email: 'marie.martin@email.com',
      phone: '+228 93 54 12 65',
      role: 'user',
      status: 'Actif',
      joinDate: '2024-01-10',
      orders: 12,
      totalSpent: '124.000 fcfa',
    },
    {
      id: 3,
      name: 'Pierre Durand',
      email: 'pierre.durand@email.com',
      phone: '+228 70 52 14 36',
      role: 'user',
      status: 'Inactif',
      joinDate: '2023-12-28',
      orders: 2,
      totalSpent: '76.000 fcfa',
    },
  ];

  const graphistes = [
    {
      id: 1,
      name: 'Sophie Laurent',
      email: 'sophie.laurent@email.com',
      phone: '+229 45 23 63 12',
      role: 'graphiste',
      status: 'Actif',
      joinDate: '2023-11-20',
      specialties: ['Logo', 'Print'],
      completedOrders: 27,
      rating: 4.9,
      earnings: '452.000 fcfa',
    },
    {
      id: 2,
      name: 'Thomas Petit',
      email: 'thomas.petit@email.com',
      phone: '+227 95 59 26 64',
      role: 'graphiste',
      status: 'Actif',
      joinDate: '2023-12-05',
      specialties: ['Web Design', 'Packaging'],
      completedOrders: 19,
      rating: 4.8,
      earnings: '287.000 fcfa',
    },
  ];

  const admins = [
    {
      id: 1,
      name: 'Admin Principal',
      email: 'admin@graphika.com',
      role: 'admin',
      status: 'Actif',
      lastLogin: '2024-01-15 14:30',
      permissions: ['Tous droits'],
    },
    {
      id: 2,
      name: 'Modérateur',
      email: 'moderator@graphika.com',
      role: 'moderator',
      status: 'Actif',
      lastLogin: '2024-01-15 10:15',
      permissions: ['Gestion utilisateurs', 'Gestion commandes'],
    },
  ];

  const getRoleColor = (role) => {
    switch (role) {
      case 'admin': return 'bg-red-100 text-red-800';
      case 'moderator': return 'bg-orange-100 text-orange-800';
      case 'graphiste': return 'bg-purple-100 text-purple-800';
      case 'user': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Actif': return 'bg-green-100 text-green-800';
      case 'Inactif': return 'bg-gray-100 text-gray-800';
      case 'Suspendu': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const UserCard = ({ user, type }) => {
    return (
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className={getRoleColor(user.role)}>
                {user.role === 'user' ? 'Client' :
                  user.role === 'graphiste' ? 'Graphiste' :
                    user.role === 'admin' ? 'Admin' : 'Modérateur'}
              </Badge>
              <Badge className={getStatusColor(user.status)}>
                {user.status}
              </Badge>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            {user.phone && (
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                {user.phone}
              </div>
            )}
            {user.joinDate && (
              <p className="text-sm text-gray-600">
                Inscrit le {user.joinDate}
              </p>
            )}
          </div>

          {type === 'user' && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <p className="text-lg font-bold text-blue-600">{user.orders}</p>
                <p className="text-xs text-gray-600">Commandes</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-green-600">{user.totalSpent}</p>
                <p className="text-xs text-gray-600">Total dépensé</p>
              </div>
            </div>
          )}

          {type === 'graphiste' && (
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>Commandes terminées:</span>
                <span className="font-medium">{user.completedOrders}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Note moyenne:</span>
                <span className="font-medium">{user.rating}/5</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Revenus:</span>
                <span className="font-medium">{user.earnings}</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {user.specialties?.map((specialty, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {type === 'admin' && (
            <div className="space-y-2 mb-4">
              <p className="text-sm text-gray-600">
                Dernière connexion: {user.lastLogin}
              </p>
              <div className="flex flex-wrap gap-1">
                {user.permissions?.map((permission, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {permission}
                  </Badge>
                ))}
              </div>
            </div>
          )}

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
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Gestion des Utilisateurs
          </h1>
          <p className="text-gray-600">
            Gérez les clients, graphistes et administrateurs
          </p>
        </div>

        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Rechercher un utilisateur..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-600">{users.length}</p>
              <p className="text-sm text-gray-600">Clients</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-purple-600">{graphistes.length}</p>
              <p className="text-sm text-gray-600">Graphistes</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-red-600">{admins.length}</p>
              <p className="text-sm text-gray-600">Administrateurs</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-600">
                {users.length + graphistes.length + admins.length}
              </p>
              <p className="text-sm text-gray-600">Total</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="clients" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="clients">Clients ({users.length})</TabsTrigger>
            <TabsTrigger value="graphistes">Graphistes ({graphistes.length})</TabsTrigger>
            <TabsTrigger value="admins">Administrateurs ({admins.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="clients">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Clients</h2>
              <Button>
                <Users className="w-4 h-4 mr-2" />
                Ajouter un client
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map((user) => (
                <UserCard key={user.id} user={user} type="user" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="graphistes">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Graphistes</h2>
              <Button>
                <Users className="w-4 h-4 mr-2" />
                Ajouter un graphiste
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {graphistes.map((graphiste) => (
                <UserCard key={graphiste.id} user={graphiste} type="graphiste" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="admins">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Administrateurs</h2>
              <Button>
                <Users className="w-4 h-4 mr-2" />
                Ajouter un admin
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {admins.map((admin) => (
                <UserCard key={admin.id} user={admin} type="admin" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminUsers;
