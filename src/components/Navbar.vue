<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
   <router-link :to="{name:'home'}" class="navbar-brand">L & H</router-link>
      <div class="navbar-nav mr-auto">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link :to="{name:'home'}" class="nav-link">
            <font-awesome-icon icon="home" /> Home
          </router-link>
        </li>
        <li class="nav-item">
           <router-link :to="{name :'register'}" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
        </li>
        <li class="nav-item">
        <router-link :to="{name:'login'}" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
          <li class="nav-item">
           <router-link :to="{name:'cart'}" class="nav-link"> Cart</router-link>
        </li>
            <li class="nav-item">
           <router-link :to="{name:'products'}" class="nav-link"> Products</router-link>
        </li>
        <li class="nav-item">
        <router-link class="but nav-link" to="/Login">Log Out</router-link>
        </li>
      </ul>
       </div>
        <div v-if="currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
          <router-link :to="{name:'profile'}" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
       
        
        </div>
    </div>
  </div>
</nav>




</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push({name:'login'});
    }
  }
};
</script>
