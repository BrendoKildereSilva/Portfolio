<template>
  <div class="container-details">
      <div class="preview-img">
          <button @click="$router.push('/work')"><i class="fi fi-sr-add"></i></button>

          <div id="section_img" class="splide">
                <div class="splide__track">
                    <ul class="splide__list">
                        <div class="splide__slide" v-for="(item, index) in Work[0].imgs" :key="index" >
                          <img class="img" :src="'/ImageDatabase/work/'+item" alt="">
                        </div>
                    </ul>
                </div>
          </div>
      </div>

      <div class="container-info">
        <div> 
            <p class="title"> {{ Work[0].title }} </p>
            <span>{{ Work[0].MadeWith }} </span>

          <div  class="info">
            <p class="descrition">{{ Work[0].descrition }}</p>
            <p v-for="(item, index) in Work[0].links" :key="index" class="link"> {{ index }} <a :href="item">Link</a></p>
          </div>

        </div>
          <a target="_blank" :href="Work[0].Mainlink" class="button_link"> Acess Work <i class="fi fi-rr-arrow-right"></i> </a>
      </div>
  </div>
</template>

<script>
import Splide from '@splidejs/splide'
import { useRoute } from 'vue-router';
import DataWork from '../data/works.json'
import gsap from 'gsap'

export default {
  data() {
    return {
      id: '',
    };
  },

  mounted(){
    this.initSplide()
    window.scrollTo({ top: 0, behavior: "smooth" });

    gsap.to('.img', {
      scale: 0.9, 
      duration: 0.4, // Define a duração em segundos
      ease: "power2.inOut", // Aplica um easing mais suave
  });
  },
  
  created() {
    const route = useRoute();
    this.id = route.params.id;
  },

  

  computed: {
    Work(){
      var work = []
      work.push(
        ...DataWork.work.filter( work => parseInt(work.id) === parseInt(this.id))
      )
      return work;
    }
  },

  methods:{
    initSplide(){
                var splide = new Splide('#section_img',{
                    type: 'Slide',
                    arrows: true,
                    perPage: 1
                    
                } );
                splide.mount();
                this.Slides = splide
        },
  }

  
}
</script>

<style scoped>
 

  img{
    scale: 2;
    object-fit: contain;
    object-position: center;

    width: 100%;
    max-height: 90%;
  }

  .splide, .splide__slide, .splide__track, .splide__list{
    width: 100% !important;
    height: 100% !important;
  } 

  .splide__slide{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  

  .container-details{
    margin-top: 5rem;
    display: flex;
    color: #fff;

  }

  .preview-img{
    position: relative;
    width: 60vw;
    height: 100vh;
    background: #161616;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container-info{
    position: relative;
    flex: 1; 
    background: #0D0B0B;
  }

  .container-info div {
    width: 90%;
    height: 100%;
    margin: 5rem auto;
  }

    .container-info div .info{
      margin: 2rem auto;
      width: 100%;
      height: 80%;
    }

  .container-info .button_link{
    position: absolute;
    bottom: 2rem;
    left: 50%;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    
    font-size: 1.5rem;

    transform: translate(-50%, -50%);

    height: 5rem;
    width: 25rem;

    border-radius: 20rem;
    background: rgb(23,23,23);
    background: linear-gradient(259deg, rgba(23,23,23,1) 0%, rgba(38,37,37,1) 100%);
    border: 0px;
    color: #fff;
    cursor: pointer;
    transition: 0.3s ease-in-out

  }

  .button_link i{
    font-size: 1.5rem;
      display: flex;
      opacity: 0;
      transition: opacity 0.3s ease-in-out, visibility 0s 1s; 

  }

  .button_link:hover{
    gap: 1rem;
    transition: 0.3s ease-in-out
  }

  .button_link:hover i{
      opacity: 1;
      align-items: center;
      transition: opacity 0.3s ease-in-out, visibility 0s;

  }

  .title{
    font-size: 3rem;
    font-family: "Montserrat Alternates", sans-serif;
  }

  span{
    display: flex;
    font-size: 1.5rem;
    font-weight: 300;
    margin-top: 1rem ;
    font-family: "Montserrat", sans-serif;
  }

  .descrition{
    font-size: 1.3rem;
    margin: 2rem 0rem;
    text-align: justify;
  }

  .link{
    font-size: 1.5rem;
  }

  .link a{
    color: #fff;
  }

  .preview-img button{
    position: absolute;
    top: -3rem;
    right: -3rem;

    background: #fff;
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    font-size: 5rem;
    cursor: pointer;
    border: 0px;
    z-index: 20;

  }

  .preview-img button:hover i{
    color: #000

  }


  button i{
     display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(61, 60, 60);
    transform: rotate(135deg);

  }

  @media(max-width: 1000px){
    .container-details{
      flex-direction: column;
      height: auto;
    }
    .preview-img{
      width: 100%;
      height: 60rem;
    }

    .container-info{
      width: 100%;
      padding-bottom: 10rem;
    }

    .preview-img button{
      position: absolute;
      top: 0%;
      left: 50%;

      transform: translate(-50%, -50%);
      height: 7rem;
      width: 7rem;
    }
  }

  @media(max-width: 600px){
    .preview-img{
      width: 100%;
      height: 40rem;
    }


    .container-details{
      flex-direction: column;
    }
  }

  @media(max-height: 600px){
    .preview-img{
      width: 100%;
      height: 40rem;
    }

    .container-details{
      flex-direction: column;
    }
  }

</style>