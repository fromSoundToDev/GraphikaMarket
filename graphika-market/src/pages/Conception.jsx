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
import { Palette, Clock, FileText, Upload, Lightbulb } from 'lucide-react';

const Conception = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    title: '',
    description: '',
    style: '',
    dimensions: '',
    deadline: '',
    budget: '',
    colors: '',
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
        title: "Demande de conception créée !",
        description: "Votre projet de conception personnalisée a été envoyé. Notre équipe va analyser vos besoins.",
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de la création de votre demande.",
        variant: "destructive",
      });
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  const projectTypes = [
    { value: 'logo', label: 'Logo & Identité', price: 'À partir de 100 000 CFA' },
    { value: 'web-design', label: 'Design Web', price: 'À partir de 250 000 CFA' },
    { value: 'branding', label: 'Image de marque complète', price: 'À partir de 400 000 CFA' },
    { value: 'packaging', label: 'Design Packaging', price: 'À partir de 150 000 CFA' },
    { value: 'illustration', label: 'Illustration personnalisée', price: 'À partir de 75 000 CFA' },
    { value: 'infographie', label: 'Infographie', price: 'À partir de 50 000 CFA' },
  ];

  const styleOptions = [
    'Moderne et minimaliste',
    'Classique et élégant',
    'Créatif et artistique',
    'Professionnel et sobre',
    'Coloré et dynamique',
    'Vintage et rétro'
  ];

  return (

    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-secondary/20">
      <div className="relative">

        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-2xl backdrop-blur-sm border border-primary/20">
                  <Lightbulb className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
                Conception <span className="text-primary">Personnalisée</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Créons ensemble un visuel unique qui correspond parfaitement à votre vision et à votre identité de marque
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
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Palette className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Détails de votre projet</CardTitle>
                      <CardDescription className="text-base mt-1">
                        Plus vous nous donnez d'informations, plus nous pourrons créer quelque chose d'unique
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Type de projet *</Label>
                      <Select value={formData.projectType} onValueChange={(value) => handleChange('projectType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le type de projet" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
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
                      <Label htmlFor="title">Nom du projet *</Label>
                      <Input
                        id="title"
                        placeholder="Ex: Logo pour ma startup innovante"
                        value={formData.title}
                        onChange={(e) => handleChange('title', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description détaillée de votre vision *</Label>
                      <Textarea
                        id="description"
                        placeholder="Décrivez votre projet : objectifs, message à transmettre, public cible, inspiration..."
                        value={formData.description}
                        onChange={(e) => handleChange('description', e.target.value)}
                        rows={5}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="style">Style souhaité</Label>
                        <Select value={formData.style} onValueChange={(value) => handleChange('style', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choisissez un style" />
                          </SelectTrigger>
                          <SelectContent>
                            {styleOptions.map((style) => (
                              <SelectItem key={style} value={style}>
                                {style}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="colors">Couleurs préférées</Label>
                        <Input
                          id="colors"
                          placeholder="Ex: Bleu, blanc, or"
                          value={formData.colors}
                          onChange={(e) => handleChange('colors', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dimensions">Dimensions</Label>
                        <Input
                          id="dimensions"
                          placeholder="Ex: A4, 1920x1080px"
                          value={formData.dimensions}
                          onChange={(e) => handleChange('dimensions', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="deadline">Délai souhaité</Label>
                        <Select value={formData.deadline} onValueChange={(value) => handleChange('deadline', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez le délai" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">Urgent (3-5 jours) +30%</SelectItem>
                            <SelectItem value="1-week">1 semaine</SelectItem>
                            <SelectItem value="2-weeks">2 semaines</SelectItem>
                            <SelectItem value="1-month">1 mois</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Images de référence et inspiration</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">
                          Uploadez des images qui vous inspirent
                        </p>
                        <p className="text-xs text-gray-500">JPG, PNG - Max 10MB par fichier</p>
                        <Button type="button" variant="outline" className="mt-3">
                          Ajouter des références
                        </Button>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                          <span>Envoi en cours...</span>
                        </div>
                      ) : 'Demander un devis personnalisé'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Colonne droite */}
            <div className="space-y-6">
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm top-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="p-2 bg-secondary/20 rounded-lg mr-3">
                      <FileText className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    Résumé du projet
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Type :</span>
                    <span className="font-medium">
                      {formData.projectType ? 
                        projectTypes.find(t => t.value === formData.projectType)?.label 
                        : 'Non sélectionné'
                      }
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Style :</span>
                    <span className="font-medium">{formData.style || 'Non spécifié'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Délai :</span>
                    <span className="font-medium">{formData.deadline || 'Non spécifié'}</span>
                  </div>
                  <hr />
                  <div className="p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Prix estimé :</span>
                      <span className="text-primary">
                        {formData.projectType ? 
                          projectTypes.find(t => t.value === formData.projectType)?.price 
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
                    <div className="p-2 bg-accent/20 rounded-lg mr-3">
                      <Clock className="w-5 h-5 text-accent-foreground" />
                    </div>
                    Processus de création
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4 animate-pulse"></div>
                    <span className="font-medium">Analyse du brief</span>
                  </div>
                  <div className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-3 h-3 bg-muted rounded-full mr-4"></div>
                    <span>Recherche et concepts</span>
                  </div>
                  <div className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-3 h-3 bg-muted rounded-full mr-4"></div>
                    <span>Présentation des propositions</span>
                  </div>
                  <div className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-3 h-3 bg-muted rounded-full mr-4"></div>
                    <span>Révisions et finalisation</span>
                  </div>
                  <div className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-3 h-3 bg-muted rounded-full mr-4"></div>
                    <span>Livraison des fichiers</span>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Conception;
