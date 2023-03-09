<template>
    <div class="form-wrap">
        <form class="login">
            <p class="login-register">
                Don't have an account?
                <router-link class="router-link" :to="{ name: 'RegisterView' }">Register</router-link>
            </p>
            <h2>Login to Padel Maniac</h2>
                <div class="input">
                    <b-input-group prepend="Email" class="mt-3">
                        <b-form-input v-model="login_form.email" type="email"></b-form-input>
                    </b-input-group>
                    <b-input-group prepend="Passwrod" class="mt-3">
                        <b-form-input v-model="login_form.password" type="password"></b-form-input>
                    </b-input-group>
                </div>
            <b-button @click.stop.prevent="login">Sing In</b-button>
            <div class="angle"></div>
        </form>
        <div class="backgroud"></div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'LoginView',
    setup() {
        const login_form = ref({});
        const store = useStore();

        const login = () => {
            store.dispatch('login', login_form.value);
        }

        return {
            login_form,
            login
        }
    }

}
</script>

<style lang="scss">
.form-wrap {
    overflow: hidden;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-self: center;
    width: 90%;
    @media(min-width: 900px) {
        width: 100%;
    }

    .router-link {
        color: black;
    }

    .input {
    margin-bottom: 10px;
    }

    form {
        padding: 0 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        @media (min-width: 900px){
            padding: 0 50px;
        }
    }
    .angle {
        display: none;
        position: absolute;
        background-color: #fff;
        transform: rotateZ(4deg);
        width: 60px;
        right: -30px;
        height: 101%;
        @media(min-width: 900px){
            display: initial;
        }
    }
    
}

.backgroud {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url("../assets/background.jpg");
    width: 100%;
    height: 100%;
    @media(min-width: 900px) {
        display: initial;
    }
}

</style>
