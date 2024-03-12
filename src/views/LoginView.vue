<template>
    <v-container class="pa-10" justify="center">
        <v-row justify="center">
            <v-img src="@/assets/logoAppAlarm.png" max-height="200" max-width="200"></v-img>
        </v-row>
        <v-row justify="center">
            <v-col cols="5">
                <v-form width="400">
                    <v-text-field v-model="email" label="Usuario" required></v-text-field>
                    <v-text-field v-model="password" label="Conteraseña" required type="password"></v-text-field>
                    <v-btn @click="login" color="primary" dark block rounded>
                        Entrar
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
        <v-row justify="center">
            <span>
                ¿Has olvidado tu contraseña?
            </span>
        </v-row>
        <v-row justify="center" class="mb-10">
            <strong class="text-button" @click="goToChangePassword">Click aquí</strong>
        </v-row>
        <v-row justify="center" >
            <strong>
                Regístrate
            </strong>
        </v-row>
        <v-alert v-if="error" type="error">Error: Credenciales inválidas.</v-alert>
    </v-container>

</template>

<script>
export default {
    name: 'LoginView',
    data: () => ({
        email: '',
        password: '',
        error: false,
    }),
    methods: {
        login() {
            if (this.email !=="" && this.password !=="") {
                this.$router.push({ name: 'StatisticsView' });
            }
            this.error = true;
            setTimeout(() => {
                this.error = false;
            }, 3000);

        },
        goToChangePassword() {
            this.$router.push({ name: 'ChangePassword' });
        },
    },
}
</script>
<style scoped>
.v-toolbar__title {
    font-size: 2.8rem;
    font-weight: bold;
}
.text-button {
    cursor: pointer;
    font-weight: bold;
}
.text-button:hover {
    color: #606060;
}
</style>