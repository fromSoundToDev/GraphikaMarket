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
import { Printer, Clock, FileText, Upload, CreditCard, Package } from 'lucide-react';

const Impressions = () => {
  const [formData, setFormData] = useState({
    printType: '',
    material: '',
    format: '',
    quantity: '',
    finishing: '',
    delivery: '',
    files: [],
    notes: '',
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
        title: "Commande d'impression créée !",
        description: "Votre demande d'impression a été envoyée. Nous vous contacterons pour confirmer les détails.",
      });
      navigate('/dashboard');
    } catch (error) {
      console.log(error.message);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de la création de votre commande.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const printTypes = [
    { value: 'business-cards', label: 'Cartes de visite', price: '75 CFA/unité' },
    { value: 'flyers', label: 'Flyers', price: '40 CFA/unité' },
    { value: 'posters', label: 'Affiches', price: '2 500 CFA/unité' },
    { value: 'brochures', label: 'Brochures', price: '250 CFA/unité' },
    { value: 'stickers', label: 'Autocollants', price: '125 CFA/unité' },
    { value: 'banners', label: 'Banderoles', price: '7 500 CFA/m²' },
    { value: 'canvas', label: 'Toiles canvas', price: '12 500 CFA/unité' },
  ];

  const materials = [
    'Papier standard (90g)',
    'Papier premium (170g)',
    'Papier couché brillant',
    'Papier couché mat',
    'Carton rigide',
    'Vinyl adhésif',
    'Toile canvas',
    'Plexiglas',
  ];

  const finishings = [
    'Aucune',
    'Pelliculage brillant',
    'Pelliculage mat',
    'Vernis UV',
    'Dorure à chaud',
    'Gaufrage',
    'Découpe sur-mesure',
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Printer className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Service d'Impression</h1>
          </div>
          <p className="text-gray-600">
            Impression professionnelle de qualité pour tous vos supports de communication
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Détails de votre commande d'impression</CardTitle>
                <CardDescription>
                  Spécifiez vos besoins pour obtenir un devis précis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="printType">Type d'impression *</Label>
                    <Select value={formData.printType} onValueChange={(value) => handleChange('printType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez le type d'impression" />
                      </SelectTrigger>
                      <SelectContent>
                        {printTypes.map((type) => (
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="material">Matériau</Label>
                      <Select value={formData.material} onValueChange={(value) => handleChange('material', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisissez le matériau" />
                        </SelectTrigger>
                        <SelectContent>
                          {materials.map((material) => (
                            <SelectItem key={material} value={material}>
                              {material}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="format">Format</Label>
                      <Input
                        id="format"
                        placeholder="Ex: A4, 85x55mm, sur-mesure"
                        value={formData.format}
                        onChange={(e) => handleChange('format', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantité *</Label>
                      <Input
                        id="quantity"
                        type="number"
                        placeholder="Ex: 1000"
                        value={formData.quantity}
                        onChange={(e) => handleChange('quantity', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="finishing">Finition</Label>
                      <Select value={formData.finishing} onValueChange={(value) => handleChange('finishing', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisissez une finition" />
                        </SelectTrigger>
                        <SelectContent>
                          {finishings.map((finishing) => (
                            <SelectItem key={finishing} value={finishing}>
                              {finishing}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="delivery">Mode de livraison</Label>
                    <Select value={formData.delivery} onValueChange={(value) => handleChange('delivery', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisissez le mode de livraison" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Livraison standard (5-7 jours) - Gratuit</SelectItem>
                        <SelectItem value="express">Livraison express (2-3 jours) - 7 500 CFA</SelectItem>
                        <SelectItem value="pickup">Retrait en magasin - Gratuit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Fichiers à imprimer *</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">
                        Uploadez vos fichiers prêts à imprimer
                      </p>
                      <p className="text-xs text-gray-500">PDF, AI, EPS, PNG haute résolution - Max 50MB</p>
                      <Button type="button" variant="outline" className="mt-3">
                        Sélectionner les fichiers
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Instructions spéciales</Label>
                    <Textarea
                      id="notes"
                      placeholder="Précisions sur la découpe, couleurs spéciales, contraintes particulières..."
                      value={formData.notes}
                      onChange={(e) => handleChange('notes', e.target.value)}
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Envoi en cours...' : 'Demander un devis d\'impression'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="w-5 h-5 mr-2" />
                  Résumé de la commande
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Type :</span>
                  <span className="font-medium">
                    {formData.printType ? 
                      printTypes.find(t => t.value === formData.printType)?.label 
                      : 'Non sélectionné'
                    }
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Matériau :</span>
                  <span className="font-medium">{formData.material || 'Non spécifié'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantité :</span>
                  <span className="font-medium">{formData.quantity || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span>Finition :</span>
                  <span className="font-medium">{formData.finishing || 'Aucune'}</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Prix unitaire :</span>
                  <span className="text-blue-600">
                    {formData.printType ? 
                      printTypes.find(t => t.value === formData.printType)?.price 
                      : 'Sur devis'
                    }
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Processus d'impression
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Réception et vérification des fichiers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span>Préparation et BAT</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span>Impression et finition</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span>Contrôle qualité</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span>Expédition ou retrait</span>
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
                <p>Le paiement sera demandé après validation du devis et du BAT (Bon À Tirer).</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressions;
