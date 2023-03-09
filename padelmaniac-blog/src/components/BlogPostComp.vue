<template>
    <div class="blog-wrapper">
        <div class="blog-content">
            <div>
                <h2 v-if="post.welcomeScreen"> {{ post.title }}</h2>
                <h2 v-else> {{ post.title }}</h2>
                <p v-if="post.welcomeScreen"> {{ post.blogPost }}</p>
                <p v-else v-html="post.blogPost"></p>
                <router-link v-if="post.welcomeScreen" :to="{ name: 'LoginView' }">
                Register/Login </router-link>
                <router-link v-else :to="{ name: 'PostView' }">
                Leer Post </router-link>
            </div>
        </div>
        <div class="blogPhoto">
                <img v-if="post.welcomeScreen" :src="require(`../assets/${post.photo}.jpg`)" alt="">
                <img :src="post.blogCoverPhotoName" />
            </div>
    </div>
</template>

<script>
export default {
    name: "blogPost",
    props: ['post']
        

}
</script>
<style lang="scss" scoped>
a {
    text-decoration: none;
    cursor: pointer;
    background-color: black;
    color: rgb(182, 178, 178);
    padding: 0.5rem;
    border-radius: 5px ;
    &:hover {
        background-color: rgb(107, 105, 105);
    }
}

.blog-wrapper {
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px -1px black, 0 2px 4px -1px black;
    @media(min-width: 700px) {
        min-height: 650px;
        max-height: 650px;
        flex-direction: row;
    }
    .blog-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        flex: 4;
        order: 2;
        @media(min-width: 700px) {
            oreder: 1;
        }
        @media(min-width: 800px) {
            flex: 3;
        }

        div {
            max-width: 375px;
            padding: 72px 24px;
            @media(min-width: 700px) {
                padding: 0 24px;
            }

            h2 {
                font-size: 32px;
                text-transform: uppercase;
                margin-bottom: 24px;
                @media(min-width: 700px){
                    font-size: 40px;
                }
            } 
        }
    }

    .blogPhoto {
        order: 1;
        flex: 3;
        box-shadow: 0 4px 6px -1px black, 0 2px 4px -1px black;

        @media(min-width: 700px) {
            order: 2;
        }

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &:nth-child(even) {
        .blog-content {
            order: 2;
        }
        .blogPhoto {
            order: 1;
        }
    }
}



</style>
