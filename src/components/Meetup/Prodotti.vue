<template>

    


<v-container fluid grid-list-md>
  <!-- Initial text -->
      <v-flex>
          <span class="subheading">
            <br>
            An eCommenrce website, where the admin of the website can add products with price and categories, and a normal can view and add products to basket.
            <br>
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
                    Details
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
