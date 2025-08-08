import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';
import { 
  Palette, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  Upload, 
  Star,
  Euro,
  Calendar,
  Award
} from 'lucide-react';

export const BecomeGraphiste = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    experience: '',
    specialties: [],
    hourlyRate: '',
    portfolio: [],
    bio: '',
    availability: 'full-time',
    startDate: '',
    acceptTerms: false,
    acceptCommunication: false,
  });
  
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSpecialtyToggle = (specialty) => {
    setFormData(prev => ({
      ...prev,
      specialties: prev.specialties.includes(specialty)
        ? prev.specialties.filter(s => s !== specialty)
        : [...prev.specialties, specialty]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "Candidature envoyée !",
        description: "Nous examinerons votre profil et vous recontacterons rapidement.",
      });
      navigate('/register', { state: { role: 'graphiste' } });
    } catch (error) {
      console.log(error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi de votre candidature.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    {
      icon: Euro,
      title: 'Revenus attractifs',
      description: 'Fixez vos tarifs et augmentez vos revenus',
      highlight: 'Jusqu\'à 5000FCFA/j',
    },
    {
      icon: Users,
      title: 'Clients qualifiés',
      description: 'Accédez à une base de clients sérieux',
      highlight: '1000+ projets/mois',
    },
    {
      icon: Clock,
      title: 'Flexibilité totale',
      description: 'Travaillez selon votre planning',
      highlight: 'Liberté complète',
    },
    {
      icon: TrendingUp,
      title: 'Croissance garantie',
      description: 'Développez votre activité avec nous',
      highlight: 'Support inclus',
    },
  ];

  const specialtiesOptions = [
    'Logo & Identité visuelle',
    'Print & Editorial',
    'Web Design',
    'Packaging',
    'Illustration',
    'Motion Design',
    'Photographie',
    'Typographie',
  ];

  const testimonials = [
    {
      name: 'Sophie Martin',
      role: 'Graphiste depuis 2 ans',
      content: 'Graphika m\'a permis de doubler mes revenus tout en gardant ma liberté. Les clients sont sérieux et les projets variés.',
      rating: 5,
      earnings: '75000FCFA/mois',
    },
    {
      name: 'Pierre Dubois',
      role: 'Designer freelance',
      content: 'Une plateforme professionnelle avec un vrai support. Je recommande à tous les graphistes qui veulent développer leur activité.',
      rating: 5,
      earnings: '230000FCFA/mois',
    },
    {
      name: 'Marie Lefebvre',
      role: 'Illustratrice',
      content: 'Grâce à Graphika, j\'ai pu me spécialiser dans l\'illustration et trouver des clients qui valorisent mon travail.',
      rating: 5,
      earnings: '100000FCFA/mois',
    },
  ];

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Informations personnelles</h2>
              <p className="text-gray-600">Parlez-nous de vous</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet *</Label>
                <Input
                  id="name"
                  placeholder="Votre nom complet"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+228 97 34 28 09"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Ville *</Label>
                <Input
                  id="city"
                  placeholder="Votre ville"
                  value={formData.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Expérience professionnelle</h2>
              <p className="text-gray-600">Décrivez votre parcours</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="experience">Niveau d'expérience *</Label>
              <Select value={formData.experience} onValueChange={(value) => handleChange('experience', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre niveau" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="junior">Débutant (0-2 ans)</SelectItem>
                  <SelectItem value="intermediate">Intermédiaire (2-5 ans)</SelectItem>
                  <SelectItem value="senior">Expérimenté (5+ ans)</SelectItem>
                  <SelectItem value="expert">Expert (10+ ans)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Spécialités * (sélectionnez au moins 2)</Label>
              <div className="grid grid-cols-2 gap-3">
                {specialtiesOptions.map((specialty) => (
                  <div key={specialty} className="flex items-center space-x-2">
                    <Checkbox
                      checked={formData.specialties.includes(specialty)}
                      onCheckedChange={() => handleSpecialtyToggle(specialty)}
                    />
                    <Label className="text-sm">{specialty}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="hourlyRate">Tarif horaire souhaité (€) *</Label>
              <Select value={formData.hourlyRate} onValueChange={(value) => handleChange('hourlyRate', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre tarif" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15-25">15-25€/h</SelectItem>
                  <SelectItem value="25-35">25-35€/h</SelectItem>
                  <SelectItem value="35-45">35-45€/h</SelectItem>
                  <SelectItem value="45+">45€/h et plus</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

 case 3:
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Portfolio & Présentation</h2>
        <p className="text-gray-600">Montrez-nous votre talent</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Présentation personnelle *</Label>
        <Textarea
          id="bio"
          placeholder="Présentez-vous en quelques lignes : votre parcours, votre style, vos motivations..."
          value={formData.bio}
          onChange={(e) => handleChange('bio', e.target.value)}
          rows={4}
          required
        />
      </div>

      <div className="space-y-2">
        <Label>Portfolio (optionnel)</Label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">Téléchargez vos meilleures créations</p>
          <p className="text-sm text-gray-500">JPG, PNG, PDF - Max 10MB par fichier</p>
          <Button variant="outline" className="mt-4">
            Sélectionner des fichiers
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="availability">Disponibilité *</Label>
          <Select value={formData.availability} onValueChange={(value) => handleChange('availability', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Votre disponibilité" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full-time">Temps plein</SelectItem>
              <SelectItem value="part-time">Temps partiel</SelectItem>
              <SelectItem value="freelance">Freelance</SelectItem>
              <SelectItem value="weekends">Week-ends uniquement</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="startDate">Date de début souhaitée *</Label>
          <Input
            id="startDate"
            type="date"
            value={formData.startDate}
            onChange={(e) => handleChange('startDate', e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );

  case 4:
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Finalisation</h2>
        <p className="text-gray-600">Dernière étape avant de rejoindre l'équipe</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Checkbox
            checked={formData.acceptTerms}
            onCheckedChange={(checked) => handleChange('acceptTerms', checked)}
            required
          />
          <div className="text-sm">
            <p>
              J'accepte les <Link to="/terms" className="text-purple-600 hover:underline">conditions d'utilisation</Link> et la <Link to="/privacy" className="text-purple-600 hover:underline">politique de confidentialité</Link> *
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Checkbox
            checked={formData.acceptCommunication}
            onCheckedChange={(checked) => handleChange('acceptCommunication', checked)}
          />
          <div className="text-sm">
            <p>J'accepte de recevoir des communications marketing et des offres spéciales de Graphika</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">📋 Processus de validation</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>1. Examen de votre candidature (24-48h)</li>
          <li>2. Entretien téléphonique (30 min)</li>
          <li>3. Test pratique (1 projet simple)</li>
          <li>4. Validation et intégration</li>
        </ul>
      </div>
    </div>
  );

      default:
        return null;
    };

    
  };

return (
  <div className="min-h-screen bg-gray-50">
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <Palette className="w-16 h-16 mx-auto mb-4" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Devenez Graphiste Partenaire
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Rejoignez notre réseau de créatifs et développez votre activité
        </p>
        <div className="flex justify-center space-x-8 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-gray-200">Graphistes actifs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">100.000 FCFA</div>
            <div className="text-gray-200">Revenus moyens</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">95%</div>
            <div className="text-gray-200">Satisfaction client</div>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pourquoi nous rejoindre ?
          </h2>
          <p className="text-xl text-gray-600">
            Développez votre carrière avec des avantages uniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
                <Badge className="mx-auto">{benefit.highlight}</Badge>
              </CardHeader>
              <CardContent>
                <CardDescription>{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Témoignages de nos graphistes
          </h2>
          <p className="text-xl text-gray-600">
            Ils ont choisi Graphika pour développer leur activité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Badge variant="secondary">{testimonial.earnings}</Badge>
                </div>
                <CardDescription className="text-base italic">
                  "{testimonial.content}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Application Form */}
    <section className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Candidature</CardTitle>
            <CardDescription className="text-center">
              Étape {step} sur 4
            </CardDescription>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              {renderStep()}

              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                  >
                    Précédent
                  </Button>
                )}

                <div className="ml-auto">
                  {step < 4 ? (
                    <Button
                      type="button"
                      onClick={() => setStep(step + 1)}
                      disabled={
                        (step === 1 && (!formData.name || !formData.email)) ||
                        (step === 2 && (!formData.experience || formData.specialties.length < 2)) ||
                        (step === 3 && (!formData.bio || !formData.availability))
                      }
                    >
                      Suivant
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={!formData.acceptTerms || loading}
                      className="bg-gradient-to-r from-purple-600 to-blue-600"
                    >
                      {loading ? 'Envoi en cours...' : 'Envoyer ma candidature'}
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
);

};

export default BecomeGraphiste;
