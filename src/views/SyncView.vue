<template>
    <v-container fluid>
        <div class="card-container">
            <v-card class="pa-3" max-width="180">
                <v-card-text class="text-center">
                    <v-img src="@/assets/logos/gcalendar.png"></v-img>
                </v-card-text>
                <v-card-action class="text-center">
                    <div class="mx-auto">Google Calendar</div>
                </v-card-action>
            </v-card>
            <v-card class="pa-3" max-width="180">
                <v-card-text class="text-center">
                    <v-img class="mx-auto" src="@/assets/logos/mycalendar.png" width="90"></v-img>
                </v-card-text>
                <v-card-action class="text-center">
                    <div class="mx-auto">MyCalendar</div>
                </v-card-action>
            </v-card>
            <v-card class="pa-3" max-width="180" justify="center">
                <v-card-text class="text-center">
                    <v-img class="mx-auto" src="@/assets/logos/applecalendar.png" width="80" height="80"></v-img>
                </v-card-text>
                <v-card-action class="text-center">
                    <div class="mx-auto">Apple Calendar</div>
                </v-card-action>
            </v-card>
        </div>
        <v-row class="pa-0 mx-10">
            <v-col cols="12"><div>Última actualización: <span class="focused-text">22 de febrero de 2024</span></div> </v-col>
            <v-col cols="12"><div>Fuente: <span class="focused-text">22 de febrero de 2024</span></div></v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'SyncView',
    data: () => ({
        startWeek: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        alarmTones: ['Natural', 'Digital', 'Analógico', 'Piano', 'Guitarra', 'Personalizado'],
        day: '',
        tone: '',
        vibration: '',
        increaseVolume: '',
        theme: '',
        volume: 0,
        error: false,
        modal: false,
    }),
    methods: {
        resetValidation() {
            this.day = '';
            this.tone = '';
            this.vibration = '';
            this.increaseVolume = '';
            this.theme = '';
            this.volume = 0;
        },
        saveConfig() {
            if (this.day !== "" && this.tone !== "" && this.vibration !== "" && this.increaseVolume !== "" && this.theme !== "" && this.volume !== 0) {
                this.modal = true;
            } else {
                this.error = true;
                setTimeout(() => {
                    this.error = false;
                }, 3000);
            }
        }
    },
}
</script>

<style scoped>
.card-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40vh;
}

.v-card {
    width: 170px;
    height: 170px;
}
.text-center {
    text-align: center;
}
.focused-text {
    font-weight: semi-bold;
    color: #2196F3;
}
</style>