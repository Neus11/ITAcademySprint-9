<template>
    <div>
        <BlogPostComp :post="welcomeScreen"/>
        <BlogPostComp :post="post" v-for="post, index in blogPost" :key="index" />
       
    </div>
</template>

<script>

import BlogPostComp from "@/components/BlogPostComp.vue"


export default{
    name: "BlogView",
    components: {
        BlogPostComp,
    },
    data() {
        return {
            blogPost: [],
            welcomeScreen: {
                title: "Bienvenidos!",
                blogPost: 
                "Blogs semanales sobre todas las novedades de Padel, palas, calzado, torneos World Padel Tour y Premier",
                welcomeScreen: true,
                photo: "wilson"
            },
        }
    },
    mounted() {
        if (localStorage.getItem('blogs')) {
            this.blogPost = JSON.parse(localStorage.getItem('blogs'));
            console.log(this.blogPost);
        }
    },
}
</script>
