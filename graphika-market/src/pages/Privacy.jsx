import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mt-20 mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-gray-600">
            Dernière mise à jour : 15 janvier 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Graphika s'engage à protéger la confidentialité de vos données personnelles. 
                Cette politique explique comment nous collectons, utilisons et protégeons 
                vos informations lorsque vous utilisez notre plateforme.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Données Collectées</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">2.1 Données d'inscription</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse postale</li>
                  <li>Informations de facturation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">2.2 Données d'utilisation</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Historique de navigation</li>
                  <li>Commandes et transactions</li>
                  <li>Communications avec les graphistes</li>
                  <li>Préférences utilisateur</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">2.3 Données techniques</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Adresse IP</li>
                  <li>Type de navigateur</li>
                  <li>Système d'exploitation</li>
                  <li>Cookies et technologies similaires</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Utilisation des Données</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Nous utilisons vos données pour :</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Fournir et améliorer nos services</li>
                <li>Traiter vos commandes et paiements</li>
                <li>Faciliter la communication avec les graphistes</li>
                <li>Personnaliser votre expérience</li>
                <li>Assurer la sécurité de la plateforme</li>
                <li>Respecter nos obligations légales</li>
                <li>Vous envoyer des communications importantes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Partage des Données</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">4.1 Avec les graphistes</h4>
                <p>
                  Nous partageons les informations nécessaires à la réalisation de votre 
                  commande (nom, brief, coordonnées de contact).
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">4.2 Avec nos partenaires</h4>
                <p>
                  Nous pouvons partager vos données avec des prestataires techniques 
                  (hébergement, paiement) sous contrat de confidentialité.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">4.3 Obligations légales</h4>
                <p>
                  Nous pouvons divulguer vos données si requis par la loi ou pour 
                  protéger nos droits et ceux d'autrui.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Sécurité des Données</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Nous mettons en place des mesures de sécurité appropriées pour protéger 
                vos données contre tout accès non autorisé, modification, divulgation ou destruction :
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Chiffrement des données sensibles</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Surveillance continue de nos systèmes</li>
                <li>Formation régulière de nos équipes</li>
                <li>Audits de sécurité périodiques</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Vos Droits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à : privacy@graphika.fr
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Cookies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Nous utilisons des cookies pour améliorer votre expérience :
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
                <li><strong>Cookies de performance :</strong> Analysent l'utilisation du site</li>
                <li><strong>Cookies de préférences :</strong> Mémorisent vos choix</li>
              </ul>
              <p className="mt-4">
                Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Conservation des Données</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Nous conservons vos données personnelles aussi longtemps que nécessaire 
                pour fournir nos services et respecter nos obligations légales. 
                Les données de facturation sont conservées 10 ans conformément aux 
                obligations comptables.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Modifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Cette politique peut être mise à jour occasionnellement. Nous vous 
                informerons des changements importants par email ou via une notification 
                sur la plateforme.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Pour toute question concernant cette politique de confidentialité, 
                contactez notre délégué à la protection des données :
              </p>
              <div className="mt-4 space-y-1">
                <p><strong>Email :</strong> privacy@graphika.com</p>
                <p><strong>Adresse :</strong> 123 Rue de la Création, 75001 Paris</p>
                <p><strong>Téléphone :</strong> xx xx xx xx xx</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
