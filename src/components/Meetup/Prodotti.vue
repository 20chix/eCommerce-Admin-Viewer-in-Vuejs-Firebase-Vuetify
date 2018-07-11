<template>

    


<v-container fluid grid-list-md>


          <v-flex>
          <h2 class="black--text">La Rondine since 1987</h2>

          <span class="subheading">Trent anni di lavoro a Polinago un piccolo paese adagiato nell appennino modenese. 300 metri di esposizione di articoli di ferramenta casalinghi articoli da regalo complementi di arredo e arredo. Vendita al dettaglio al pubblico e all ingrosso per artigiani e commercianti.
        </span>

          <v-divider class="my-3"></v-divider>

        </v-flex>

  <v-layout row wrap  >
    <v-flex xs12 sm4  v-for="meetup in aggiungi_prodotto" :key="meetup.id" class="mb-2">
      <v-card>
        <v-card-media
           :src="meetup.imageUrl"
            height="200px"
        ></v-card-media>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ meetup.title }}</h3>
                    <div>{{ meetup.description }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
                  <v-btn flat :to="'/prodotto/' + meetup.id">
                    <v-icon left light>arrow_forward</v-icon>
                    Dettagli
                  </v-btn>
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
      size: 'sm',
       }),
    computed: {
      aggiungi_prodotto () {
        return this.$store.getters.loadedMeetups
      }
    
   }
  }
</script>


<style scoped>
.container {
  max-width: 500;
}
</style>
