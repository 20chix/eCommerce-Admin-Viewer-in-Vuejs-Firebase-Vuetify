<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav">
      <!--This is the navbar  -->
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-if="userIsAuthenticated"
          @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up "></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">20 chix</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}

        </v-btn>
        <v-btn
          v-if="userIsAuthenticated"
          flat
          @click="onLogout">
          <v-icon left dark>exit_to_app</v-icon>
          Logout

        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>

      <router-view></router-view>

    </main>






<!--Footer   -->
 <v-flex xs12>

    <v-card
      flat
      tile
      class="primary lighten-1 white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta magna id metus dictum, vitae hendrerit turpis tempus. Morbi elit enim, imperdiet nec nunc placerat, mattis lobortis libero. Nam luctus nisi diam, sed tincidunt justo porttitor a. Quisque lacus dolor, eleifend id pharetra vel, suscipit non metus. Donec congue augue sed mollis tincidunt. Vestibulum fringilla, sapien at fringilla venenatis, est tortor vulputate dui, in varius massa ex ut neque. Aliquam finibus aliquam placerat. Quisque venenatis mattis lorem sit amet maximus. Vivamus tristique ligula at ante egestas suscipit. Donec tempor vestibulum odio, et hendrerit felis ornare sed. Ut porttitor pharetra sem sit amet pretium. Nulla facilisis varius felis, et iaculis justo viverra et.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2018 — <strong>20 Chix</strong>
      </v-card-text>
    </v-card>
  </v-flex>
  </v-app>
</template>

<script>
/*eslint-disable*/
  export default {
    data () {
      return {
        sideNav: false,
        userAdmin: false,
        icons: [
          'fab fa-facebook',
          'fab fa-twitter',
          'fab fa-instagram'
         ]
       }
    },
    computed: {
      menuItems () {
        let menuItems = [
          {icon: 'face', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
        //Check if the user is authenticated
        if (this.userIsAuthenticated) {
          //check if the user is admin
          if(this.getUserAdmin()){
            console.log("I'am the admin")
            menuItems = [
              // {icon: 'shopping_cart', title: 'Guarda i prodotti', link: '/ExploraProdotti'},
              {icon: 'add', title: 'Add a product', link: '/aggiungi_prodotto/new'},
              {icon: 'person', title: 'Profile', link: '/profile'}
          ]
          }else{
            //check if the user is a normal user
            menuItems = [
              {icon: 'person', title: 'Profile', link: '/profile'}
            ]
          }
          

        }
        
        return menuItems
      },

      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
      },
      //User admin mKyP14pMZzT7cTdZOV4Jln2ey512
      getUserAdmin(){
        if(this.$store.getters.user.id == "G5CAz8syTLZBXQP6Z9MUNmM8DwW2"){
            userAdmin : true
            return true
            
          
        }else{
          userAdmin : false
          return false
        }

      }

    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
