import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  CalendarDays,
  Palette,
  CreditCard,
  ListChecks,
  ShoppingCart,
  User2
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const Dashboard = () => {
  const { user } = useAuth();

  const statCards = [
    {
      title: 'Commandes en cours',
      value: 5,
      icon: ListChecks,
      description: 'Nombre de commandes en cours de traitement'
    },
    {
      title: 'Designs commandés',
      value: 12,
      icon: Palette,
      description: 'Nombre total de designs commandés'
    },
    {
      title: 'Impressions commandées',
      value: 8,
      icon: CalendarDays,
      description: 'Nombre total d\'impressions commandées'
    },
    {
      title: 'Dépenses totales',
      value: '1,250€',
      icon: CreditCard,
      description: 'Montant total dépensé sur la plateforme'
    }
  ];

  const quickActions = [
    {
      title: 'Commander un design',
      description: 'Lancez un nouveau projet de design',
      icon: Palette,
      action: () => alert('Commander un design')
    },
    {
      title: 'Commander une impression',
      description: 'Imprimez vos créations',
      icon: CalendarDays,
      action: () => alert('Commander une impression')
    },
    {
      title: 'Voir mes commandes',
      description: 'Suivez l\'état de vos commandes',
      icon: ShoppingCart,
      action: () => alert('Voir mes commandes')
    },
    {
      title: 'Modifier mon profil',
      description: 'Mettez à jour vos informations personnelles',
      icon: User2,
      action: () => alert('Modifier mon profil')
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Tableau de bord
        </h1>
        <p className="text-gray-600">
          Bonjour {user?.name}, voici un aperçu de votre activité
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                <Icon className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-sm text-gray-500">{card.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Actions rapides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{action.title}</CardTitle>
                  <Icon className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{action.description}</p>
                  <Button variant="outline" className="mt-4 w-full" onClick={action.action}>
                    Accéder
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Orders */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Commandes récentes
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Commande
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Montant
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">#2345</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">05/03/2024</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">Design</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                    <span className="relative">Terminée</span>
                  </span>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">75€</p>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">#2344</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">01/03/2024</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">Impression</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                    <span className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"></span>
                    <span className="relative">En cours</span>
                  </span>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">45€</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
