<template>
    <footer>
        <span>CONTACT</span>
        <div>
            <a target="_blank" href="https://api.whatsapp.com/send/?phone=5592996059860&text&type=phone_number&app_absent=0">Whatsapp</a>
            <a target="_blank" href="mailto:brendokildere@gmail.com">Email</a>
            <a href="">Instagram</a>
            <a target="_blank" href="https://github.com/BrendoKildereSilva">Github</a>
            <a target="_blank" href="https://www.linkedin.com/in/brendo-kildere-76a524229/">Linkedin</a>
        </div>

        <p>Design and development by Brendo Kildere ©.</p>
    </footer>
</template>


<style scoped>

    footer{
        z-index: 2;
        height: 50vh;
        background: #000;

        width: 100  vw;
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

    @media(max-width:500px){
        a{
            margin: 0.8rem;
            font-size: 1.3rem;
        }

         a::after{
            /* width: 0.1rem; */
            right: -0.9rem;
         }

        p{
            font-size: 1.3rem;
        }

        span{
            font-size: 3rem;
        }
    }
    

</style>