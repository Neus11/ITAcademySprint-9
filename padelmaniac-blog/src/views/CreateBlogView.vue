<template>
    <div class="create-post">
        <div class="container">
            <h1>Crear Blog </h1>
            <div :class="{ invisible: !error }" class="err-message">
                <p><span>Error:</span> {{ errorMsg }}</p>
            </div>
            <div class="blog-info">
                <b-form-input type="text" placeholder="Enter Blog Title" v-model="blogTitle" class="w-75"/>
                <div class="upload-file" v-if="!image">
                    <label for="blog-photo">Seleccionar Foto: &nbsp;  </label>
                    <input type="file" @change="onFileChange" accept=".png, .jpg" />
                </div>
                <div v-else>
                    <img :src="image" id="blog-photo"/>
                    <b-button @click="removeImage">Borrar Imagen</b-button>  
                </div>
                <div class="editor">
                    <QuillEditor v-model:content="blogHTML" contentType="html" theme="snow"/>
                </div>
                <div :class="{ invisible: !success }" class="success-msg">
                    <p><span>Enhorabuena:</span> {{ successMsg }}</p>
                </div>
                <b-button @click="publishBlog">Publicar Blog</b-button>
            </div>
        </div>
    </div>
</template>

<script>

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
    name: "CreatePost",
    components: {
        QuillEditor
    },
    data() {
        return {
            image: null,
            file: true,
            error: null,
            errorMsg: null,
            blogs: [],
            newBlog: null,
            success: false,
            successMsg: ""
        }
    },
    beforeMount(){
        var vm = this;
        vm.get('img');
    },
    mounted() {
        if (localStorage.getItem('blogs')) {
            try {
                this.blogs = JSON.parse(localStorage.getItem('blogs'));
            } catch(e) {
            localStorage.removeItem('blogs');
            }
        }
     },
    computed: {
        blogCoverPhotoName() {
            return this.$store.state.blogPhotoName;
        },
        blogTitle: {
            get() {
                return this.$store.state.blogTitle;
            },
            set(payload) {
                this.$store.commit("updateBlogTitle", payload);
            }
        },
        blogHTML: {
            get() {
                return this.$store.state.blogHTML;
            },
            set(payload) {
                this.$store.commit("newBlogPost", payload);
            }
        }
    },
    methods: {
        get(key) {
            this.image = localStorage.getItem(key);
        },
        set(key){
            try {
                localStorage.setItem(key, this.image);
            } catch(e) {
                console.log(`Storage failed: ${e}`);
            }
        },
        onFileChange(event) {
            var files = event.target.files || event.dataTransfer.files;
            if(!files.length){
                return;
            }
            this.createImage(files[0]);    
        },
        createImage(file) {
            var reader = new FileReader();
            var vm = this;

            reader.onload = (event) => {
                vm.image = event.target.result;
                vm.set('img');
            }
            reader.readAsDataURL(file);
        },
        removeImage() {
            this.image = "";
            localStorage.removeItem('img');
        },

        publishBlog() {
            if(this.blogTitle.length !== 0 && this.blogHTML.length !== 0) {
                if(this.file){
                    this.newBlog = {
                        title: this.blogTitle, 
                        blogPost: this.blogHTML,
                        blogCoverPhotoName: this.image
                    }

                    this.blogs.push(this.newBlog);
                    this.savePost();
                } else {
                    this.error = true;
                    this.errorMsg = "Porfavor adjunte una imgen";
                    setTimeout(() => this.error = false, 5000);
                    return;
                }
            } else {
                this.error = true;
                this.errorMsg = "Porfavor rellene todos los campos";
                setTimeout(() => this.error = false, 5000);
                return;
            }
        },
        savePost() {
            const parsed = JSON.stringify(this.blogs);
            localStorage.setItem('blogs', parsed);
            this.success = true;
            this.successMsg = "Perfecto, blog guardado. Gracias!"
            setTimeout(() => this.success = false, 4000);
            this.removeImage();
            setTimeout(() => this.$router.push({ name: 'PostView'}), 2000);
            

        }
    }
}

</script>

<style lang="scss">
.create-post {
    position: relative;
    height: 100%;

    .container {
        position: relative;
        height: 100%;
        padding: 10px 25px 60px;

        h1 {
            margin-top: 3rem;
        }

        #blog-photo {
            width: 30%;
            display: block;
            margin-bottom: 10px;
        }
    }
    .invisible {
        opacity: 0 !important;
    }
    .err-message, .success-msg {
        width: 50%;
        padding: 8px;
        border-radius: 5px;
        color: rgb(239, 232, 231);
        margin-bottom: 5px;
        background-color: #7a7a7a;
        opacity: 1;
        transition: 0.5s ease all;
        p {
            font-size: 14px;
        }

        span {
            font-weight: 600;
        }
    }
    .upload-file {
        padding: 10px;
        background-color: #b4b3b3;
        border-radius: 8px;
        width: 75%;
    }
    .editor  {
        height: 30vh;
        background-color: #b4b3b3;
        width: 75%;
        border-radius: 10px;
    }
}

</style>