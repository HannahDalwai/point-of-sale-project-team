<template>

  <div class="container">
    <div class="content">
      <div
        class="login-container animated fadeInDown"
        style="animation-delay: 0.3s"
      >
        <!--   Login   -->
        <div class="contact justify-content-center" id="contact-form">
          <h1 class="form-title">
            <i class="fas fa-user" style="color: #0000ff"></i> <br />
            CONTACT
            <hr />
          </h1>

          <div
            class="form-container animated fadeIn"
            style="animation-delay: 0.7s"
          >
            <form @submit.prevent="handleSubmit()">
              <label for="name"><i class="fas fa-at"></i> </label>
              <input
                type="text"
                name="name"
                v-model="name"
                placeholder="Name"
              />
              <br><br>

              <label for="email"><i class="fas fa-at"></i> </label>
              <input
                type="email"
                name="email"
                v-model="email"
                placeholder="Email"
              />
              <br> <br>

              <label for="message"><i class="fas fa-at"></i> </label>
              <input
                class="textarea"
                type="textarea"
                name="message"
                v-model="textarea"
                placeholder="Message"
              />
              <br>
              <div class="submit-buttons">
                <input type="submit" value="Send" />

                <input type="reset" value="Reset" class="btn-contact" />
              </div>
            </form>
          </div>
        </div>
        <!--   Login   -->
        <div
          class="contact animated fadeIn"
          style="animation-delay: 0.7s; animation-duration: 4s"
          id="contact-bg"
        ></div>
      </div>
    </div>
  </div>
<br> <br> <br><br> <br> <br>
</template>

<script>

export default {
  components: {
   
  },
  data() {
    return {
      name: "",
      email: "",
      textarea: "",
    };
  },

  methods: {
    handleSubmit() {
      fetch("https://blog-capstone-h.herokuapp.com/contact", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          textarea: this.textarea,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => (this.contact = data));
      alert("Message Sent!").catch((err) => console.log(err.message));
    },
  },
};
</script>
