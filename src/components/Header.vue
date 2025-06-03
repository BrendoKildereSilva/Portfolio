<template>
    <header>

        <div>
            <h1>Desenvolvedor FullStack <br> Web Desing UX/UI</h1>
            <a target="_blank" href="https://www.linkedin.com/in/brendokilderee/">Linkdin</a>
        </div>

        <spline-viewer id="meuSpline" url="https://prod.spline.design/mGqVdLApf6Ollvl8/scene.splinecode"></spline-viewer>

        <p>Olá, eu sou Brendo Kildere</p>

        <div class="box-shadow">
        </div>

    </header>
</template>



<style scoped>
   

    header{
        height: 100svh;
        position: relative;
    }

    header div:nth-child(1){
        position: absolute;
        z-index: 10;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        right: center;
    }

    h1{
        font-weight: 600;
        font-size: 2.9rem;
        text-align: center;
        white-space: nowrap;

    }

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #000;
        width: 24.1rem;
        height: 5.4rem;
        border-radius: 2rem;
        color: #fff;
        margin: 3rem auto;
        font-size: 2.4rem;
        text-decoration: none;
        font-weight: 400;
    }

    p{
        color: #fff;
        font-size: 2rem;
        position: absolute;
        z-index: 10;

        top: 95%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

   
   

    .box-shadow{
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0px;
        box-shadow: inset 0px -200px 100px -100px rgba(0, 0, 0, 1);
        pointer-events: none;
    }

    #meuSpline{
        width: 100%;
        height: 100%;
    }

      


    @media(max-width: 1000px){
        .container-3d{
            height: 90vh;
        }
    }


    @media(max-height:500px){
         .box-shadow{
            box-shadow: inset 0px -100px 50px -50px rgba(0, 0, 0, 1);
        }

        p{
            font-size: ;
        }
    }

</style>

<script>
import { StopLoading } from './Loading.vue'

export default {
    data(){
        return{
            container_loader: true
        }
    },

    mounted(){
         
        
        const meuspline = document.getElementById("meuSpline");

        if (meuspline) {
            var canvas = document.querySelector('canvas')
            
            const SplineLoading = setInterval(() => {
                console.log(meuspline._loaded)

                if(meuspline._loaded){
                    this.initSpline();
                    clearInterval(SplineLoading);
                    StopLoading();
                }
            }, 1000 );
        }

       
    },

    methods:{
       
        initSpline(){
            const meuspline = document.getElementById("meuSpline");
            meuspline._logo.remove();
            this.container_loader = false
        }
    },

    emits: ['StopLoading']
}
</script>



