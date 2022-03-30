<template>
<div class="contain">
     <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <!-- <h5 class="h1 text-white">Stay Mindful <img class="heart" src="https://i.postimg.cc/FRP7HSps/pink-heart2.png" alt=""> </h5> -->
                    <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. 2022 <a target="_blank" href="https://github.com/HannahDalwai">Hannah Dalwai</a>   <a target="_blank" href="https://github.com/Innocent27">Lindokhle Nkamela</a>  </p>
                </div>
          
               
            </div>
        </div>
    </footer>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.heart{
  height: 30px;
  width: 30px;
}
.contain{
  position: absolute;
  position: unset;
  /* padding-bottom: -40%; */
  /* position: fixed; */
  /* bottom: 0; */
  width: 100%;
}
.text-small {
  font-size: 0.9rem;
}
a {
  color: #56ab2f;
  transition: all 0.3s;
}
a:hover, a:focus {
  text-decoration: none;
  color: white;
}
.form-control {
  background: #a4ae9d;
  border-color: #41493b;
}
.form-control:focus {
  background: #a4ae9d;
}
footer {
  background: #495057;;
  margin-top: 10%;
  
}
button{
  background-color:#56ab2f ;
  color: white;
  
}
button:hover{
  color: #41493b;
  background-color: white;
}
</style>