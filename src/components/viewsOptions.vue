<template>
    <div>
        <v-container fluid class="big-devices pa-0" v-if="isLogged">
            <v-btn-toggle color="primary" group >
                <v-btn class="button-view" :class="{ 'v-btn--active': statisticsView }" value="Estadísticas" @click="goToStatistics">
                    Estadísticas
                </v-btn>

                <v-btn class="button-view" :class="{ 'v-btn--active': configView }" value="Configuración" @click="goToConfig">
                    Configuración
                </v-btn>

                <v-btn class="button-view" :class="{ 'v-btn--active': backUpView }" value="BackUp" @click="goToBackUp">
                    BackUp
                </v-btn>

                <v-btn class="button-view" :class="{ 'v-btn--active': syncView }" value="Sincronización" @click="goToSync">
                    Sincronización
                </v-btn>
            </v-btn-toggle>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'TopBar',
    data: () => ({
        isLogged: false,
        allowedViews: ['HomeView', 'ConfigView', 'StatisticsView', 'SyncView', 'BackUpView'],
        statisticsView: false,
        configView: false,
        backUpView: false,
        syncView: false,
    }),
    created() {
        if (this.allowedViews.includes(this.$route.name)) {
            this.isLogged = true;
        }
        if (this.$route.name === 'StatisticsView') {
            this.statisticsView = true;
            this.configView = false;
            this.backUpView = false;
            this.syncView = false;
        } else if (this.$route.name === 'ConfigView') {
            this.configView = true;
            this.statisticsView = false;
            this.backUpView = false;
            this.syncView = false;
        } else if (this.$route.name === 'BackUpView') {
            this.backUpView = true;
            this.statisticsView = false;
            this.configView = false;
            this.syncView = false;
        } else if (this.$route.name === 'SyncView') {
            this.syncView = true;
            this.statisticsView = false;
            this.configView = false;
            this.backUpView = false;
        }
    },
    watch: {
        $route(to) {
            if (this.allowedViews.includes(to.name)) {
                this.isLogged = true;
            } else {
                this.isLogged = false;
            }
            if (to.name === 'StatisticsView') {
                this.statisticsView = true;
                this.configView = false;
                this.backUpView = false;
                this.syncView = false;
            } else if (to.name === 'ConfigView') {
                this.configView = true;
                this.statisticsView = false;
                this.backUpView = false;
                this.syncView = false;
            } else if (to.name === 'BackUpView') {
                this.backUpView = true;
                this.statisticsView = false;
                this.configView = false;
                this.syncView = false;
            } else if (to.name === 'SyncView') {
                this.syncView = true;
                this.statisticsView = false;
                this.configView = false;
                this.backUpView = false;
            }
        },
    },
    methods: {
        goToStatistics() {
            if (this.$route.name !== 'StatisticsView'){
                this.$router.push({ name: 'StatisticsView' });
            }
        },
        goToConfig() {
            if (this.$route.name !== 'ConfigView'){
                this.$router.push({ name: 'ConfigView' });
            }
        },
        goToBackUp() {
            if (this.$route.name !== 'BackUpView'){
                this.$router.push({ name: 'BackUpView' });
            }
        },
        goToSync() {
            if (this.$route.name !== 'SyncView'){
                this.$router.push({ name: 'SyncView' });
            }
        },
    },

}
</script>
<style>
.button-view {
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0.5rem;
    border-radius: 0.5rem;
    max-width: 300px;
    margin: 0px !important;
    border: 1px solid #D9D9D9 !important;
}
.v-item-active {
    background-color: #3F51B5 !important;
  
}



</style>
