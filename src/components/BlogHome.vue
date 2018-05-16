<template>
  <div>
   <h1>博客首页</h1>
   <ul>
     <li v-for="post in posts" :key="post.id" >
       <router-link :to="`/blog/${post.id}`">
       {{ post.title}}
       </router-link>
     </li>
   </ul>
 </div>
</template>
<script>
 export default {
   name: 'BlogHome',
   computed: {
     posts() {
       return this.$store.state.blog.all
     }
   }
 }
 </script>
 <style scoped>
 ul{
   width: 100%;
 display: flex;
 flex-wrap:wrap;
 }
 li{
   margin: 20px;
   list-style: none;
   width: 600px;
  border-radius: 10px;
  box-shadow: 4px 4px 4px 4px rgb(238, 236, 236);
 }
 li a{
   text-decoration: none;
    line-height: 100px;
    margin-left: 20px;
    color:rgb(110, 106, 106);
 }
 h1{
   text-align: center;
 }
 </style>
 