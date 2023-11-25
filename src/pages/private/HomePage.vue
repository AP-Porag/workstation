<template>
  <section class="main-view">
    <div class="container-scroller">
      <AppHeader/>
      <div class="container-fluid page-body-wrapper">
        <Sidebar/>
        <div class="main-panel">
          <div class="content-wrapper">
            <router-view></router-view>
          </div> <!-- content wrapper ends -->
          <AppFooter/>
        </div> <!-- main panel ends -->
      </div> <!-- page-body-wrapper ends -->
    </div>
  </section>
</template>

<script>
import AppHeader from "@/components/private/HeaderComponent.vue";
import Sidebar from "@/components/private/SidebarComponent.vue";
import AppFooter from "@/components/private/FooterComponent.vue";

export default {
  name: "HomePage",
  components: {AppFooter, Sidebar, AppHeader}
}
</script>

<style scoped>

</style>