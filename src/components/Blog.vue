<template>
   <div class="blog">
   <div class="sidebar">
     <ul>
       <li :key="t.id" v-for="t in posts">
         <router-link active-class="active" :to="`/blog/${t.id}`">
         {{ t.title}}
         </router-link>
       </li>
     </ul>
   </div>
  <!-- <BlogContent /> -->
   <BlogContent2 />
    </div>
</template>
<script>
// import BlogContent from './BlogContent'
import BlogContent2 from './BlogContent2'
export default {
  name: "Blog",
  components: {
    BlogContent2
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    posts() {
      return this.$store.state.blog.all
    }
  }
}
</script>
<style>
 .blog {
   display: flex;
 }
 
 .sidebar {
   border: 2px solid #FDB87D;
   flex-basis: 200px;
 }
 
 .active {
   font-size: 30px;
   color: #FF6D24;
 }
 li{
     width: 400px;
     list-style: none;
 }
 li a{
      display: block;
     width: 250px;
     
     text-decoration: none;
     color:rgb(116, 116, 116);
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
    
 }
 </style>

