<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add hero
        <b-link href="#/">Hero List</b-link>
      </h2>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="nickname">
            <b-form-input id="nickname" v-model.trim="hero.nickname"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="real_name">
            <b-form-input id="real_name" v-model.trim="hero.real_name"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="origin_description">
              <b-form-textarea id="origin_description"
                         v-model="hero.origin_description"
                         placeholder="Enter something"
                         :rows="2"
                         :max-rows="6">{{hero.origin_description}}</b-form-textarea>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="superpowers">
            <b-form-input id="superpowers" v-model.trim="hero.superpowers"></b-form-input>
          </b-form-group>
           <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="catch_phrase">
            <b-form-input id="catch_phrase" v-model.trim="hero.catch_phrase"></b-form-input>
            
          </b-form-group>
           <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="image">
            <b-form-input id="image" v-model.trim="hero.image"></b-form-input>
            </b-form-group>
            <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="image2">
            <b-form-input id="image2" v-model.trim="hero.image2"></b-form-input>
            </b-form-group>
             <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="image3">
            <b-form-input id="image3" v-model.trim="hero.image3"></b-form-input>
            </b-form-group>

                <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="image4">
            <b-form-input id="image4" v-model.trim="hero.image4"></b-form-input>
            </b-form-group>
              <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="image5">
            <b-form-input id="image5" v-model.trim="hero.image5"></b-form-input>
            </b-form-group>
            
          <b-button type="submit" variant="primary">Save</b-button>
          <br>
          <br>
          <b-button type="submit" variant="primary" onclick="window.open('http://localhost:3000/')"> Upload image</b-button>
        </b-form>
        
      </b-jumbotron>
    </b-col>
  </b-row>
</template>
 
<script>
 
import firebase from '../Firebase'
import router from '../router'
 
export default {
  name: 'AddHero',
  data () {
    return {
      ref: firebase.firestore().collection('heros'),
      hero: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
 
      this.ref.add(this.hero).then(() => {
        this.hero.nickname = ''
        this.hero.real_name = ''
        this.hero.origin_description = ''
        this.hero.superpowers = ''
        this.hero.image = ''
        this.hero.image2 = ''
         this.hero.image3 = ''
            this.hero.image4 = ''
             this.hero.image5 = ''

        router.push({
          name: 'HeroList'
        })
      })
      .catch((error) => {
        alert("Error adding document: ", error);
      });
    }
  }
}
</script>
 
<style>
  .jumbotron {
    padding: 2rem;
  }
</style>