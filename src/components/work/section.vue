<template>
    <div>
        
        <section>   
            <div :id="'section'+Category_name" class="splide">
                <span class="title">{{ Category_name }}</span>
                    <button @click="this.Arrows('next')" class="button-next">
                    <i class="fi fi-ts-angle-right"></i>
                </button>
                <button @click="this.Arrows('prev')" class="button-prev">
                    <i class="fi fi-ts-angle-left"></i>
                </button>

                <div class="splide__track">
                    <ul class="splide__list">
                        
                        <Router-link 
                        class="splide__slide"
                        v-for="(item, index) in this.Works"
                        :key="index"
                        :to="'/work/'+item.id"
                        >
                            <img v-if="item.id != '#'" class="img-previw" :src="'/ImageDatabase/work/' + item.pathIMG" alt="">
                            <div class="coming-Soon" v-else>Coming Soon</div>
                        </Router-link>          
                    </ul>
                </div>
            </div>

            

        </section>  
    </div>
</template>


<style scoped>
    

    section{
        position: relative;
        width: 100vw;
        height: 35rem;

        margin-left: 5rem;
        margin-top: 5rem;
        margin-bottom: 15rem;
    }

    
    .img-previw{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }

    .coming-Soon{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ccc;
        color: #000;
        font-size: 1.5rem;
    }
    
    a{
        background: rgb(145, 145, 245);
        width: 100%;
        height: 100%;
        text-decoration: none;

    }

    
     .splide__slide{
        margin-right: 0.5rem !important;
        width: 60rem !important;
        height: 35rem !important;
    }

   
    .title{
        font-family: "Montserrat", sans-serif;
        position: absolute;
        font-size: 3rem;
        top: -4rem;
    }


   
   

    .button-next,
    .button-prev{
        position: absolute;
        height: 100%;
        width: 5rem;
        background: none;
        border: 0px;
        color: #fff;
        font-size: 2rem;
        cursor: pointer;
    }

    .button-next:hover,
    .button-prev:hover{
        background: #00000060;
    }

    .button-next{
        z-index: 6;
        right: 6rem;
    }
    
    .button-prev{
        z-index: 6;
        left: 0px;
    }

    .splide,  .splide__track{
        width: 100% !important;
        height: 100% !important;
        transition: 0.3s ease-in-out;
    }

    @media(max-width: 1400px){
        section{
            height: 30rem;
            margin-left: 5rem;
            margin-top: 5rem;
            margin-bottom: 5rem;
        }

        .splide__slide{
            width: 45rem !important;
            height: 30rem !important;
        }
    }

    @media(max-width: 1080px){
         section{
            height: 20rem;
            margin-left: 0rem;
            margin-top: 3rem;
            margin-bottom: 7rem;
        }

        .splide__slide{
            width: 30rem !important;
            height: 20rem !important;
        }

        .title{
            font-size: 2rem;
            top: -3rem;
            left: 1rem;
        }

        .button-next{
            right: 0rem;
        }

        .button-next,
        .button-prev{
            font-size: 1rem;
        }

    }

    @media(max-width: 780px){
        section{
            height: 17rem;
            margin-left: 0rem;
            margin-top: 5rem;
            margin-bottom: 5rem;
        }

        .splide__slide{
            width: 25rem !important;
            height: 17rem !important;
        }
    }


    @media(max-width: 530px){
        section{
            height: 20rem;
            margin-left: 0rem;
            margin-top: 2rem;
            margin-bottom: 5rem;
        }


        .splide__slide{
            width: 30rem !important;
            height: 20rem !important;
        }

        .title{
            font-size: 1.3rem;
            top: -2rem;
            left: 0.5rem;
        }
    }

    @media(max-width: 350px){
        section{
            height: 14grem;
            margin-left: 0rem;
            margin-top: 2rem;
            margin-bottom: 5rem;
        }


        .splide__slide{
            width: 20rem !important;
            height: 14rem !important;
        }

        .title{
            font-size: 1.3rem;
            top: -2rem;
            left: 0.5rem;
        }
    }

    
   
    

    



</style>


<script>
import Splide from '@splidejs/splide'

import DataWork from '../../data/works.json'
import gsap from 'gsap'

export default {
    data(){
        return{
            Slides:[],
        
        }
    },

    props: {
        Category_name: String
    },
    mounted(){
        
       
        this.initSplide();
        
    },  

    computed: {
         Works(){
            return DataWork.work.filter(work => work.Category === this.Category_name)
        }
    },

    methods:{
       

        initSplide(){
                var idSection = '#section'+this.Category_name
                var splide = new Splide(idSection,{
                    type: 'slide',

                    arrows: false,
                    loop: true,
                    rewind: true,
                    pagination: false,
                    
                } );
                splide.mount();
                this.Slides = splide
        },

        Arrows(action){
            if(action == 'next'){
               this.Slides.go('+1')
            }

            if(action == 'prev'){
                this.Slides.go('-1')
            }   
        }

       
    }
}
</script>

