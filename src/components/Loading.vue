<template>
<div id="container-loading">
    <div class="container01"></div>
    <div class="container02"></div>

    <div  id="content" class="content">
        <div class="loader"></div> 
        <p>Brendo Kildere</p>
    </div>
</div>
</template>


<script>
import gsap from 'gsap'

export function StopLoading(){
    // document.getElementById('content').style.display = 'none'
    gsap.to('.content', {
        opacity: 0
    })

    gsap.to('.container02', {
        top: -1000,
        delay: 1,
        duration: 2 
        
    })

    gsap.to('.container01', {
        top: 1000,
        delay: 1,
        duration: 2 
        
    })

    
}


</script>

<style scoped>
    .container01{
        top: 0px;
        width: 0;
        height: 0;
        border-right: 100vw solid rgb(0, 0, 0);
        border-top: 100svh solid transparent;
        position: fixed;
        z-index: 100;
    }

    .container02{
        top: 0px;

        width: 0;
        height: 0;
        border-left: 100vw solid rgb(0, 0, 0);
        border-bottom: 101svh solid transparent;
        position: fixed;
        z-index: 100;
    }


    .loader {
        width: 60px;
        aspect-ratio: 4;
        --c:#ffffff 90%,#0000;
        background: 
            radial-gradient(circle closest-side at left  6px top 50%,var(--c)),
            radial-gradient(circle closest-side                     ,var(--c)),
            radial-gradient(circle closest-side at right 6px top 50%,var(--c));
        background-size: 100% 100%;
        background-repeat: no-repeat;
        animation: l4 2s infinite alternate;

        position: absolute;
        z-index: 100;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }

    @keyframes l4 {
        to{width:25px;aspect-ratio: 1}
    }

    p{
        color: #fff;
        position: fixed;

        bottom: 6rem;
        right: 6rem;
        font-size: 5rem;
        z-index: 100;
        border-bottom: 0.5rem solid #fff;
        padding: 0.5rem;
        font-weight: 500;
    }


    @media(max-width: 1000px){
        p{
            font-size: 3rem;
            top: 90%;
            left: 50%;
            right: inherit;
            bottom: inherit;
            transform: translate(-50%, -50%);
        }
    }
</style>