<template>
  <nav
    :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']"
    v-if="pages"
  >
    <div class="container-fluid">
      <a class="navbar-brand fw-bold fs-4" href="#">My Vue</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <navbar-link
          v-for="(page, index) in publishedPages"
          class="nav-item"
          :key="index"
          :page="page"
          :index="index"
        ></navbar-link>
        <li>
          <router-link
            to="/pages"
            class="nav-link"
            active-class="active"
            aria-current="page"
            >Pages</router-link
          >
        </li>
      </ul>
      <form class="d-flex">
        <button
          class="btn btn-primary dark-toggle-btn"
          @click.prevent="changeTheme"
        >
          {{ theme == "light" ? "Dark Mode" : "Light Mode" }}
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
  import NavbarLink from "./NavbarLink.vue";

  export default {
    // props: ["pages"], // Props are read-only
    inject: ["$pages", "$bus"],
    created() {
      this.getThemeSetting();

      this.pages = this.$pages.getAllPages();

      this.$bus.$on("page-updated", () => {
        // Important
        this.pages = [...this.$pages.getAllPages()];
        console.log(this.pages);
      });

      this.$bus.$on("page-created", () => {
        // Important
        this.pages = [...this.$pages.getAllPages()];
        console.log(this.pages);
      });

      this.$bus.$on("page-deleted", () => {
        // Important
        this.pages = [...this.$pages.getAllPages()];
        console.log(this.pages);
      });
    },
    computed: {
      publishedPages() {
        return this.pages.filter((page) => page.published == true);
      },
    },
    components: { NavbarLink },
    data() {
      return {
        theme: "light",
        pages: [],
      };
    },
    methods: {
      changeTheme() {
        let theme = "light";

        if (this.theme == "light") {
          theme = "dark";
        }

        this.theme = theme;
        this.storeThemeSetting();
      },
      storeThemeSetting() {
        localStorage.setItem("theme", this.theme);
      },
      getThemeSetting() {
        let theme = localStorage.getItem("theme");

        if (theme) {
          this.theme = theme;
        }
      },
    },
    watch: {
      pages(newVal, oldVal) {
        this.pages = newVal;
      },
    },
  };
</script>

<style scoped>
  .dark-toggle-btn {
    font-size: 14px;
    padding: 5px 10px;
  }
</style>
