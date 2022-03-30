import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Cart from "@/views/Cart.vue";
import Products from "@/views/Products.vue";
import ProductDetails from "@/views/ProductDetails.vue";
import Contact from "@/views/Contact.vue";
import Create from "@/views/Create.vue";
import NotFound from "@/views/NotFound.vue";
// lazy-loaded
const Profile = () => import("@/views/Profile.vue")
const BoardUser = () => import("@/components/BoardUser.vue")
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
     name: "register",
    component: Register,
  },
  {
    path: "/cart",
     name: "cart",
    component: Cart,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/contact",
     name: "contact",
    component: Contact,
  },

  {
    path: "/user", 
    path: "/user",
    name: "user",
      // lazy-loaded
    component: BoardUser,
    },
    {
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
  path: "/:catchAll(.*)",
  name: "NotFound",
  // lazy-loaded
  component: NotFound,
},
  {
    path: "/products",
     name: "products",
    component: Products,
  },
  {
    path: "/products/:id",
     name: "ProductDetails",
    component: ProductDetails
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home','/products'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;