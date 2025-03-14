<template>
    <div class="container-3d">
   
  
    <div class="loader"  id="container_loader" v-if="container_loader == true"></div> 
    <spline-viewer id="meuSpline" url="https://prod.spline.design/mGqVdLApf6Ollvl8/scene.splinecode"></spline-viewer>   


    
        <div class="box-shadow">
            <button class="arrow-bottom">
                <i class="fi fi-ts-angle-double-small-right"></i>
            </button>
        </div>
    </div>
</template>



<style scoped>
   

    .container-3d{
        height: 80vh;
        position: relative;
    }

    .box-shadow{
        height: 101%;
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

    .arrow-bottom{
        height: 5rem;
        width: 5rem;
        background: #ffffff;
        border-radius: 50%;

        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) rotate(90deg);;
        border: 0px;

    }

    .arrow-bottom i{
         display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-weight: bold;
        font-size: 2rem;
        color: #000000;
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
    }

</style>

<script>


export default {
    data(){
        return{
            container_loader: true
        }
    },

    mounted(){
        this.initSpline();

        const meuspline = document.getElementById("meuSpline");

        if (meuspline.hasLoaded) {
            meuspline.addEventListener("load", this.initSpline);
        }

       
    },

    methods:{
       
        initSpline(){
            const meuspline = document.getElementById("meuSpline");
            meuspline._logo.remove();
            this.container_loader = false
        }
    }
}
</script>


<style scoped>
    .loader {
        font-weight: bold;
        font-family: sans-serif;
        font-size: 30px;
        animation: l1 1s linear infinite alternate;
    }

    #container_loader{
        height: 100vh;
        width: 100vw;
        position: absolute;

        z-index: 100;

        display: flex;
        justify-content: center;
        align-items: center;

    }
    .loader:before {
    content:"Loading..."
    }
    @keyframes l1 {to{opacity: 0}}
</style>

