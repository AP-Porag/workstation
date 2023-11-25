<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <h1>We not did it</h1>
      <button @click="toastTest">Toast</button>
      <button @click="showAlert">Sweet Alart</button>

      <VCalendar />
      <VDatePicker v-model='selectedDate' />
      <div class="">
        <unicon
            name="car-wash"
            width="36"
            height="36"
            class="icon"
            fill="blue">
        </unicon>
        <unicon
            name="music"
            width="36"
            height="36"
            class="icon"
            fill="#222">
        </unicon>
      </div>
      <div class="">
        <button
            class="btn btn-primary"
            data-bs-target="#collapseTarget"
            data-bs-toggle="collapse">
          Bootstrap collapse
        </button>
        <div class="collapse py-2" id="collapseTarget">
          This is the toggle-able content!
        </div>
      </div>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useToast } from "vue-toastification";

const toast = useToast();
export default {
  data(){
    return{
    }
  },
  methods:{
    toastTest(){
      toast.info('hello');
    },
    showAlert() {
      // Use sweetalert2
      this.$swal('Hello Vue world!!!');
    },
  }
}
</script>


<style scoped>
.wrapper h1{
  color: darkblue;

  &:hover{
    color: darkred;
  }
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
