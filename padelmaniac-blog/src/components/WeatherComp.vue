<template>
    <p>Para saber las condiciones de juego <a href="#" @click="showTemperature">Pess me!</a></p>
    <div v-if="showTemp" class="col d-flex justify-content-center">
        <b-card
            bg-variant="secondary" 
            text-variant="white"
            title="El tiempo:"
            :img-src="`http://openweathermap.org/img/w/${iconApi}.png`"
            img-top
            tag="article"
            style="max-width: 50rem;"
            class="mb-2"
            >
            <b-card-text>
                {{ current }} <br />
                {{ temperature }}º <br /> 
                {{ wind }} km/h
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
import axios from 'axios';


export default {

    data() {
        return {
            iconApi: '02d',
            current: null,
            showTemp: false,
            temperature: null,
            wind: null

        }
    },
    mounted() {
        axios
            .get('https://api.openweathermap.org/data/3.0/onecall?lat=38.967938&lon=1.272743&exclude=hourly,daily&appid=feaf93e453d16a8bdb33cc21b0a2a83e&lang=ES&units=metric')
            .then(response => response.data)
            .then(items => {
                    this.iconApi = items.current.weather[0].icon;
                    this.current = items.current.weather[0].description;
                    this.wind = items.current.wind_speed;
                    this.temperature = items.current.temp;
                })
            .catch (error => console.log(error));  
    },
    methods: {
        showTemperature() {
            this.showTemp = !this.showTemp;
            setTimeout(() => this.showTemp = false, 5000);
        }
    }
}

</script>

<style lan="scss" scoped>

p {
    text-transform: uppercase;
}

a {
    text-decoration: none;
    cursor: pointer;
    background-color: black;
    color: rgb(182, 178, 178);
    padding: 0.5rem;
}
a:hover {
        color: white;
    }

</style>
