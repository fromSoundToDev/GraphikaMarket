import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../components/ui/card';
import {
  Users,
  ShoppingCart,
  FileText,
  CheckCircle,
  Clock,
  TrendingUp
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { AdminCharts } from '../components/charts/AdminCharts';

export const AdminDashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Utilisateurs Inscrits',
      value: '3,457',
      icon: Users,
      description: "Nombre total d'utilisateurs inscrits sur la plateforme",
      color: 'text-blue-600'
    },
    {
      title: 'Commandes Reçues',
      value: '1,234',
      icon: ShoppingCart,
      description: 'Nombre total de commandes passées',
      color: 'text-green-600'
    },
    {
      title: 'Projets en Cours',
      value: '456',
      icon: FileText,
      description: 'Nombre de projets actuellement en cours de réalisation',
      color: 'text-yellow-600'
    },
    {
      title: 'Graphistes Actifs',
      value: '123',
      icon: CheckCircle,
      description: 'Nombre de graphistes actuellement actifs sur la plateforme',
      color: 'text-purple-600'
    },
    {
      title: 'Candidatures en Attente',
      value: '78',
      icon: Clock,
      description: 'Nombre de candidatures de graphistes en attente de validation',
      color: 'text-orange-600'
    },
    {
      title: 'Revenu Total',
      value: '23 456 000 CFA',
      icon: TrendingUp,
      description: 'Revenu total généré par la plateforme',
      color: 'text-teal-600'
    }
  ];

  const summaryCards = [
    {
      title: 'Performance Mensuelle',
      description: 'Résumé des performances du mois en cours',
      items: [
        { label: 'Nouveaux utilisateurs', value: '+234', change: '+12.5%' },
        { label: 'Commandes complétées', value: '89', change: '+8.3%' },
        { label: 'Revenus générés', value: '15 430 000 CFA', change: '+15.2%' },
        { label: 'Taux de satisfaction', value: '94.2%', change: '+2.1%' }
      ]
    },
    {
      title: 'Activité des Graphistes',
      description: "Statistiques sur l'activité des graphistes",
      items: [
        { label: 'Graphistes actifs ce mois', value: '87', change: '+5.4%' },
        { label: 'Projets livrés', value: '156', change: '+18.7%' },
        { label: 'Note moyenne', value: '4.8/5', change: '+0.1' },
        { label: 'Temps moyen de livraison', value: '3.2 jours', change: '-0.5' }
      ]
    },
    {
      title: 'Tendances des Services',
      description: 'Évolution de la demande par type de service',
      items: [
        { label: 'Design de logos', value: '45%', change: '+3.2%' },
        { label: "Services d'impression", value: '28%', change: '+1.8%' },
        { label: 'Packaging design', value: '18%', change: '-0.5%' },
        { label: 'Web design', value: '9%', change: '+2.1%' }
      ]
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Administration - Tableau de bord
        </h1>
        <p className="text-gray-600">
          Bonjour {user?.name}, voici une vue d'ensemble
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{stat.title}</CardTitle>
              <CardDescription>{stat.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
              <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Graphiques et Analyses
        </h2>
        <AdminCharts />
      </div>

      {/* Summary Cards */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Résumés Détaillés
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {summaryCards.map((summary, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{summary.title}</CardTitle>
                <CardDescription>{summary.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {summary.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm text-gray-600">{item.label}</span>
                      <div className="text-right">
                        <div className="font-semibold">{item.value}</div>
                        <div
                          className={`text-xs ${
                            item.change.startsWith('+') || item.change.startsWith('-0.')
                              ? 'text-green-600'
                              : item.change.startsWith('-')
                              ? 'text-red-600'
                              : 'text-gray-500'
                          }`}
                        >
                          {item.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Activité Récente
        </h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 pb-4 border-b">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Nouveau graphiste approuvé</p>
                  <p className="text-xs text-gray-500">
                    Marie Dubois a été approuvée comme graphiste
                  </p>
                </div>
                <span className="text-xs text-gray-400">Il y a 2h</span>
              </div>
              <div className="flex items-center space-x-4 pb-4 border-b">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Commande importante reçue</p>
                  <p className="text-xs text-gray-500">
                    Commande de 1 500 000 CFA pour un rebranding complet
                  </p>
                </div>
                <span className="text-xs text-gray-400">Il y a 4h</span>
              </div>
              <div className="flex items-center space-x-4 pb-4 border-b">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Nouveau record mensuel</p>
                  <p className="text-xs text-gray-500">
                    Plus de 50 projets complétés ce mois
                  </p>
                </div>
                <span className="text-xs text-gray-400">Il y a 6h</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Maintenance système</p>
                  <p className="text-xs text-gray-500">
                    Mise à jour de sécurité effectuée avec succès
                  </p>
                </div>
                <span className="text-xs text-gray-400">Il y a 8h</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
