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
        <div>
            <button>PT</button>
            <button class="active">EN</button>
        </div>
    </header>
</template>


<style scoped>
    header{
        width: 90%;
        margin: 5rem auto;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .button-profile{
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
        display: flex;
        flex-direction: row;
        width: 20rem;
    }

    nav a {
        padding: 1rem;
        text-decoration: none;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        width: 50%;
        color: #ccc;
        border-bottom: 2px solid #ccc;
    }

    a.active-link {
        color:rgb(15, 15, 15);
        border-bottom: 2px solid rgb(15, 15, 15);
        
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
            margin: 1rem auto;
            justify-content: center;
        }
        .button-profile{
            display: none;
        }
        div{
            display: none;
        }
    }

    

</style>