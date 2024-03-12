<template>
    <v-container justify="center">
        <v-row justify="center" class="mb-5">
            <v-img src="@/assets/logoAppAlarm.png" max-height="200" max-width="200"></v-img>
        </v-row>
        <div class="display-1 text-center">
            Solicitud de cambio de contraseña
        </div>
        <v-row justify="center" class="mt-5 mb-12 pa-3">
            <v-col xs="12" sm="10" md="4" lg="4" xlg="3">
                <v-form>
                    <v-text-field v-model="email" label="Email" required></v-text-field>
                    <v-btn  disabled-color="grey lighten-2" @click="sendEmail" color="primary" dark block rounded>
                        Enviar Enlace
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>

        <v-alert v-if="event" :type="eventType">{{ message }}</v-alert>
    </v-container>

</template>

<script>
export default {
    name: 'ChangePassword',
    data: () => ({
        email: '',
        event: false,
        eventType: 'error',
        message: 'Credenciales inválidas.',
    }),
    methods: {
        sendEmail() {
            if (this.event == true){
                return;
            }
            if (this.email !== "") {
                this.eventType = 'success';
                this.message = 'Correo enviado.';

                setTimeout(() => {
                    this.$router.push({ name: 'ConfirmNewPassword' });
                }, 3000);


            } else {
                this.message = 'Correo inválido.';
                this.eventType = 'error';
            }
            this.event = true;

            setTimeout(() => {
                this.event = false;
            }, 2000);

        },
    },
}
</script>
<style scoped>
.v-toolbar__title {
    font-size: 2.8rem;
    font-weight: bold;
}
</style>