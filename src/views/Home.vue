<template>
        <Header/>
        <Banner/>
        <Footer/>
</template>


<script>
import Header from '../components/Header.vue'
import Banner from '../components/Home/Banner.vue'
import Footer from '../components/footer.vue'

export default {
    components: {
        Footer,
        Header,
        Banner
    }
}
</script>