import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Search, MessageCircle, Phone, Mail, MapPin, Clock, CreditCard, Truck, FileText, Users } from 'lucide-react';

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      category: 'Commandes & Devis',
      icon: FileText,
      faqs: [
        {
          question: "Comment commander un design sur Graphika ?",
          answer: "Pour commander : 1) Créez votre compte gratuit 2) Cliquez sur 'Commander Design' 3) Choisissez votre service (logo, flyer, etc.) 4) Remplissez votre brief détaillé 5) Validez votre commande. Un graphiste togolais sera assigné dans les 2 heures maximum."
        },
        {
          question: "Comment obtenir un devis personnalisé ?",
          answer: "Contactez-nous via le formulaire ou appelez le +228 XX XX XX XX. Nous étudions votre projet et vous envoyons un devis détaillé sous 24h. Pour les projets complexes, une réunion peut être organisée dans nos locaux à Lomé."
        },
        {
          question: "Puis-je modifier ma commande après validation ?",
          answer: "Oui, tant que le graphiste n'a pas commencé le travail (statut 'En attente'). Contactez immédiatement notre service client. Des frais peuvent s'appliquer selon les modifications demandées."
        }
      ]
    },
    {
      category: 'Délais & Livraison',
      icon: Truck,
      faqs: [
        {
          question: "Quels sont les délais de livraison au Togo ?",
          answer: "Délais moyens : Logo (3-5 jours), Flyer/Carte de visite (1-2 jours), Brochure (3-4 jours), Packaging (5-7 jours). Livraison physique : Lomé (24h), autres régions (48-72h). Service express disponible (+50% du tarif)."
        },
        {
          question: "Comment suivre ma commande ?",
          answer: "Connectez-vous à votre espace client pour suivre l'avancement en temps réel. Vous recevez aussi des SMS de notification à chaque étape : assignation du graphiste, première proposition, révisions, validation finale."
        },
        {
          question: "Livrez-vous dans toutes les régions du Togo ?",
          answer: "Oui ! Nous livrons dans les 5 régions : Maritime (Lomé, Aného), Plateaux (Atakpamé, Kpalimé), Centrale (Sokodé), Kara (Kara, Bassar), Savanes (Dapaong, Mango). Tarifs de livraison : Lomé gratuit, autres villes 2.500-5.000 CFA."
        }
      ]
    },
    {
      category: 'Paiements & Prix',
      icon: CreditCard,
      faqs: [
        {
          question: "Quels moyens de paiement acceptez-vous ?",
          answer: "Mobile Money (Moov, Togocel), virement bancaire, espèces (à nos points de retrait), cartes Visa/Mastercard. Paiement 50% à la commande, 50% à la livraison pour les gros projets (+200.000 CFA)."
        },
        {
          question: "Pourquoi vos prix sont-ils adaptés au Togo ?",
          answer: "Nous comprenons le pouvoir d'achat local. Nos tarifs sont 60% moins chers que les agences traditionnelles tout en maintenant une qualité professionnelle. Exemple : Logo complet à partir de 75.000 CFA au lieu de 200.000 CFA ailleurs."
        },
        {
          question: "Proposez-vous des facilités de paiement ?",
          answer: "Oui ! Paiement en 2-3 fois sans frais pour les commandes +100.000 CFA. Tarifs dégressifs pour les entreprises (remises jusqu'à 20%). Programme de fidélité avec points convertibles en réductions."
        }
      ]
    },
    {
      category: 'Qualité & Révisions',
      icon: Users,
      faqs: [
        {
          question: "Comment fonctionne le système de révisions ?",
          answer: "Chaque commande inclut 3 révisions gratuites. Vous échangez avec votre graphiste via notre messagerie sécurisée. Au-delà, révisions à 5.000-10.000 CFA selon la complexité. Révisions illimitées incluses pour les forfaits Premium."
        },
        {
          question: "Que se passe-t-il si je ne suis pas satisfait ?",
          answer: "Garantie satisfaction 100% : nouveau graphiste assigné gratuitement ou remboursement partiel/total selon la situation. Notre équipe qualité vérifie chaque livraison avant envoi au client."
        },
        {
          question: "Dans quels formats recevrai-je mes fichiers ?",
          answer: "Formats standards : PNG/JPG haute résolution (300 DPI), PDF print-ready. Formats sources (AI, PSD, SVG) inclus pour logos et identités visuelles. Fichiers optimisés web et print séparément."
        }
      ]
    }
  ];

  const allFaqs = faqCategories.flatMap(cat => 
    cat.faqs.map(faq => ({ ...faq, category: cat.category }))
  );

  const filteredFaqs = allFaqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const quickLinks = [
    { title: 'Commander un logo', link: '/order-design', icon: '🎨' },
    { title: 'Impression de flyers', link: '/order-print', icon: '📄' },
    { title: 'Devenir graphiste', link: '/become-graphiste', icon: '👨‍🎨' },
    { title: 'Voir mes commandes', link: '/orders', icon: '📦' },
  ];

  return (
    <div className="min-h-screen">
     <div className="max-w-6xl  mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mt-20 mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Centre d'aide Graphika 🇹🇬
          </h1>
          <p className="text-xl text-gray-600">
            Toutes les réponses à vos questions sur nos services au Togo
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Accès rapide</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{link.icon}</div>
                  <p className="text-sm font-medium">{link.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Rechercher dans l'aide... (ex: livraison, paiement, logo)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>

        {/* FAQ by Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <category.icon className="w-6 h-6 text-purple-600" />
                  <span>{category.category}</span>
                  <Badge variant="secondary">{category.faqs.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {category.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`${categoryIndex}-${index}`}>
                      <AccordionTrigger className="text-left text-sm">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 text-sm">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search Results */}
        {searchTerm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>
                Résultats de recherche ({filteredFaqs.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`search-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div>
                        <div>{faq.question}</div>
                        <Badge variant="outline" className="ml-2">{faq.category}</Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        )}

        {/* Contact Support */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Besoin d'aide personnalisée ?</CardTitle>
            <CardDescription>
              Notre équipe togolaise est là pour vous accompagner
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Réponse immédiate<br />7j/7 - 8h à 20h
                </p>
                <Button variant="outline" className="w-full text-xs">
                  +xx xxx xx xx
                </Button>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Réponse sous 4h<br />Lun-Sam 8h-18h
                </p>
                <Button variant="outline" className="w-full text-xs">
                  aide@graphika.com
                </Button>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Téléphone</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Support prioritaire<br />Lun-Ven 8h-17h
                </p>
                <Button variant="outline" className="w-full text-xs">
                  +xx xxx xx xx
                </Button>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Bureau Lomé</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Rendez-vous<br />Lun-Ven 9h-16h
                </p>
                <Button variant="outline" className="w-full text-xs">
                  Quartier Admin
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hours & Emergency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Horaires d'ouverture</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-medium">8h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-medium">9h00 - 15h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="text-gray-500">Fermé</span>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-xs text-purple-600">
                    🚀 Service WhatsApp disponible 7j/7 jusqu'à 20h
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service d'urgence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                Pour les commandes urgentes (livraison sous 24h) ou les problèmes techniques critiques.
              </p>
              <div className="space-y-2">
                <Button className="w-full" variant="destructive" size="sm">
                  Urgence : +228 70 02 55 56
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Frais d'urgence : +50% du tarif normal
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>    
    </div>
  );
};

export default Help;
