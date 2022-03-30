<template>
 
  <div class="container d-flex justify-content-end mb-3 mt-5 pt-4">
    <div v-for="post of filteredPosts" :key="post._id" >
    <div class="d-flex w-25 ms-3">
      <label for="" class="form-label">Sort by category</label>
      <input type="text"  placeholder="search blogs" v-model="search">
      <select
        class="form-select"
        name=""
        id="sortCategory"
        onchange="sortCategory()"
      >
        <option value="All">All</option>
        <option value="Stationary">Stationary</option>
        <option value="Office">Office</option>
        <option value="Arts and craft">Arts and craft</option>
      </select>
    </div>
    </div>

  <label>
        Sort Title:
        <select v-model="title" @change="sortTitle(title)">
            <option value="">All</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>

<label>
        Sort Price:
        <select v-model="price" @change="sortPrice(price)">
            <option value="">All</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>

 
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add a product
    </button>
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal2"
    >
      Update user <i class="bi bi-person-circle"></i>
    </button>
    <router-link class="btn btn-primary" to="/Cart">Cart</router-link>
  </div>
  <br />
  <hr />
  <!-- Button trigger modal -->

  
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>

        <div class="modal-body">
          <div class="modal-content">
            <div class="modal-body">
              <div class="mb-3">
                <label for="addTitle" class="form-label">Title</label>
                <input
                  class="form-control"
                  type="text"
                  name="addTitle"
                  id="addTitle"
                  v-model="title"
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Category</label>
                <select
                  class="form-select"
                  name="addCategory"
                  id="addCategory"
                  v-model="category"
                >
                  <option value="Stationary">Stationary</option>
                  <option value="Office">Office</option>
                  <option value="Arts and craft">Arts and craft</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="addPrice" class="form-label">Price</label>
                <input
                  class="form-control"
                  type="text"
                  name="addPrice"
                  id="addPrice"
                  v-model="price"
                />
              </div>
              <div class="mb-3">
                <label for="addImg" class="form-label">Image URL</label>
                <input
                  class="form-control"
                  type="text"
                  name="addImg"
                  id="addImg"
                  v-model="img"
                />
              </div>
              <div class="mb-3">
                <label for="addDescription" class="form-label"
                  >Description</label
                >
                <input
                  class="form-control"
                  type="text"
                  name="addDescription"
                  id="addDescription"
                  v-model="description"
                />
              </div>
            </div>

            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <br />
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="createProduct()"
            >
              Create Product
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>

        <div class="modal-body">
          <div class="modal-content">
            <div class="modal-body">
              <div class="mb-3">
                <label for="addTitle" class="form-label">Title</label>
                <input
                  class="form-control"
                  type="text"
                  name="addTitle"
                  id="addTitle"
                  v-model="title"
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Category</label>
                <select
                  class="form-select"
                  name="addCategory"
                  id="addCategory"
                  v-model="category"
                >
                  <option value="Stationary">Stationary</option>
                  <option value="Office">Office</option>
                  <option value="Arts and craft">Arts and craft</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="addPrice" class="form-label">Price</label>
                <input
                  class="form-control"
                  type="text"
                  name="addPrice"
                  id="addPrice"
                  v-model="price"
                />
              </div>
              <div class="mb-3">
                <label for="addImg" class="form-label">Image URL</label>
                <input
                  class="form-control"
                  type="text"
                  name="addImg"
                  id="addImg"
                  v-model="img"
                />
              </div>
              <div class="mb-3">
                <label for="addDescription" class="form-label"
                  >Description</label
                >
                <input
                  class="form-control"
                  type="text"
                  name="addDescription"
                  id="addDescription"
                  v-model="description"
                />
              </div>
            </div>

            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <br />
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="createProduct()">
              Create Product
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

          
          
  <!-- modal2 -->

  <div
    class="modal fade"
    id="exampleModal2"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>

        <div class="modal-body">
          <div class="modal-content">
            <div class="modal-body">
              <div class="mb-3">
                <label for="addFullname" class="form-label">Fullname</label>
                <input
                  class="form-control"
                  type="text"
                  name="addFullname"
                  id="addFullname"
                  v-model="fullname"
                />
              </div>
              <div class="mb-3">
                <label for="addEmail" class="form-label">Email</label>
                <input
                  class="form-control"
                  type="email"
                  name="addEmail"
                  id="addEmail"
                  v-model="email"
                />
              </div>
              <div class="mb-3">
                <label for="addPhone_number" class="form-label"
                  >Phone_number</label
                >
                <input
                  class="form-control"
                  type="text"
                  name="addPhone_number"
                  id="addPhone_number"
                  v-model="phone_number"
                />
              </div>
              <div class="mb-3">
                <label for="addPassword" class="form-label">Password</label>
                <input
                  class="form-control"
                  type="password"
                  name="addPassword"
                  id="addPassword"
                  v-model="password"
                />
              </div>
            </div>

            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <br />
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="updateUser()"
            >
              Update User
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- modal3 -->

  <div
    class="modal fade"
    id="exampleModal3"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>

        <div class="modal-body">
          <div class="modal-content">
            <div class="modal-body">
              <div class="mb-3">
                <label for="addTitle" class="form-label">Title</label>
                <input
                  class="form-control"
                  type="text"
                  name="addTitle"
                  id="addTitle"
                  v-model="title"
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Category</label>
                <select
                  class="form-select"
                  name="addCategory"
                  id="addCategory"
                  v-model="category"
                >
                  <option value="Stationary">Stationary</option>
                  <option value="Office">Office</option>
                  <option value="Arts and Craft">Arts and craft</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="addPrice" class="form-label">Price</label>
                <input
                  class="form-control"
                  type="text"
                  name="addPrice"
                  id="addPrice"
                  v-model="price"
                />
              </div>
              <div class="mb-3">
                <label for="addImg" class="form-label">Image URL</label>
                <input
                  class="form-control"
                  type="text"
                  name="addImg"
                  id="addImg"
                  v-model="img"
                />
              </div>
              <div class="mb-3">
                <label for="addDescription" class="form-label"
                  >Description</label
                >
                <input
                  class="form-control"
                  type="text"
                  name="addDescription"
                  id="addDescription"
                  v-model="description"
                />
              </div>
            </div>

            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <br />
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="updateProduct()"
            >
              Edit Product
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
 <input type="text" v-model="search" />
  

  <div class="container my-5">
   

    <div v-if="products.length" class="row">
      <div
        v-for="product of filterProducts"
        :key="product._id"
        class="col-lg-4 col-md-6 col-sm-12"
      >
        <div class="card">
          <img :src="product.img" class="card-img-top" :alt="product.title" />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">R{{ product.price }}</p>
            <p class="card-text">{{ product.category }}</p>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">{{ product._id }}</p>
            <p><button><router-link class="read-more" :to="{ name: 'ProductDetails', params: { id: product._id } }" >Read more</router-link></button></p>
            <div class="d-flex mb-3">
              <input
                type="number"
                class="form-control"
                value="1"
                min="1"
                id="addToCart${position}"
              />
              <button type="button" class="btn2" @click="addToCart()">
                <i class="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-end card-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal3"
            >
              Edit
            </button>
            <button
              type="button"
              class="btn btn-danger w-50 ms-3"
              @click="deleteProduct()"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading products...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product","idx"],
  data() {
    return {
      filteredProducts:null,
      products: [],
      fullname: "",
      email: "",
      password: "",
      title: "",
      category: "",
      description: "",
      phone_number: "",
      
      img: "",
      price: "",
      search: "",
    };
  },
  mounted() {
    if (localStorage.getItem("jwt")) {
      fetch("https://pointonsalebackend.herokuapp.com/products/", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.products = data;
          this.filteredProducts = data;
        })
        .catch((err) => {
          alert("User not logged in");
        });
    } 
    
    else {
      alert("User not logged in");
      this.$router.push({ name: "Login" });
    }
  },
  computed: {
    filterProducts: function () {
      return this.products.filter((product) => {
        return product.title.match(this.search);
      });
    },
  },
  methods: {
    sortPrice(dir) {
      this.filteredProducts = this.filteredProducts.sort(
        (a, b) => a.price- b.price
      );
      if (dir == "desc") this.filteredProducts.reverse();
    },
     sortTitle(dir) {
      this.filteredProducts= this.filteredProducts.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      console.log(typeof filteredProducts);
      if (dir == "desc") this.filteredProducts.reverse();
    },
   },
    // Create Product
    createProduct() {
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
      }
      fetch("https://pointonsalebackend.herokuapp.com/products", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          description: this.description,
          category: this.category,
          price: this.price,
          img: this.img,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          alert("Product Created");
          this.$router.push({ name: "Products" });
        })
        .catch((err) => {
          alert(err);
        });
    },
    // Update Product
    updateProduct() {
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
      }
      fetch("https://pointonsalebackend.herokuapp.com/products" + this._id, {
        method: "PUT",
        body: JSON.stringify({
          title: this.title,
          category: this.category,
          description: this.description,
          img: this.img,
          price: this.price,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          alert("User Updated");
          this.$router.push({ name: "Products" });
        })
        .catch((err) => {
          alert(err);
        });
    },
    // // Update User
    updateUser() {
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
      }
      fetch("https://pointonsalebackend.herokuapp.com/products" + this.id, {
        method: "PUT",
        body: JSON.stringify({
          fullname: this.fullname,
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          alert("User Updated");
          this.$router.push({ name: "Products" });
        })
        .catch((err) => {
          alert(err);
        });
    },
    // // Delete Product
    deleteProduct() {
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
      }
      fetch("https://pointonsalebackend.herokuapp.com/products/" + this._id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          alert("Product Deleted");
          this.$router.push({ name: "Products" });
        })
        .catch((err) => {
          alert(err);
        });
    },
};
</script>