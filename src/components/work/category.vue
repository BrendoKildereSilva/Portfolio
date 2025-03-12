<template>
    <div class="container-category">
        <Section Category_name="Figma"></Section>
        <Section Category_name="Code"></Section>
    </div>
</template>

<script>
import Section from './section.vue'
export default {
    components: {
        Section
    }
}
</script>


<style scoped>
    .container-category{
        width: 100vw;
        overflow-x: hidden;
    }
</style>