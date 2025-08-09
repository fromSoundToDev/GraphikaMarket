import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mt-20 mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-gray-600">
            Dernière mise à jour : 15 janvier 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Objet</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation 
                de la plateforme Graphika, service de mise en relation entre clients et graphistes 
                freelance pour la création de contenus visuels et l'impression de supports de communication.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Définitions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li><strong>Plateforme :</strong> Le site web Graphika accessible à l'adresse graphika.fr</li>
                <li><strong>Utilisateur :</strong> Toute personne utilisant la plateforme</li>
                <li><strong>Client :</strong> Utilisateur passant commande de services</li>
                <li><strong>Graphiste :</strong> Prestataire de services graphiques sur la plateforme</li>
                <li><strong>Mission :</strong> Projet confié par un client à un graphiste</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Acceptation des CGU</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                L'utilisation de la plateforme Graphika implique l'acceptation pleine et entière 
                des présentes CGU. Si vous n'acceptez pas ces conditions, vous ne devez pas 
                utiliser la plateforme.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Inscription et Compte Utilisateur</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">4.1 Création de compte</h4>
                <p>
                  L'inscription sur la plateforme est gratuite. L'utilisateur s'engage à fournir 
                  des informations exactes et à les maintenir à jour.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">4.2 Responsabilité du compte</h4>
                <p>
                  L'utilisateur est responsable de la confidentialité de ses identifiants de 
                  connexion et de toutes les activités effectuées depuis son compte.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Services Proposés</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">5.1 Pour les clients</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Accès à un réseau de graphistes qualifiés</li>
                  <li>Commande de designs personnalisés</li>
                  <li>Services d'impression</li>
                  <li>Suivi de projet et communication intégrée</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">5.2 Pour les graphistes</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Accès à des missions rémunérées</li>
                  <li>Outils de gestion de projet</li>
                  <li>Système de paiement sécurisé</li>
                  <li>Support client dédié</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Commandes et Paiements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">6.1 Processus de commande</h4>
                <p>
                  Les commandes sont confirmées après paiement intégral. Le client dispose 
                  de 3 révisions incluses dans le prix initial.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">6.2 Modalités de paiement</h4>
                <p>
                  Les paiements s'effectuent par carte bancaire ou PayPal. Le graphiste 
                  est rémunéré après validation et livraison du projet.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Propriété Intellectuelle</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Les créations réalisées dans le cadre d'une mission sont cédées au client 
                après paiement intégral. Le graphiste conserve le droit de présenter 
                le travail dans son portfolio sauf demande contraire du client.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Responsabilités et Garanties</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Graphika s'engage à fournir une plateforme fonctionnelle mais ne peut 
                garantir la disponibilité continue du service. La responsabilité de 
                Graphika est limitée au montant des transactions concernées.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Résiliation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                L'utilisateur peut supprimer son compte à tout moment. Graphika se réserve 
                le droit de suspendre ou supprimer un compte en cas de non-respect des présentes CGU.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Modification des CGU</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Graphika se réserve le droit de modifier les présentes CGU à tout moment. 
                Les utilisateurs seront informés par email des modifications importantes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Droit Applicable</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Les présentes CGU sont régies par le droit français. Tout litige sera 
                soumis aux tribunaux compétents de Paris.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;
