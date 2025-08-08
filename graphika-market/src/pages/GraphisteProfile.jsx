import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/use-toast';
import { User, Star, Euro, Upload, Eye, Edit } from 'lucide-react';

const GraphisteProfile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+33 1 23 45 67 89',
    city: 'Paris',
    bio: 'Graphiste passionné avec 5 ans d\'expérience en design visuel. Spécialisé dans la création d\'identités visuelles modernes et impactantes pour startups et PME.',
    specialties: ['Logo Design', 'Identité Visuelle', 'Print Design', 'Packaging'],
    hourlyRate: '35€',
    availability: 'Temps partiel',
    experience: '5 ans',
  });

  const [stats] = useState({
    missionsCompleted: 27,
    averageRating: 4.8,
    totalEarnings: '12,450€',
    responseTime: '< 2h',
    completionRate: '98%',
    clientSatisfaction: '95%',
  });

  const [portfolio] = useState([
    {
      id: 1,
      title: 'Logo Tech Startup',
      category: 'Logo Design',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=200&fit=crop',
      client: 'TechCorp',
      year: '2024',
    },
    {
      id: 2,
      title: 'Packaging Cosmétique',
      category: 'Packaging',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop',
      client: 'BeautyBrand',
      year: '2023',
    },
    {
      id: 3,
      title: 'Identité Restaurant',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      client: 'Le Gourmet',
      year: '2023',
    },
  ]);

  const [reviews] = useState([
    {
      id: 1,
      client: 'TechCorp Solutions',
      project: 'Logo startup tech',
      rating: 5,
      comment: 'Excellent travail ! Design moderne et professionnel. Communication parfaite tout au long du projet.',
      date: '2024-01-15',
    },
    {
      id: 2,
      client: 'Event Pro',
      project: 'Flyer événement',
      rating: 5,
      comment: 'Créatif et réactif. Le design a dépassé nos attentes. Recommandé !',
      date: '2024-01-10',
    },
    {
      id: 3,
      client: 'Cabinet Legal',
      project: 'Carte de visite',
      rating: 4,
      comment: 'Bon travail, quelques révisions nécessaires mais résultat final satisfaisant.',
      date: '2024-01-05',
    },
  ]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Profil mis à jour",
        description: "Vos informations ont été sauvegardées avec succès.",
      });
      setEditMode(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de la mise à jour.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSpecialtyToggle = (specialty) => {
    setProfileData(prev => ({
      ...prev,
      specialties: prev.specialties.includes(specialty)
        ? prev.specialties.filter(s => s !== specialty)
        : [...prev.specialties, specialty]
    }));
  };

  const specialtyOptions = [
    'Logo Design', 'Identité Visuelle', 'Print Design', 'Web Design',
    'Packaging', 'Illustration', 'Motion Design', 'Photographie'
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
              {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Mon Profil Graphiste</h1>
              <p className="text-gray-600">Gérez votre profil professionnel et vos informations</p>
            </div>
            <Button 
              onClick={() => setEditMode(!editMode)}
              variant={editMode ? "outline" : "default"}
            >
              {editMode ? (
                <>
                  <Eye className="w-4 h-4 mr-2" />
                  Aperçu
                </>
              ) : (
                <>
                  <Edit className="w-4 h-4 mr-2" />
                  Modifier
                </>
              )}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profil</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="stats">Statistiques</TabsTrigger>
            <TabsTrigger value="reviews">Avis Clients</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      Informations personnelles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {editMode ? (
                      <form onSubmit={handleProfileUpdate} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Nom complet</Label>
                            <Input
                              id="name"
                              value={profileData.name}
                              onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={profileData.email}
                              onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Téléphone</Label>
                            <Input
                              id="phone"
                              value={profileData.phone}
                              onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="city">Ville</Label>
                            <Input
                              id="city"
                              value={profileData.city}
                              onChange={(e) => setProfileData(prev => ({ ...prev, city: e.target.value }))}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="bio">Présentation</Label>
                          <Textarea
                            id="bio"
                            value={profileData.bio}
                            onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                            rows={4}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Spécialités</Label>
                          <div className="grid grid-cols-2 gap-2">
                            {specialtyOptions.map((specialty) => (
                              <div key={specialty} className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  checked={profileData.specialties.includes(specialty)}
                                  onChange={() => handleSpecialtyToggle(specialty)}
                                  className="w-4 h-4"
                                />
                                <Label className="text-sm">{specialty}</Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="hourlyRate">Tarif horaire</Label>
                            <Input
                              id="hourlyRate"
                              value={profileData.hourlyRate}
                              onChange={(e) => setProfileData(prev => ({ ...prev, hourlyRate: e.target.value }))}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="availability">Disponibilité</Label>
                            <Input
                              id="availability"
                              value={profileData.availability}
                              onChange={(e) => setProfileData(prev => ({ ...prev, availability: e.target.value }))}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="experience">Expérience</Label>
                            <Input
                              id="experience"
                              value={profileData.experience}
                              onChange={(e) => setProfileData(prev => ({ ...prev, experience: e.target.value }))}
                            />
                          </div>
                        </div>

                        <Button type="submit" disabled={loading}>
                          {loading ? 'Mise à jour...' : 'Sauvegarder les modifications'}
                        </Button>
                      </form>
                    ) : (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm text-gray-500">Nom</Label>
                            <p className="font-medium">{profileData.name}</p>
                          </div>
                          <div>
                            <Label className="text-sm text-gray-500">Email</Label>
                            <p className="font-medium">{profileData.email}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm text-gray-500">Téléphone</Label>
                            <p className="font-medium">{profileData.phone}</p>
                          </div>
                          <div>
                            <Label className="text-sm text-gray-500">Ville</Label>
                            <p className="font-medium">{profileData.city}</p>
                          </div>
                        </div>

                        <div>
                          <Label className="text-sm text-gray-500">Présentation</Label>
                          <p className="mt-1">{profileData.bio}</p>
                        </div>

                        <div>
                          <Label className="text-sm text-gray-500">Spécialités</Label>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {profileData.specialties.map((specialty) => (
                              <Badge key={specialty} variant="secondary">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Profile Summary */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Résumé du profil</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <User className="w-10 h-10 text-purple-600" />
                      </div>
                      <h3 className="font-semibold">{profileData.name}</h3>
                      <p className="text-sm text-gray-600">{profileData.city}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Tarif:</span>
                        <span className="font-medium">{profileData.hourlyRate}/h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Expérience:</span>
                        <span className="font-medium">{profileData.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Disponibilité:</span>
                        <span className="font-medium">{profileData.availability}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Upload className="w-5 h-5 mr-2" />
                      Portfolio
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Ajouter des créations
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Portfolio Tab */}
          <TabsContent value="portfolio">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Mon Portfolio</CardTitle>
                  <Button>
                    <Upload className="w-4 h-4 mr-2" />
                    Ajouter un projet
                  </Button>
                </div>
                <CardDescription>
                  Présentez vos meilleures créations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {portfolio.map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{item.client} • {item.year}</p>
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Stats Tab */}
          <TabsContent value="stats">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-2xl font-bold text-blue-600">{stats.averageRating}</p>
                  <p className="text-sm text-gray-600">Note moyenne</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Euro className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-green-600">{stats.totalEarnings}</p>
                  <p className="text-sm text-gray-600">Revenus totaux</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <User className="w-6 h-6 text-purple-600" />
                  </div>
                  <p className="text-2xl font-bold text-purple-600">{stats.missionsCompleted}</p>
                  <p className="text-sm text-gray-600">Missions terminées</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-medium mb-4">Performances</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Temps de réponse</span>
                      <span className="font-medium">{stats.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Taux de finalisation</span>
                      <span className="font-medium">{stats.completionRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Satisfaction client</span>
                      <span className="font-medium">{stats.clientSatisfaction}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Avis Clients</CardTitle>
                <CardDescription>
                  Ce que disent vos clients sur votre travail
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-medium">{review.client}</h4>
                          <p className="text-sm text-gray-600">{review.project}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center mb-1">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-sm ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          <p className="text-xs text-gray-500">{review.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"{review.comment}"</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GraphisteProfile;
