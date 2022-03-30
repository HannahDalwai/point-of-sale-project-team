<template>
  <div v-if="product">


<MDBModal
    id="exampleModal"
    tabindex="-1"
    labelledby="exampleModalLabel"
    v-model="exampleModal"
  >
    <MDBModalHeader>
      <MDBModalTitle id="exampleModalLabel"> Update Post </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
      <div class="mb-3">
        <label for="addName" class="form-label">title</label>
        <input
          class="form-control"
          type="text"
          name="addName"
          id="addName"
          v-model="title"
        />
      </div>
      <div class="mb-3">
        <label for="addEmail" class="form-label">category</label>
            <select
          class="form-select"
          name="addCategory"
          id="addCategory"
          v-model="category"
        >
          <option value="skincare">skincare</option>
          <option value="movement">movement</option>
          <option value="feeling toolkit">feeling toolkit</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="addContact" class="form-label">img</label>
        <input
          class="form-control"
          type="text"
          name="addContact"
          id="addContact"
          v-model="img"
        />
      </div>
      <div class="mb-3">
        <label for="addPassword" class="form-label">description</label>
        <input class="form-control" type="password" name="addPassword" id="addPassword"
          v-model="description"
        />
      </div>
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" @click="exampleModal = false">Close</MDBBtn>
      <MDBBtn color="primary" @click="updatePost()">Update Post</MDBBtn>
    </MDBModalFooter>
  </MDBModal>

<section class="single-block-wrapper section-padding">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
				<div class="single-post">
    <div class="post-header mb-5 text-center">
        <h2 class="post-title mt-2">
            {{ post.title }}
        </h2>

        <div class="post-meta">
            <span class="text-uppercase font-sm letter-spacing-1 mr-3">{{ post.author }}</span>
            <span class="text-uppercase font-sm letter-spacing-1">{{ post.date }}</span>
        </div>
        <div class="post-featured-image mt-5">
            <img :src="post.img" class="img-fluid w-100" alt="featured-image">
        </div>
    </div>
    <div class="post-body">
        <div class="entry-content"> 
            <blockquote>
                <i class="ti-quote-left mr-2"></i>{{ post.category }}<i class="ti-quote-right ml-2"></i>
            </blockquote>
            <p> {{ post.description }}</p>
        </div>
    </div>

				
			
				
				<div class="related-posts-block mt-5">
    <h3 class="news-title mb-4 text-center">
       You May Also Like
    </h3>
    <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="post-block-wrapper mb-4 mb-lg-0">
                 <img :src="posts[posts.length-3].img" alt="">
                <div class="post-content mt-3">
                    <h5>
                     <div>{{posts[posts.length-3].title}}</div>
                    </h5>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="post-block-wrapper mb-4 mb-lg-0">
                    <img :src="posts[posts.length-5].img" alt="">
                <div class="post-content mt-3">
                    <h5>
                     <div>{{posts[posts.length-5].title}}</div>
                    </h5>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="post-block-wrapper">
                 <img :src="posts[posts.length-4].img" alt="">
                <div class="post-content mt-3">
                    <h5>
                     <div>{{posts[posts.length-4].title}}</div>
                    </h5>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- comment -->
	<form class="comment-form mb-5 gray-bg p-5" id="comment-form">
		<h3 class="mb-4 text-center">Leave  a comment</h3>
		<div class="row">
			<div class="col-lg-12">
				<textarea class="form-control mb-3" name="comment" id="comment" cols="30" rows="5" placeholder="Comment"></textarea>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<input class="form-control" type="text" name="name" id="name" placeholder="Name:">
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<input class="form-control" type="text" name="mail" id="mail" placeholder="Email:">
				</div>
			</div>
		</div>

		<input class="btn btn-primary" type="submit" name="submit-contact" id="submit_contact" value="Submit Message">
	</form>

			</div>
			<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
				<div class="sidebar sidebar-right">
					<div class="sidebar-wrap mt-5 mt-lg-0">
	<div class="sidebar-widget about mb-5 text-center p-3">
		<div class="about-author">
			<img id="author" src="https://i.postimg.cc/jdg3sPqC/default-profile.jpg" alt="" class="img-fluid">
		</div>
		<h4 class="mb-0 mt-4">{{post.author}}</h4>
		<p>Blogger</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil a dicta perferendis cupiditate cumque nesciunt doloremque suscipit sequi recusandae, quia consectetur debitis. Quasi, et! In non maiores, voluptates corrupti dolores corporis, unde ullam vero dolor iusto, deserunt voluptate inventore dicta. In vitae officiis cum error.</p>
        <div class="sidebar-widget follow mb-5 text-center">
		<h4 class="text-center widget-title">Follow Me</h4>
		<div class="follow-socials">
			<a id="socail" href="#"><i class='bx bxl-codepen bx-md'></i></a>
			<a href="#"><i class="ti-twitter"></i></a>
			<a href="#"><i class="ti-instagram"></i></a>
			<a href="#"><i class="ti-youtube"></i></a>
			<a href="#"><i class="ti-pinterest"></i></a>
		</div>
	</div>
	</div>

	

	<div class="sidebar-widget mb-5 ">
	

		<div class="sidebar-post-item-big">
		 <div class="my-2">
          <MDBBtn
            color="black"
            aria-controls="exampleModal"
            @click="exampleModal = true"
          >
            Update/Edit
          </MDBBtn>

          
        </div>
		</div> 
	
	

	<div class="sidebar-widget category mb-5">
		<h4 class="text-center widget-title">Catgeories</h4>
	 	<ul class="list-unstyled">
		  <li class="align-items-center d-flex justify-content-between">
		    <a href="#">Innovation</a>
		    <span>14</span>
		  </li>
		  <li class="align-items-center d-flex justify-content-between">
		    <a href="#">Software</a>
		    <span>2</span>
		  </li>
		  <li class="align-items-center d-flex justify-content-between">
		    <a href="#">Social</a>
		    <span>10</span>
		  </li>
		  <li class="align-items-center d-flex justify-content-between">
		    <a href="#">Trends</a>
		    <span>5</span>
		  </li>
		</ul>
	</div>
	
	<div class="sidebar-widget subscribe mb-5">
		<h4 class="text-center widget-title">Newsletter</h4>
		<input type="text" class="form-control" placeholder="Email Address">
		<a href="#" class="btn btn-primary d-block mt-3">Sign Up</a>
	</div>

	<div class="sidebar-widget sidebar-adv mb-5">
		<a href="#"><img src="https://i.postimg.cc/NjqQnjfL/reading.jpg" alt="" class="img-fluid w-100"></a>
	</div>

</div>
				</div>
			</div>
		</div>
	</div>
	</div>
	</div>
</section>
 </div>
 

<div v-else>
     <Loader/>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue'
import {
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
    components: { Loader, MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn, },

  props: ["id"],
  data() {
    return {
      product: null,
         title:"",
      category:"",
      search:"",
      description:"",
      fullname:"",
     img:"",
     price:"",
     password:""
     
    };
  },
   setup() {
    const exampleModal = ref(false);
    return {
      exampleModal,
    };
  },
  mounted() {
    fetch("https://blog-capstone-h.herokuapp.com/posts")
        .then(res => res.json())
        // .then(data => this.posts= data)
        // this.filteredBlogs = data
    .then((data)=>{
      this.posts = data;
      this.filteredBlogs = data
    })
        .catch(err => console.log(err.message))


    
    fetch("https://blog-capstone-h.herokuapp.com/posts/" + this.id, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => response.json())
      .then(async (json) => {
        this.post = json;
        await fetch(
          "https://blog-capstone-h.herokuapp.com/users" + json.author,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        )
          .then((response) => response.json())
          .then((json) => {
            this.post.author_name = json.name;
          });
      });
  },
  methods: {
    updatePost() {
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
      }
      fetch("https://blog-capstone-h.herokuapp.com/posts/" + this.id, {
        method: "PUT",
        body: JSON.stringify({
          title: this.title,
          description: this.description,
          category: this.category,
          img: this.img,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.post = json;
          alert("User Updated!");
          location.reload();
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
  
};
</script>

<style>
#socail{
     padding: 25px 5px 5px 5px;
    background-color: rgb(161, 182, 161);
    border-radius: 50%;

}
#socail:hover{
    
    background-color: rgb(157, 157, 211);
    color: white;
}
#author{
  clip-path: circle(50% at 50% 50%);

}
</style>