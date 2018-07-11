/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ExploraProdotti from '@/components/Meetup/Prodotti'
import AggiungiProdotto from '@/components/Meetup/AggiungiProdotto'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'
import Prodotto from '@/components/Meetup/Meetup'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ExploraProdotti',
      component: ExploraProdotti
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/ExploraProdotti',
      name: 'ExploraProdotti',
      component: ExploraProdotti
    },
    {
      path: '/aggiungi_prodotto/new',
      name: 'CreateMeetup',
      component: AggiungiProdotto,
      beforeEnter: AuthGuard
    },
    {
      path: '/prodotto/:id',
      name: 'Prodotto',
      props: true,
      component: Prodotto
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})
