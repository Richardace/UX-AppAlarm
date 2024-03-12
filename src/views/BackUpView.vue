<template>
    <v-container fluid>
        <v-row justify="center" class="card-container">
            <v-col md="4" sm="4" xs="12">
                <v-card class="pa-3 mx-auto" max-width="180">
                    <v-card-text class="text-center">
                        <v-img src="@/assets/logos/drive.png"></v-img>
                    </v-card-text>
                    <v-card-action class="text-center">
                        <div class="mx-auto">Google Drive</div>
                    </v-card-action>
                </v-card>
            </v-col>
            <v-col md="4" sm="4" xs="12">
                <v-card class="pa-3 mx-auto" max-width="180">
                    <v-card-text class="text-center">
                        <v-img src="@/assets/logos/onedrive.png"></v-img>
                    </v-card-text>
                    <v-card-action class="text-center">
                        <div class="mx-auto">onedrive</div>
                    </v-card-action>
                </v-card>
            </v-col>
            <v-col md="4" sm="4" xs="12">
                <v-card class="pa-3 mx-auto" max-width="180" justify="center">
                    <v-card-text class="text-center">
                        <v-img class="mx-auto" src="@/assets/logos/dropbox.png" width="80" height="80"></v-img>
                    </v-card-text>
                    <v-card-action class="text-center">
                        <div class="mx-auto">Dropbox</div>
                    </v-card-action>
                </v-card></v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'BackUpView',
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
    align-items: center;
    justify-content: center;
    height: 60vh;
}

.v-card {
    width: 170px;
    height: 170px;
}

.text-center {
    text-align: center;
}
</style>