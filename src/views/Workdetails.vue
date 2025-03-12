<template>
  <div>
    <h1>{{ id }}</h1>
    <p>{{ bunda }}</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  data() {
    return {
      bunda: 'sdasdsasda',
      id: ''
    };
  },
 
  created() {
    const route = useRoute();
    this.id = route.params.id;
  }
}
</script>
