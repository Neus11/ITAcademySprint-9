<template>
    <div class="container">
            <div v-for="i in [currentIndex]" :key="i">
                <img :src="currentImg" alt="fotos" />
            </div>
    </div>
</template>

<script>

export default {
    name: "SlideshowComp",
    data() {
        return {
            images: [
                require('../assets/slide/1.jpg'), 
                require('../assets/slide/2.jpg'), 
                require('../assets/slide/3.jpg'),
                require('../assets/slide/4.jpg'),
                require('../assets/slide/5.jpg'),
                require('../assets/slide/6.jpg'),
                require('../assets/slide/7.jpg')

            ],
            timer: null,
            currentIndex: 0
        };
    },

    mounted: function() {
        this.startSlide();
    },

    methods: {
        startSlide() {
            this.timer = setInterval(this.next, 4000);
        },

        next() {
            this.currentIndex += 1;
        },
    },

    computed: {
        currentImg () {
            return this.images[Math.abs(this.currentIndex) % this.images.length];
        }
    }
}

</script>

<style lang="scss" scoped>

img {
    height:600px;
    width:80%;
    margin-bottom: 5rem;
}

</style>