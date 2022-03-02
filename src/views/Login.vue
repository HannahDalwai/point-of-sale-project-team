<template>
  <nav>
    <router-link class="but" to="/">HOME</router-link>
  </nav>

  <br />
  <br />

  <div class="Login">
    <form @submit.prevent="login" class="form neu-border">
      <h2 class="form-heading"></h2>
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
      <button type="submit" class="form-btn">Login</button>

      <!-- <div class="form-social-login">
      <button class="form-btn neu-border form-social-btn">
        <i class="fab fa-google"></i>
      </button>
      <button class="form-btn neu-border form-social-btn">
        <i class="fab fa-facebook-f"></i>
      </button>
    </div> -->

      <p>
        Not a member?
        <router-link to="/Register">Register</router-link>
      </p>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      fetch("https://pointonsalebackend.herokuapp.com/users/", {
        method: "PATCH",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          localStorage.setItem("jwt", json.jwt);
          alert("User logged in");
          this.$router.push({ name: "Products" });
        })
        .catch((err) => {
          alert("User does not exsist");
        });
    },
  },
};
</script>