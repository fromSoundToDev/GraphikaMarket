import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';
import { Camera, Upload, MapPin, Package } from 'lucide-react';

const OrderPrint = () => {
  const [formData, setFormData] = useState({
    printType: '',
    material: '',
    quantity: '',
    format: '',
    address: '',
    files: [],
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
        description: "Votre demande d'impression a été envoyée. Nous vous recontacterons pour confirmer les détails.",
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

  const printTypes = [
    { value: 'paper', label: 'Impression Papier', price: 'À partir de 75 CFA/unité' },
    { value: 'textile', label: 'Impression Textile', price: 'À partir de 6 000 CFA/pièce' },
    { value: 'banner', label: 'Bâches & Grands Formats', price: 'À partir de 12 500 CFA/m²' },
    { value: 'objects', label: 'Objets Personnalisés', price: 'À partir de 2 500 CFA/pièce' },
  ];

  const materials = {
    paper: ['Papier standard', 'Papier photo', 'Papier texturé', 'Carton'],
    textile: ['Coton', 'Polyester', 'Mélange', 'Textile technique'],
    banner: ['Bâche PVC', 'Vinyle', 'Mesh', 'Dibond'],
    objects: ['Céramique', 'Plastique', 'Métal', 'Tissu'],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Camera className="w-8 h-8 text-green-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Commander une Impression</h1>
          </div>
          <p className="text-gray-600">
            Uploadez vos fichiers et choisissez vos options d'impression
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Détails de votre impression</CardTitle>
                <CardDescription>
                  Sélectionnez vos options et uploadez vos fichiers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label>Upload de fichiers *</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Glissez vos fichiers ici ou cliquez pour sélectionner</p>
                      <p className="text-sm text-gray-500 mb-4">
                        Formats acceptés: PDF, AI, EPS, JPG, PNG - Max 50MB par fichier
                      </p>
                      <Button type="button" variant="outline">
                        Sélectionner des fichiers
                      </Button>
                    </div>
                  </div>

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

                  {formData.printType && (
                    <div className="space-y-2">
                      <Label htmlFor="material">Matériau *</Label>
                      <Select value={formData.material} onValueChange={(value) => handleChange('material', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le matériau" />
                        </SelectTrigger>
                        <SelectContent>
                          {materials[formData.printType]?.map((material) => (
                            <SelectItem key={material} value={material}>
                              {material}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="format">Format</Label>
                      <Select value={formData.format} onValueChange={(value) => handleChange('format', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="a4">A4 (21x29.7cm)</SelectItem>
                          <SelectItem value="a3">A3 (29.7x42cm)</SelectItem>
                          <SelectItem value="a2">A2 (42x59.4cm)</SelectItem>
                          <SelectItem value="a1">A1 (59.4x84.1cm)</SelectItem>
                          <SelectItem value="a0">A0 (84.1x118.9cm)</SelectItem>
                          <SelectItem value="custom">Format personnalisé</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantité *</Label>
                      <Input
                        id="quantity"
                        type="number"
                        placeholder="Ex: 100"
                        value={formData.quantity}
                        onChange={(e) => handleChange('quantity', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Adresse de livraison *</Label>
                    <textarea
                      id="address"
                      className="w-full p-3 border border-gray-300 rounded-md resize-none"
                      placeholder="Adresse complète de livraison..."
                      value={formData.address}
                      onChange={(e) => handleChange('address', e.target.value)}
                      rows={3}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Création en cours..." : "Créer ma commande d'impression"}
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
                  Résumé de commande
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Type:</span>
                  <span className="font-medium">
                    {formData.printType ? 
                      printTypes.find(t => t.value === formData.printType)?.label 
                      : 'Non sélectionné'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Matériau:</span>
                  <span className="font-medium">{formData.material || 'Non spécifié'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Format:</span>
                  <span className="font-medium">{formData.format || 'Non spécifié'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantité:</span>
                  <span className="font-medium">{formData.quantity || 'Non spécifiée'}</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Prix estimé:</span>
                  <span className="text-green-600">À calculer</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Livraison
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>Délais de livraison standard:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Papier: 2-3 jours ouvrés</li>
                  <li>• Textile: 5-7 jours ouvrés</li>
                  <li>• Grands formats: 3-5 jours ouvrés</li>
                  <li>• Objets: 7-10 jours ouvrés</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">
                  Les délais peuvent varier selon la complexité et la quantité
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPrint;
