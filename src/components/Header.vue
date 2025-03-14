<template>
    <header>
        <div class="button-profile">
            <img src="/photo-profile.jpg" alt="photo-profile">

            <div>
                <span>Brendo.Kildere</span>
                <span>Online</span>
            </div>
        </div>
        <nav>
            <router-link to="/" :class="{ 'active-link': $route.path === '/' }">Home</router-link>
            <router-link to="/work" :class="{ 'active-link': $route.path.startsWith('/work') }">Work</router-link>
        </nav>

        <div class="container-language">
            <button>PT</button>
            <button class="active">EN</button>
        </div>
    </header>
</template>


<style scoped>
    header{
        width: 90%;
        margin: 3rem auto;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .button-profile{
        width: 20%;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .button-profile div{
        display: flex;
        flex-direction: column;
        margin: 1rem;
        font-size: 1.3rem;
     }

    .button-profile img{
        height: 5rem;
        width: 5rem;
        border-radius: 50%;
    }

    nav{
        width: 60%;
        display: flex;
        justify-content: center;
    }

    nav a {
        width: 10rem;
        text-decoration: none;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        color: #ccc;
        border-bottom: 2px solid #ccc;
    }

    a.active-link {
        color:rgb(15, 15, 15);
        border-bottom: 2px solid rgb(15, 15, 15);
        
    }   

    .container-language{
        display: flex;
        justify-content: flex-end;
        width: 20%;
    }
    div button{
        cursor: pointer;
        border: 0px;
        font-size: 2rem;
        margin: 1rem;
        background: none;
        color: #ccc;
    }

    div button.active{
        color: #000;
        border-bottom: 2px solid rgb(0, 0, 0);
    }
   

    @media(max-width: 1000px){
        header{
            width: 100%;
            margin: 2rem auto;
            justify-content: center;
        }
        .button-profile{
            display: none;
        }

       .container-language{
            display: none;
        }
    }

    

</style>