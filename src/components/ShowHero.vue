<template>

   <!--Section: Block Content-->
<section class="mb-5">

  <div class="row">
    <div class="col-md-4 mb-4 mb-md-0">

      <div id="mdb-lightbox-ui"></div>

      <div class="mdb-lightbox">

        <div class="row product-gallery mx-1">

          <div class="">
            <figure class="view overlay rounded z-depth-1 main-img">
                   <b-carousel
            controls
            indicators
            img-width="200"
            img-height="200"
            :interval="3000"
            v-model="slide"
        >
            <b-carousel-slide :img-src="hero.image"
            ></b-carousel-slide>
            <b-carousel-slide :img-src="hero.image2">
            </b-carousel-slide>
            <b-carousel-slide>
                <template v-slot:img>
                    <img class="d-block img-fluid w-100" width="1024" height="480" :src="hero.image3" />
                </template>
            </b-carousel-slide>
           
                 <b-carousel-slide>
                <template v-slot:img>
                    <img class="d-block img-fluid w-100" width="1024" height="480" :src="hero.image4" />
                </template>
            </b-carousel-slide>
            <b-carousel-slide :img-src="hero.image5"></b-carousel-slide>
        </b-carousel>
        
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=14"></b-carousel-slide>
        
              
          <div>
    
</div>
                
              
            </figure>


              
            
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-3">
                <div class="view overlay rounded z-depth-1 gallery-item">
                  <img :src="hero.image2"
                    class="img-fluid">
                  <div class="mask rgba-white-slight"></div>
                </div>
              </div>
              <div class="col-3">
                <div class="view overlay rounded z-depth-1 gallery-item">
                  <img :src="hero.image3"
                    class="img-fluid">
                  <div class="mask rgba-white-slight"></div>
                </div>
              </div>
              <div class="col-3">
                <div class="view overlay rounded z-depth-1 gallery-item">
                  <img :src="hero.image4"
                    class="img-fluid">
                  <div class="mask rgba-white-slight"></div>
                </div>
              </div>
              <div class="col-3">
                <div class="view overlay rounded z-depth-1 gallery-item">
                  <img :src="hero.image5"
                    class="img-fluid">
                  <div class="mask rgba-white-slight"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
    <div class="col-md-6">

///

      


<div >
  <b-link href="#/">Hero List</b-link>
<h5 > {{hero.nickname }} </h5>
</div>
      
      <p class="mb-2 text-muted text-uppercase small">real_name: {{hero.real_name}}</p>
      <h5 >  catch_phrase:{{hero.catch_phrase}} </h5>
       <h5 >   superpowers: {{hero.superpowers}} </h5>
      <p class="pt-1">
        {{hero.origin_description}}
      </p>
      <div class="table-responsive">
        <b-btn class="edit-btn" variant="success" @click.stop="edithero(key)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deletehero(key)">Delete</b-btn>
        <table class="table table-sm table-borderless mb-0">
         
        </table>
      </div>
  
    
<div>
    
        
</div>
      </div>
    
      
    </div>
  

</section>

<!--Section: Block Content-->
</template>

     

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'ShowHero',
  data () {
    return {
      key: '',
      hero: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('heros').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id;
        this.hero = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    edithero (id) {
      router.push({
        name: 'EditHero',
        params: { id: id }
      })
    },
    deletehero (id) {
      firebase.firestore().collection('heros').doc(id).delete().then(() => {
        router.push({
          name: 'HeroList'
        })
      }).catch((error) => {
        alert("Error removing document: ", error);
      });
    }
  }
}


</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
  .edit-btn {
    margin-right: 20px;
    width: 70px;
  }
</style>
