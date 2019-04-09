<template>
  <v-app>
    <MainMenu :title="title" :subtitle="subtitle" :menu="menu"/>
    <v-content>
      <v-container grid-list-md text-xs-center>
        <Carousel :items="galleryItems"/>
        <v-layout row wrap>
          <v-flex xs12>
            <youtube :video-id="promoVideo"></youtube>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MainMenu from "./components/MainMenu";
import Carousel from "./components/Carousel";

export default {
  name: "App",
  components: {
    MainMenu,
    Carousel
  },
  data() {
    return {
      title: "Shrubland Rose",
      subtitle: "Bed and Breakfast",
      menu: [
        { id: 0, name: "Tour" },
        { id: 1, name: "Facilities" },
        { id: 2, name: "Rates" },
        { id: 3, name: "Book now" },
        { id: 4, name: "Contact us" }
      ],
      promoVideo: "syvvQuGyYQE",
      galleryItems: [
        {src: 'http://placehold.it/1920x768'},
        {src: 'http://placehold.it/1920x768'},
        {src: 'http://placehold.it/1920x768'}
      ]
    };
  }
};
</script>
