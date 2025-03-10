<template>
    <div class="container-3d">
   

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
    mounted(){
        const meuspline = document.getElementById("meuSpline");
        var condicao = false

        for(let i = 0; condicao == false; i++){
            if(meuspline._logo.style.display){
                condicao = true
                console.log('existe')

                meuspline._logo.remove();
                meuspline._logo.style.display = 'none'
            }
            else
            {
                meuspline._logo.style.display = "none"
                condicao = false
                console.log('n existe')   
            }
        }
    }
}
</script>

