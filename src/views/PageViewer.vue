<template>
  <div v-if="page" class="container">
    <h1 class="fw-semibold pt-3">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>

<script>
  export default {
    props: ["index"],
    inject: ["$pages"],
    created() {
      this.page = this.$pages.getSinglePage(this.index);

      // this.$watch(
      //   () => this.$route.params,
      //   (newParams, oldParams) => {
      //     this.page = this.$pages.getSinglePage(newParams.index);
      //   }
      // );
    },
    data() {
      return {
        page: null,
      };
    },
    watch: {
      index(newVal, oldVal) {
        this.page = this.$pages.getSinglePage(newVal);
      },
    },
  };
</script>

<style scoped></style>
