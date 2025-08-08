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
import { Printer, Clock, Upload, CreditCard, Package } from 'lucide-react';

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
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de la création de votre commande.",
        variant: "destructive",
      });
      console.log(error)
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-secondary/20">
      <div className="relative">

        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-secondary/10 rounded-2xl backdrop-blur-sm border border-secondary/20">
                  <Printer className="w-10 h-10 text-secondary-foreground" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
                Service d'<span className="text-secondary-foreground">Impression</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Impression professionnelle de qualité supérieure pour tous vos supports de communication
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-16 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-8">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <Package className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Détails de votre commande</CardTitle>
                      <CardDescription className="text-base mt-1">
                        Spécifiez vos besoins pour obtenir un devis précis et détaillé
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2">
                      <Label>Type d'impression *</Label>
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
                        <Label>Matériau</Label>
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
                        <Label>Format</Label>
                        <Input
                          placeholder="Ex: A4, 85x55mm, sur-mesure"
                          value={formData.format}
                          onChange={(e) => handleChange('format', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Quantité *</Label>
                        <Input
                          type="number"
                          placeholder="Ex: 1000"
                          value={formData.quantity}
                          onChange={(e) => handleChange('quantity', e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Finition</Label>
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
                      <Label>Mode de livraison</Label>
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
                      <Label>Instructions spéciales</Label>
                      <Textarea
                        placeholder="Précisions sur la découpe, couleurs spéciales, contraintes particulières..."
                        value={formData.notes}
                        onChange={(e) => handleChange('notes', e.target.value)}
                        rows={3}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 text-base font-semibold bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 transition-all duration-300"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin"></div>
                          <span>Envoi en cours...</span>
                        </div>
                      ) : "Demander un devis d'impression"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Colonne de droite */}
            <div className="space-y-6">
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm top-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="p-2 bg-accent/20 rounded-lg mr-3">
                      <Package className="w-5 h-5 text-accent-foreground" />
                    </div>
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
                  <div className="p-4 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-lg border border-secondary/20">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Prix unitaire :</span>
                      <span className="text-secondary-foreground">
                        {formData.printType ?
                          printTypes.find(t => t.value === formData.printType)?.price
                          : 'Sur devis'
                        }
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="p-2 bg-primary/20 rounded-lg mr-3">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    Processus d'impression
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                    <div className="w-3 h-3 bg-secondary-foreground rounded-full mr-4 animate-pulse"></div>
                    <span className="font-medium">Réception et vérification des fichiers</span>
                  </div>
                  <div className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-3 h-3 bg-muted rounded-full mr-4"></div>
                    <span>Préparation et BAT</span>
                  </div>
                  <div className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-3 h-3 bg-muted rounded-full mr-4"></div>
                    <span>Impression et finition</span>
                  </div>
                  <div className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-3 h-3 bg-muted rounded-full mr-4"></div>
                    <span>Contrôle qualité</span>
                  </div>
                  <div className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-3 h-3 bg-muted rounded-full mr-4"></div>
                    <span>Expédition ou retrait</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="p-2 bg-accent/20 rounded-lg mr-3">
                      <CreditCard className="w-5 h-5 text-accent-foreground" />
                    </div>
                    Paiement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Le paiement sera demandé après validation du devis et du BAT (Bon À Tirer).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressions;
