<template>
  <v-carousel class="v-carousel" dark hide-controls>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
    export default {
        props: ['items']
    }
</script>

<style lang="scss" scoped>
    .v-carousel {
        width: 100%;
    }
</style>