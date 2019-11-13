import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from './components/HelloWorld'
import TestAdrien from './components/TestAdrien'
import TestDimitri from './components/TestDimitri'
import TestAude from './components/TestAude'

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'HelloWorld',
      path: '/',
      component: HelloWorld
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
    }
  ]
});
