import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';
import { Palette, Clock, FileText, Upload, CreditCard } from 'lucide-react';

const OrderDesign = () => {
  const [formData, setFormData] = useState({
    designType: '',
    title: '',
    description: '',
    format: '',
    deadline: '',
    budget: '',
    references: [],
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Commande créée !",
        description: "Votre demande de design a été envoyée. Un graphiste va bientôt prendre en charge votre projet.",
      });
      navigate('/orders');
    } catch (error) {
      console.log(error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de la création de votre commande.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const designTypes = [
    { value: 'logo', label: 'Logo & Identité visuelle', price: 'À partir de 75 000 CFA' },
    { value: 'flyer', label: 'Flyer / Dépliant', price: 'À partir de 40 000 CFA' },
    { value: 'business-card', label: 'Carte de visite', price: 'À partir de 25 000 CFA' },
    { value: 'poster', label: 'Affiche / Poster', price: 'À partir de 50 000 CFA' },
    { value: 'packaging', label: 'Packaging', price: 'À partir de 100 000 CFA' },
    { value: 'web-design', label: 'Design web', price: 'À partir de 150 000 CFA' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Palette className="w-8 h-8 text-purple-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Commander un Design</h1>
          </div>
          <p className="text-gray-600">
            Décrivez votre projet et laissez nos graphistes créer le design parfait pour vous
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Détails de votre projet</CardTitle>
                <CardDescription>
                  Plus vous nous donnez d'informations, meilleur sera le résultat
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="designType">Type de design *</Label>
                    <Select value={formData.designType} onValueChange={(value) => handleChange('designType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez le type de design" />
                      </SelectTrigger>
                      <SelectContent>
                        {designTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            <div className="flex justify-between items-center w-full">
                              <span>{type.label}</span>
                              <Badge variant="secondary" className="ml-2">{type.price}</Badge>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Titre du projet *</Label>
                    <Input
                      id="title"
                      placeholder="Ex: Logo pour mon entreprise de restauration"
                      value={formData.title}
                      onChange={(e) => handleChange('title', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description détaillée *</Label>
                    <Textarea
                      id="description"
                      placeholder="Décrivez votre projet : style souhaité, couleurs, message, public cible..."
                      value={formData.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                      rows={5}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="format">Format souhaité</Label>
                      <Select value={formData.format} onValueChange={(value) => handleChange('format', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="digital">Numérique uniquement</SelectItem>
                          <SelectItem value="print">Pour impression</SelectItem>
                          <SelectItem value="both">Numérique + Impression</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deadline">Délai souhaité</Label>
                      <Select value={formData.deadline} onValueChange={(value) => handleChange('deadline', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le délai" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-day">Express (24h) +50%</SelectItem>
                          <SelectItem value="2-3-days">2-3 jours</SelectItem>
                          <SelectItem value="1-week">1 semaine</SelectItem>
                          <SelectItem value="2-weeks">2 semaines</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Références et inspirations (optionnel)</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">
                        Uploadez des images d'inspiration ou des références
                      </p>
                      <p className="text-xs text-gray-500">JPG, PNG - Max 5MB par fichier</p>
                      <Button type="button" variant="outline" className="mt-3">
                        Sélectionner des fichiers
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Création en cours...' : 'Créer ma commande'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Résumé
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Type de design:</span>
                  <span className="font-medium">
                    {formData.designType ? 
                      designTypes.find(t => t.value === formData.designType)?.label 
                      : 'Non sélectionné'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Format:</span>
                  <span className="font-medium">{formData.format || 'Non spécifié'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Délai:</span>
                  <span className="font-medium">{formData.deadline || 'Non spécifié'}</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Prix estimé:</span>
                  <span className="text-purple-600">
                    {formData.designType ? 
                      designTypes.find(t => t.value === formData.designType)?.price 
                      : 'À définir'}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Processus
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span>Commande créée</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span>Attribution à un graphiste</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span>Création et révisions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span>Livraison finale</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Paiement
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                <p>Le paiement sera effectué après validation du devis personnalisé par notre équipe.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDesign;
