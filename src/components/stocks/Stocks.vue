<template>
         <v-layout row wrap>
          <v-flex xs12>
            <v-card class="blue-grey darken-2 white--text" v-for="(stock, index) in stocks" :key="index" >
              <v-card-title primary-title>
                <div class="headline">{{stock.name}}</div>
                <br/>
                <div>{{stock.price}}</div>
              </v-card-title>
              <v-card-actions>
                <v-btn dark>Buy now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
           </v-layout>

</template>
<script>
export default {
   data(){
     return {
         stocks: this.$store.state.stocks
     }   
    }
}
</script>
<style scoped>
    
</style>