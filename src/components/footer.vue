<template>
    <footer>
        <span>CONTACT</span>
        <div>
            <a href="">Whatsapp</a>
            <a href="">Email</a>
            <a href="">Instagram</a>
            <a href="">Github</a>
            <a href="">Linkedin</a>
        </div>

        <p>Design and development by Brendo Kildere ©.</p>
    </footer>
</template>


<style scoped>

    footer{
        z-index: 2;
        height: 50vh;
        background: #000;

        width: 100vw;
        display: flex;
        align-items: center;
        flex-direction: column;
    }


    span{
        margin-top: 2rem;
        font-size: 4rem;
        color: #fff;
    }

    div{
        width: 100%;
        margin: 2rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    a{
        position: relative;
        font-size: 1.5rem;
        color: #fff;
        margin: 2rem;
        text-decoration: none;
    }

    a:hover{
        /* font-size: 2rem; */
        text-decoration: underline;
    }

    a::after{
        content: "";
        display: inline-block;
        height: 2rem;
        width: 0.2rem;
        top: 0rem;
        right: -2.5rem;
        background: rgb(255, 255, 255);
        position: absolute;
    }

    a:nth-child(5)::after{
        display: none;
    }

    p{
        font-size: 1.5rem;
        color: #fff;
        text-align: center;
    }

    @media(max-height: 500px){
        footer{
            height: 80vh;
        }
    }
    @media(max-width: 390px){
        a:nth-child(5)::after{
            display: none;
        }
    }

</style>