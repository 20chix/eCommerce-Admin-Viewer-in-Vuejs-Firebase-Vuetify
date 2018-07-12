<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 lg6 offset-sm3>
        <h4>Aggiungi un prodotto</h4>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">

          <v-layout row>
            <v-flex xs12 lg6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                required></v-text-field>
            </v-flex>
          </v-layout>
         
          
          <v-layout row>
            <v-flex xs12 lg6 offset-sm3>
              <v-btn raised class="primary" @click="onPickFile">Scegli Immagine</v-btn>
              <input
                type="file"
                style="display: none"
                ref="fileInput"
                accept="image/*"
                @change="onFilePicked">
            </v-flex>
          </v-layout>

          
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="150">
            </v-flex>
          </v-layout>
          <v-layout row>


            <v-flex xs12 lg6 offset-sm3>
              <v-text-field
                name="description"
                label="Descrizione"
                id="description"
                multi-line
                v-model="description"
                required></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 lg6 offset-sm3>
              <v-text-field
                name="title"
                label="Prezzo"
                id="price"
                v-model="price"
                
                value="10.00"
                prefix="€"
                required></v-text-field>
            </v-flex>
          </v-layout>
    
          
          <v-layout row>
            <v-flex xs12 lg6 offset-sm3>
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit">Aggiungi prodotto</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        imageUrl: '',
        description: '',
        price: '',
        date: new Date(),
        time: new Date(),
        image: null
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' &&
          this.imageUrl !== '' &&
          this.description !== '' &&
          this.price !== ''
      },
      submittableDateTime () {
        const date = new Date(this.date)
        if (typeof this.time === 'string') {
          let hours = this.time.match(/^(\d+)/)[1]
          const minutes = this.time.match(/:(\d+)/)[1]
          date.setHours(hours)
          date.setMinutes(minutes)
        } else {
          date.setHours(this.time.getHours())
          date.setMinutes(this.time.getMinutes())
        }
        return date
      }
    },
    methods: {
      onCreateMeetup () {
        if (!this.formIsValid) {
          return
        }
        if (!this.image) {
          return
        }
        const meetupData = {
          title: this.title,
          image: this.image,
          description: this.description,
          price: this.price,
          date: this.submittableDateTime
        }
        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/')
      },
      onPickFile () {
        this.$refs.fileInput.click()
      },
      onFilePicked (event) {
        const files = event.target.files
        let filename = files[0].name
        if (filename.lastIndexOf('.') <= 0) {
          return alert('Please add a valid file!')
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.image = files[0]
      }
    }
  }
</script>
