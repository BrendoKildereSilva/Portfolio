<template>
    <div>

        <Header></Header>
        <Highlights v-if="!isChildActive"></Highlights>
        <Category v-if="!isChildActive"></Category>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>


<script>
import { nextTick } from "vue";
import { useRoute } from 'vue-router';
import { computed } from 'vue';

import Header from '../components/Header.vue'
import Highlights from '../components/work/Highlights.vue'
import Category from '../components/work/category.vue'
import Footer from '../components/footer.vue'

export default {
    components: {
        Footer,
        Highlights,
        Category,
        Header,
    },

    setup(){
            const route = useRoute();
            const isChildActive = computed(() => !!route.params.id);
            return { isChildActive };
    }
}


</script>