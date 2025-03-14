<template>
   <div class="container-Highlights" >
   
        <div class="container-carousel" id="container-carousel">
            <div class="splide">
                
                <div class="splide__track">
                    <button id="button-next">
                            <i class="fi fi-ts-angle-right"></i>
                        </button>
                        <button id="button-prev">
                            <i class="fi fi-ts-angle-left"></i>
                        </button>

                    <ul class="splide__list">
                        <Router-link 
                        v-for="(item, index) in this.Slides" 
                        :key="index"
                        class="splide__slide"
                        :to="'/work/' + item.id">
                            <img class="img-previw" :src="'/ImageDatabase/work/' + item.thumbnail" alt="">
                                
                        </Router-link>
                        
                    </ul>
                </div>
            </div>
        </div>

       

   </div>
</template>


<script> 

import Splide from '@splidejs/splide'
import DataWork from '../../data/works.json';
import gsap from 'gsap'

export default {
    
    
    mounted(){
        var splide = new Splide( '.splide',{
            type: 'fade',
            loop: true,
            rewind: true,
            autoplay: true,     
            interval: 3000,      
            pauseOnHover: false,
            arrows: false,
        } );
        splide.mount();

        const button_next = document.getElementById('button-next')
        const button_prev = document.getElementById('button-prev')


        button_next.addEventListener('click', (e) =>{
            splide.go('+1');   
            e.target.blur();
        })

        button_prev.addEventListener('click', (e) =>{
            splide.go('-1')
            e.target.blur();

        })

        gsap.to('.img-previw', {
           scale: 1,
           duration: 0.5,   
        })

       


    },

    computed: {
        
        Slides() {
            
            var highlights = []
            Object.keys(DataWork.id_work_highlights).forEach(i => {
                var id_highlights = DataWork.id_work_highlights[i]
                
                highlights.push(
                    ...DataWork.work.filter(works =>  works.id === id_highlights)
                )
                
            });
            return highlights



            

        }


    },
}
</script>


<style scoped>
    .title{
        font-family: "Montserrat", sans-serif;
    }

    .container-Highlights{
        margin: 0rem auto 5rem auto;
        width: 100vw;
        height: 100vh;
    }

    .container-carousel, .splide, .splide__list, .splide__slide, .splide__track, .splide__slide img{
        width: 100% !important;
        height: 100% !important;
        transition: 0.3s ease-in-out;
    }

    .splide__slide:hover {
        filter: brightness(0.3); /* Deixa 30% mais escuro */
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }
   
    .splide__slide img{
        object-fit: cover;
        object-position: center top;
        transform: scale(1.4);
    }

    #button-next,
    #button-prev{
        position: absolute;
        height: 100%;
        width: 10rem;
        background: none;
        border: 0px;
        color: #fff;
        font-size: 2rem;
        cursor: pointer;
    }

    #button-next:hover,
    #button-prev:hover{
        background: #00000060;
    }

    #button-next{
        z-index: 6;
        right: 0px;
    }
    
    #button-prev{
        z-index: 6;
        left: 0px;
    }

    @media(max-width: 1000px){
        .container-Highlights{
            width: 100vw;
            height: 50vh;
        }

        .container-carousel{
            width: 100vw;
            height: 50vh;
        }
    }

    @media(max-width: 800px){
        .container-Highlights{
            margin: 2rem auto 5rem auto;
        }

        .container-Highlights{
            width: 100vw;
            height: 30vh;
        }

        #button-next,
        #button-prev{
            width: 5rem;
        }
    }

    @media(max-height: 500px){
        .container-Highlights{
            width: 100vw;
            height: 100vh;
        }

        .container-carousel{
            width: 100vw;
            height: 90vh;
        }
    }
</style>