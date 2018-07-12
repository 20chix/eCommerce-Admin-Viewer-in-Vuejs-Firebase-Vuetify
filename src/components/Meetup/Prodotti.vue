<template>

    


<v-container fluid grid-list-md>
  <!-- Initial text -->
      <v-flex>
          <h2 class="black--text display-3">La Rondine since 1987</h2>
          <span class="subheading">Trent anni di lavoro a Polinago un piccolo paese adagiato nell appennino modenese. 300 metri di esposizione di articoli di ferramenta casalinghi articoli da regalo complementi di arredo e arredo. Vendita al dettaglio al pubblico e all ingrosso per artigiani e commercianti.
        </span>
          <v-divider class="my-3"></v-divider>
        </v-flex>

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



  <v-layout row wrap v-else >
    <v-flex xs12 sm4  v-for="meetup in aggiungi_prodotto" :key="meetup.id" class="mb-2">
      <v-card>
        <v-card-media
           :src="meetup.imageUrl"
            height="200px"
        ></v-card-media>

        <v-card-title primary-title>
          <div>
            <h3 v-if="meetup.description.title > 20" class="headline mb-0">{{ meetup.title.substring(0, 20) }}..</h3>
            <h3 v-else class="headline mb-0">{{ meetup.title.substring(0, 20) }}</h3>
           
            <div v-if="meetup.description.length > 50">{{ meetup.description.substring(0, 50) }}... </div>
            <div v-else>{{ meetup.description.substring(0, 50) }} <br> <br> </div>


          </div>
        </v-card-title>

        <v-card-actions>
                  <v-btn flat :to="'/prodotto/' + meetup.id">
                    <v-icon left light>arrow_forward</v-icon>
                    Dettagli
                  </v-btn>
                  <strong> &euro; {{ meetup.price}}</strong>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
/* eslint-disable */
export default {
  data: () => ({
    size: "sm"
  }),
  computed: {
    aggiungi_prodotto() {
      return this.$store.getters.loadedMeetups;
    },
    loading () {
        return this.$store.getters.loading
      }
  }





};
</script>


<style scoped>
.container {
  max-width: 500;
}
</style>
