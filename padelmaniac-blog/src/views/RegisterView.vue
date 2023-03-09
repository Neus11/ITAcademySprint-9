<template>
        <div class="form-wrap">
        <form class="register">
            <p class="login-register">
                Already have an account?
                <router-link class="router-link" :to="{ name: 'LoginView' }">Login</router-link>
            </p>
            <h2> Create Your Padel Maniac Account </h2>
                <div class="input">
                    <b-input-group prepend="Email" class="mt-3">
                        <b-form-input v-model="register_form.email" type="email"></b-form-input>
                    </b-input-group>
                    <b-input-group prepend="Password" class="mt-3">
                        <b-form-input v-model="register_form.password" type="password"></b-form-input>
                    </b-input-group>
                </div>
            <b-button @click.stop.prevent="register">Sing Up</b-button>
            <div class="angle"></div>
        </form>
        <div class="backgroud"></div>
    </div>
</template>

<script>

import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'RegisterView',
    setup () {
        const register_form =ref ({});
        const store = useStore();

        const register = () => {
            store.dispatch('register', register_form.value);
        }

        return {
            register_form,
            register
        }
    },
   


}
</script>

<style lang="scss" scoped>
.register {
    max-width:750px ;
}

h2{
    text-align: center;
}

</style>