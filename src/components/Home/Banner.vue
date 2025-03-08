<template>
    <spline-viewer id="meuSpline" url="https://prod.spline.design/mGqVdLApf6Ollvl8/scene.splinecode"></spline-viewer>
</template>



<style scoped>
    #meuSpline{
        height: 80vh;
    }


    @media(max-width: 900px){
       #meuSpline{
        height: 80vh;
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

