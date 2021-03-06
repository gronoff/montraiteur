import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home'
import InscriptionForm from './components/InscriptionForm'
import TraiteurForm from './components/TraiteurForm'
import TestAdrien from './components/TestAdrien'
import TestDimitri from './components/TestDimitri'
import TestAude from './components/TestAude'
import TestNinon from './components/TestNinon'
import EspaceClient from './components/EspaceClient'
import RecapDevis from './components/RecapDevis'
import Wait from './components/Wait'
import EspaceAdmin from './components/EspaceAdmin'
import Resultat from './components/Resultat'

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'inscription',
      path: '/inscription',
      component: InscriptionForm
    },
    {
      name: 'TestAdrien',
      path: '/adrien',
      component: TestAdrien
    },
    {
      name: 'TestDimitri',
      path: '/dimitri',
      component: TestDimitri
    },
    {
      name: 'TestAude',
      path: '/aude',
      component: TestAude
    },
    {
      name: 'TestNinon',
      path: '/ninon',
      component: TestNinon
    },
    {
      name: 'EspaceClient',
      path: '/espaceclient',
      component: EspaceClient
    },
    {
      name: 'RecapDevis',
      path: '/recapdevis',
      component: RecapDevis
    },
    {
      name: 'Wait',
      path: '/wait',
      component: Wait
    },
    {
      name: 'EspaceAdmin',
      path: '/espaceadmin',
      component: EspaceAdmin,
      children: [
        {
          name: 'NewTraiteur',
          path: ':newTraiteur',
          props: true,
          component: TraiteurForm
        }
      ]
    },
    {
      name: 'Resultat',
      path: '/resultat',
      component: Resultat
    },
  ]
});
