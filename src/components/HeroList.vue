<template>
  <b-row>
    <b-col cols="12">
      <h2>
        
        <b-link href="#/add-hero">Add hero</b-link>
        
         
      </h2>
      
     
      <b-table striped hover :items="heros" :fields="fields">
        <img  width="300" height="350" :src="image">
        <template v-slot:cell(actions)="data">
          
          
          <b-button @click.stop="details(data.item)" variant="primary">Details</b-button>
            
        </template>
      </b-table>
    </b-col>
  </b-row>

</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'HeroList',
  data () {
    return {
      fields: [
        { key: 'nickname', label: 'nickname', sortable: true, 'class': 'text-left' },
          { key: 'real_name', label: 'real_name', sortable: true, 'class': 'text-left' },
        { key: 'actions', label: 'Action', 'class': 'text-center' },
      ],
     
      
      heros: [],
      errors: [],
     
      ref: firebase.firestore().collection('heros'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.heros = [];
      querySnapshot.forEach((doc) => {
        this.heros.push({
          key: doc.id,
          nickname: doc.data().nickname,
          real_name: doc.data().real_name,
           catch_phrase: doc.data().catch_phrase,
           image: doc.data().image
        });
      });
    });
     
  },

  
  methods: {
    details (hero) {
      router.push({ name: 'ShowHero', params: { id: hero.key }})
    }
  }
}
</script>

<style>
  .table {
    width: 96%;
    margin: 0 auto;
  }
</style>
