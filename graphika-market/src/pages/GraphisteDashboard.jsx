import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  CalendarDays,
  FileText,
  Users,
  CheckCircle,
  XCircle,
  Star,
  LayoutDashboard
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const GraphisteDashboard = () => {
  const { user } = useAuth();

  const stats = [
    { title: 'Missions en cours', value: 5, icon: FileText, color: 'text-blue-600' },
    { title: 'Missions terminées', value: 25, icon: CheckCircle, color: 'text-green-600' },
    { title: 'Revenus ce mois-ci', value: '845.000 fcfa', icon: Star, color: 'text-yellow-600' },
    { title: 'Note moyenne', value: 4.8, icon: Star, color: 'text-purple-600' },
  ];

  const latestMissions = [
    { id: 1, title: 'Création de logo pour startup', date: '2024-02-15', status: 'En cours' },
    { id: 2, title: 'Design de packaging produit', date: '2024-02-10', status: 'Terminée' },
    { id: 3, title: 'Refonte de site web', date: '2024-02-05', status: 'En cours' },
  ];

  const notifications = [
    { id: 1, message: 'Nouvelle mission disponible : Design de flyer événementiel', date: '2024-02-20' },
    { id: 2, message: 'Votre mission "Design de packaging produit" a été validée par le client', date: '2024-02-12' },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Tableau de bord Graphiste
        </h1>
        <p className="text-gray-600">
          Bonjour {user?.name}, gérez vos missions et développez votre activité
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

      {/* Latest Missions */}
      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Dernières missions</CardTitle>
            <CardDescription>Aperçu de vos missions récentes</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Titre
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Statut
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {latestMissions.map((mission) => (
                    <tr key={mission.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{mission.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{mission.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {mission.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notifications */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Alertes et mises à jour récentes</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <ul className="space-y-3">
              {notifications.map((notification) => (
                <li key={notification.id} className="border-b pb-3 last:border-b-0">
                  <div className="text-sm text-gray-900">{notification.message}</div>
                  <div className="text-xs text-gray-500">{notification.date}</div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GraphisteDashboard;
