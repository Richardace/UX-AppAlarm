<template>
    <v-container class="pa-10" justify="center">
        <v-row justify="center">
            <v-img src="@/assets/logoAppAlarm.png" max-height="200" max-width="200"></v-img>
        </v-row>
        <v-row justify="center" class="mb-12">
            <v-col cols="5">
                <v-form width="400">
                    <v-text-field v-model="user" label="Usuario" required></v-text-field>
                    <v-text-field v-model="password1" label="Nueva Contraseña" required type="password"></v-text-field>
                    <v-text-field v-model="password2" label="Repetir Contraseña" required type="password"></v-text-field>
                    <v-btn @click="updatePassword" color="primary" dark block rounded>
                        Cambiar contraseña
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
        <v-dialog max-width="400" v-model="modal">
            <v-card class="pa-3">
                <v-card-title>
                    <span class="text-h5">Confirmación</span>
                </v-card-title>
                <v-card-text>
                    <span>¡ Contraseña actualizada con exito !</span>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="goToLogin" color="primary" dark block rounded>
                        Aceptar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-alert v-if="error" type="error">Error: revisa los datos ingresados.</v-alert>
    </v-container>

</template>

<script>
export default {
    name: 'ConfirmNewPassword',
    data: () => ({
        user: '',
        password1: '',
        passwprd2: '',
        error: false,
        modal: false,
    }),
    methods: {
        updatePassword() {
            if (this.user !=="" && this.password1 !=="" && this.password2 !== "") {
                this.modal = true;
            } else {
                this.error = true;
                setTimeout(() => {
                    this.error = false;
                }, 3000);
            }
        },
        goToChangePassword() {
            this.$router.push({ name: 'ChangePassword' });
        },
        goToLogin(){
            this.$router.push({ name: 'LoginView' });
        }
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