<template>
  <div>
    <v-toolbar app fixed>
      <v-toolbar-title class="headline text-uppercase">
        <span>{{ title }}</span>
        <span class="font-weight-light"> | </span>
        <span class="font-weight-light">{{ subtitle }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in menu" :key="item.id">
            {{ item.name }}
        </v-btn>
      </v-toolbar-items>
      </v-toolbar>
  </div>
</template>

<script lang="ts">
    export default {
        name: 'MainMenu',
        props: ['title', 'subtitle', 'menu']
    };
</script>

<style lang="scss" scoped></style>