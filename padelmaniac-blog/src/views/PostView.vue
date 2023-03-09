<template>
    <div class="post-view">
        <div class="container" v-for="(blog, n) in this.blogs" :key="n">
            <h2> {{ blog.title }}</h2>
            <img :src="blog.blogCoverPhotoName" />
            <div class="post-content" v-html="blog.blogPost"></div>
            <b-button @click="removePosts(n)">Eliminar Post</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostView",
    data() {
        return {
            blogs: null
        }
    },
    mounted() {
        if (localStorage.getItem('blogs')) {
            this.blogs = JSON.parse(localStorage.getItem('blogs'));
        }
    },
    methods: {
        removePosts(x) {
            this.blogs.splice(x, 1);
            this.savePosts();
        },
        savePosts() {
            const parsed = JSON.stringify(this.blogs);
            localStorage.setItem('blogs', parsed);
        }
    }
}


</script>

<style scoped lang="scss">
.container {
    padding: 4rem;
    
    img {
        width: 50%;
}
}


</style>