import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: '',
  });

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        projectType: '',
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi du message.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@graphika.com',
      link: 'mailto:contact@graphika.com',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+228 70 02 55 56',
      link: '+228 70025556',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: '123 Rue du Design\n75001 Lomé, Togo',
      link: 'https://maps.google.com',
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun-Ven: 9h-18h\nSam: 9h-12h',
      link: null,
    },
  ];

  const faqItems = [
    {
      question: 'Quels sont vos délais de livraison ?',
      answer: 'Les délais varient selon le type de projet : 1-2 jours pour les cartes de visite, 3-5 jours pour les logos, 5-7 jours pour les projets complexes.',
    },
    {
      question: 'Proposez-vous des révisions ?',
      answer: 'Oui, nous incluons jusqu\'à 3 révisions dans nos prestations pour garantir votre satisfaction.',
    },
    {
      question: 'Comment se déroule le processus de commande ?',
      answer: 'Après votre commande, nous assignons un graphiste expert qui travaille avec vous jusqu\'à la livraison finale.',
    },
    {
      question: 'Acceptez-vous les projets urgents ?',
      answer: 'Oui, nous proposons un service express avec livraison en 24-48h moyennant un supplément.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl text-gray-200">Une question ? Un projet ? Notre équipe est à votre écoute</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
                <CardDescription>
                  Décrivez votre projet et nous vous recontacterons rapidement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        placeholder="Votre nom"
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
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+228 70 02 55 56"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Type de projet</Label>
                      <Select value={formData.projectType} onValueChange={(value) => handleChange('projectType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="logo">Logo & Identité</SelectItem>
                          <SelectItem value="print">Supports Print</SelectItem>
                          <SelectItem value="web">Design Web</SelectItem>
                          <SelectItem value="packaging">Packaging</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input
                      id="subject"
                      placeholder="Sujet de votre message"
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre projet en détail..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Envoi en cours...' : <>
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le message
                    </>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info + FAQ */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-purple-600 transition-colors"
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        >
                          {info.content.split('\n').map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </a>
                      ) : (
                        <div className="text-gray-600">
                          {info.content.split('\n').map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Questions fréquentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Horaires d'ouverture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-medium">9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-medium">9h00 - 12h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="text-gray-500">Fermé</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700">
                    📞 Support d'urgence disponible 24h/7j pour les clients Premium
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Map */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre localisation</h2>
            <p className="text-gray-600">Visitez nos bureaux au cœur de Lomé</p>
          </div>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                Carte interactive disponible<br />
                123 Rue du Design, 75001 Lomé
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
