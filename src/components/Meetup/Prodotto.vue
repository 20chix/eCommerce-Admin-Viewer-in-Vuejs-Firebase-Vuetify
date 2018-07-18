<template>
  <v-container>
    <!-- Spinner if loading is true -->
    <v-layout row wrap v-if="loading">
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="5"
          :size="100"></v-progress-circular>
      </v-flex>
    </v-layout>


    <v-layout row wrap v-else>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h6 class="primary--text">{{ product.title }}</h6>
            <template v-if="userIsCreator">
              <v-spacer></v-spacer>
              <!-- Display this only if the user is admin -->
              <app-edit-meetup-details-dialog :meetup="product" v-if="this.getUserAdmin()"></app-edit-meetup-details-dialog>
            </template>
            

          </v-card-title>
          <v-card-media   
            :src="product.imageUrl"
            height="400px"
          ></v-card-media>
          <v-card-text>
             <strong class="display-2 right">  &pound;  {{ product.price }}</strong>
            <div>{{ product.description }}
            <div class="info--text"> Added on {{ product.date | date }}</div>
            </div>
           
          </v-card-text>
          
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    product () {
      return this.$store.getters.loadedMeetup(this.id)
    },
    userIsAuthenticated () {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      )
    },
    userIsCreator () {
      if (!this.userIsAuthenticated) {
        return false
      }
      return this.$store.getters.user.id === this.product.creatorId
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    // User admin mKyP14pMZzT7cTdZOV4Jln2ey512
    getUserAdmin () {
      if (
        this.$store.getters.user.id === 'mKyP14pMZzT7cTdZOV4Jln2ey512' ||
        this.$store.getters.user.id === 'Gupky78JfOeHUAAS36HQIEPxKWz2'
      ) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
