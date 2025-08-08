import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const monthlyRevenue = [
  { month: 'Jan', revenue: 2400, orders: 35 },
  { month: 'Fév', revenue: 1398, orders: 28 },
  { month: 'Mar', revenue: 9800, orders: 45 },
  { month: 'Avr', revenue: 3908, orders: 52 },
  { month: 'Mai', revenue: 4800, orders: 38 },
  { month: 'Jun', revenue: 3800, orders: 41 },
];

const serviceDistribution = [
  { name: 'Design Logo', value: 35, color: '#8B5CF6' },
  { name: 'Impression', value: 25, color: '#06B6D4' },
  { name: 'Packaging', value: 20, color: '#10B981' },
  { name: 'Web Design', value: 15, color: '#F59E0B' },
  { name: 'Autres', value: 5, color: '#EF4444' },
];

const userGrowth = [
  { month: 'Jan', users: 120, graphistes: 15 },
  { month: 'Fév', users: 145, graphistes: 18 },
  { month: 'Mar', users: 189, graphistes: 22 },
  { month: 'Avr', users: 234, graphistes: 28 },
  { month: 'Mai', users: 278, graphistes: 32 },
  { month: 'Jun', users: 345, graphistes: 38 },
];

export function AdminCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Revenue Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Revenus mensuels</CardTitle>
          <CardDescription>Évolution des revenus et commandes</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Service Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Répartition des services</CardTitle>
          <CardDescription>Distribution par type de service</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={serviceDistribution}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {serviceDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* User Growth */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Croissance des utilisateurs</CardTitle>
          <CardDescription>Évolution du nombre d'utilisateurs et graphistes</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#8B5CF6" strokeWidth={2} />
              <Line type="monotone" dataKey="graphistes" stroke="#06B6D4" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
