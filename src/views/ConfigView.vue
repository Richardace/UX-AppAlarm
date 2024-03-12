<template>
    <v-container>
        <v-form width="400">
            <v-select v-model="day" :items="startWeek" label="Comenzar Semana:" required></v-select>
            <v-select v-model="tone" :items="alarmTones" label="Tono por defecto:" required></v-select>
            <v-radio-group v-model="vibration" row label="Activar Vibración">
                <v-radio label="Sí" value="1"></v-radio>
                <v-radio label="No" value="0"></v-radio>
            </v-radio-group>
            <v-radio-group v-model="increaseVolume" row label="Subir el volumen gradualmente">
                <v-radio label="Sí" value="1"></v-radio>
                <v-radio label="No" value="0"></v-radio>
            </v-radio-group>
            <v-radio-group v-model="theme" row label="Estilo Aplicación">
                <v-radio label="Claro" value="1"></v-radio>
                <v-radio label="Oscuro" value="0"></v-radio>
            </v-radio-group>
            <v-slider v-model="volume" prepend-icon="mdi-volume-low" append-icon="mdi-volume-high"></v-slider>
            <v-container>
                <v-row>
                    <v-col cols="6">
                        <v-btn color="error" class="mr-4" outlined block @click="resetValidation">
                            Reestablecer Valores
                        </v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-btn color="primary"  block @click="saveConfig">
                            Guardar
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
        <v-dialog max-width="400" v-model="modal">
            <v-card class="pa-3">
                <v-card-title>
                    <span class="text-h5">Confirmación</span>
                </v-card-title>
                <v-card-text>
                    <span>¡ Configuración Actualizada exitosamente !</span>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="modal = false;" color="primary" dark block rounded>
                        Aceptar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-alert v-if="error" type="error">Error: Valida que todos los campos estén llenos.</v-alert>

    </v-container>

</template>

<script>

export default {
    name: 'ConfigView',
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
.v-toolbar__title {
    font-size: 2.8rem;
    font-weight: bold;
}

.centered-text {
    text-align: center;
}

.active {
    border-bottom: 3px solid #2196F3;
}
.container{
    max-width: 500px;
}
</style>