<template>
<h1></h1>
  <form @submit.prevent="register" class="form neu-border">
    <input
      class="form-input neu-border-inset"
      type="text"
      v-model="name"
      placeholder="Name"
      required
    />
    <input
      class="form-input neu-border-inset"
      type="email"
      v-model="email"
      placeholder="Email"
      required
    />
    <input
      class="form-input neu-border-inset"
      type="password"
      v-model="password"
      placeholder="Password"
      required
    />
    <button type="submit" class="form-btn">Register</button>
    <!-- <div class="form-social-login">
      <button class="form-btn neu-border form-social-btn">
        <i class="fab fa-google"></i>
      </button>
      <button class="form-btn neu-border form-social-btn">
        <i class="fab fa-facebook-f"></i>
      </button>
    </div> -->

    <p>
      Already a member?
      <router-link :to="{ name: 'Login' }">Sign in</router-link>
    </p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone_number: "",
      password: "",
    };
  },
  methods: {
    register() {
      fetch("https://pointonsalebackend.herokuapp.com/'users", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          phone_number: this.phone_number,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          alert("User registered");
          localStorage.setItem("jwt", json.jwt);
          this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>
