<template>
  <div class="mb-main-container container-fluid">
    <div class="wrapper">
      <div class="row">
        <div class="col-md-6">
          <header>
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

            <div class="wrapper">
              <HelloWorld msg="You did it!" />
              <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/about">Timezone</RouterLink>
                <RouterLink to="/login">Login</RouterLink>
              </nav>
            </div>
          </header>
        </div>
        <div class="col-md-6">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "PublicView",
  components: {HelloWorld}
}
</script>

<style scoped>

</style>