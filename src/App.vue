<template>
  <navbar :pages="pages"></navbar>

  <router-view></router-view>
  <!-- <div v-show="false">Hide this content</div>
  <page-viewer :page="pages[activePage]"></page-viewer>
  <create-page @page-created="pageCreated"></create-page> -->
</template>

<script>
  import Navbar from "./components/Navbar.vue";

  export default {
    components: {
      Navbar,
    },
    inject: ["$pages"],
    data() {
      return {
        pages: this.$pages,
      };
    },

    methods: {
      pageCreated(pageObj) {
        if (pageObj.published) {
          this.pages.push(pageObj);
        } else {
          return;
        }
      },
    },
  };
</script>

<style>
  #app {
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-variation-settings: "slnt" 0;
  }
</style>
