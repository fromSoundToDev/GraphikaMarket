import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import { Search, Plus, Send, Bell, Users, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export const AdminNotifications = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const notifications = [
    {
      id: 1,
      title: 'Nouvelle promotion - 50% sur les logos',
      message: 'Profitez de notre offre exceptionnelle sur tous les designs de logos jusqu\'au 31 janvier !',
      type: 'Promotion',
      target: 'Tous les clients',
      sentDate: '2024-01-15 14:30',
      status: 'Envoyé',
      recipients: 1250,
      openRate: '68%',
      clickRate: '12%',
    },
    {
      id: 2,
      title: 'Nouveaux graphistes disponibles',
      message: 'Découvrez nos nouveaux talents créatifs qui ont rejoint notre équipe !',
      type: 'Information',
      target: 'Clients actifs',
      sentDate: '2024-01-10 10:15',
      status: 'Envoyé',
      recipients: 890,
      openRate: '75%',
      clickRate: '18%',
    },
    {
      id: 3,
      title: 'Rappel commande en attente',
      message: 'Votre commande #1234 est en attente de validation. Merci de vérifier les détails.',
      type: 'Rappel',
      target: 'Clients spécifiques',
      sentDate: '2024-01-08 16:45',
      status: 'Programmé',
      recipients: 45,
      openRate: '-',
      clickRate: '-',
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Promotion': return 'bg-green-100 text-green-800';
      case 'Information': return 'bg-blue-100 text-blue-800';
      case 'Rappel': return 'bg-yellow-100 text-yellow-800';
      case 'Urgent': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Envoyé': return 'bg-green-100 text-green-800';
      case 'Programmé': return 'bg-yellow-100 text-yellow-800';
      case 'Brouillon': return 'bg-gray-100 text-gray-800';
      case 'Échec': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const NotificationCard = ({ notification }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Bell className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <CardTitle className="text-lg">{notification.title}</CardTitle>
              <CardDescription className="line-clamp-2">{notification.message}</CardDescription>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-1">
            <Badge className={getTypeColor(notification.type)}>{notification.type}</Badge>
            <Badge className={getStatusColor(notification.status)} variant="outline">{notification.status}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Cible:</span>
              <p className="font-medium">{notification.target}</p>
            </div>
            <div>
              <span className="text-gray-500">Destinataires:</span>
              <p className="font-medium">{notification.recipients}</p>
            </div>
            <div>
              <span className="text-gray-500">Envoyé le:</span>
              <p className="font-medium">{notification.sentDate}</p>
            </div>
            <div>
              <span className="text-gray-500">Statut:</span>
              <p className="font-medium">{notification.status}</p>
            </div>
          </div>

          {notification.status === 'Envoyé' && (
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-lg font-bold text-blue-600">{notification.openRate}</p>
                <p className="text-sm text-gray-600">Taux d'ouverture</p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <p className="text-lg font-bold text-green-600">{notification.clickRate}</p>
                <p className="text-sm text-gray-600">Taux de clic</p>
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Send className="w-4 h-4 mr-1" />
              Renvoyer
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              Dupliquer
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const CreateNotificationForm = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Créer une nouvelle notification
        </CardTitle>
        <CardDescription>
          Envoyez un message ciblé à vos utilisateurs
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Titre de la notification</Label>
              <Input id="title" placeholder="Ex: Nouvelle promotion" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Rédigez votre message..." rows={4} />
            </div>
            <div>
              <Label htmlFor="type">Type de notification</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner un type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="promotion">Promotion</SelectItem>
                  <SelectItem value="information">Information</SelectItem>
                  <SelectItem value="rappel">Rappel</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label>Cible</Label>
              <div className="space-y-3 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="all-users" />
                  <Label htmlFor="all-users">Tous les utilisateurs</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="active-clients" />
                  <Label htmlFor="active-clients">Clients actifs</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="graphistes" />
                  <Label htmlFor="graphistes">Graphistes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="inactive-users" />
                  <Label htmlFor="inactive-users">Utilisateurs inactifs</Label>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="schedule">Programmation</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Envoyer maintenant" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="now">Envoyer maintenant</SelectItem>
                  <SelectItem value="schedule">Programmer l'envoi</SelectItem>
                  <SelectItem value="draft">Sauvegarder en brouillon</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="priority">Priorité</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Normale" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Basse</SelectItem>
                  <SelectItem value="normal">Normale</SelectItem>
                  <SelectItem value="high">Élevée</SelectItem>
                  <SelectItem value="urgent">Urgente</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button className="flex-1">
            <Send className="w-4 h-4 mr-2" />
            Envoyer maintenant
          </Button>
          <Button variant="outline" className="flex-1">
            <Clock className="w-4 h-4 mr-2" />
            Programmer
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const stats = [
    {
      title: 'Notifications Envoyées',
      value: notifications.filter(n => n.status === 'Envoyé').length.toString(),
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      title: 'En Attente',
      value: notifications.filter(n => n.status === 'Programmé').length.toString(),
      icon: Clock,
      color: 'text-yellow-600',
    },
    {
      title: 'Total Destinataires',
      value: notifications.reduce((sum, n) => sum + n.recipients, 0).toLocaleString(),
      icon: Users,
      color: 'text-blue-600',
    },
    {
      title: 'Taux d\'ouverture moyen',
      value: '71%',
      icon: AlertCircle,
      color: 'text-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Gestion des Notifications
          </h1>
          <p className="text-gray-600">
            Créez et envoyez des notifications ciblées à vos utilisateurs
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

        <Tabs defaultValue="list" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="list">Journal des notifications</TabsTrigger>
            <TabsTrigger value="create">Créer une notification</TabsTrigger>
          </TabsList>

          <TabsContent value="list">
            <div className="mb-6">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Rechercher une notification..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {notifications.map((notification) => (
                <NotificationCard key={notification.id} notification={notification} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="create">
            <CreateNotificationForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminNotifications;
