<template>
  <div class="container">
  <img alt="Vue logo" src="./assets/logo.png">
  <BlogPost title="Post 1" id="1" content="This is the first blog post." colorText="primary" colorBackground="secondary"/>
  <BlogPost title="Post 2" id="2" content="This is the first blog post." colorText="warning" colorBackground="danger" />
  <BlogPost title="Post 3" id="3" content="This is the first blog post." colorText="success" colorBackground="warning"/>

</div>
</template>

<script>
import BlogPost from './components/BlogPost.vue';

export default {
  name: 'App',
  components: {
    BlogPost,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
