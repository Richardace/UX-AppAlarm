<template>
  <div>
    <v-container class="centered-text">
      <v-row justify="start">
      <v-col cols="1" class="px-0">Día</v-col>
      <v-col cols="1" class="px-0 active" >Semana</v-col>
      <v-col cols="1" class="px-0">Mes</v-col>
      <v-col cols="1" class="px-0">Año</v-col>
    </v-row> 
    </v-container>
    <v-container>
     
    <v-row class="mb-12" align="center">
      <v-col cols="5">
        <Pie id="statistics" :options="chartOptions" :data="chartData" :legend="{ position: 'right' }" />
      </v-col>
      <v-col>
        <v-row>
          <v-col cols="1" class="px-0">
            <v-icon color="#7921f3">mdi-square</v-icon>
          </v-col>
          <v-col cols="11" class="px-0">Atendidos</v-col>
        </v-row>
        <v-row>
          <v-col cols="1" class="px-0">
            <v-icon color="#f39821">mdi-square</v-icon>
          </v-col>
          <v-col cols="11" class="px-0">En espera</v-col>
        </v-row>
        <v-row>
          <v-col cols="1" class="px-0">
            <v-icon color="#21d0f3">mdi-square</v-icon>
          </v-col>
          <v-col cols="11" class="px-0">Retrasados</v-col>
        </v-row>

      </v-col>

    </v-row>
    <v-row class="mt-12">
      <span>
        * Hace referencia al retraso promedio para atender un evento
      </span>
    </v-row>
  </v-container>
  </div>
  
</template>

<script>
import { Pie } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'StatisticsView',
  components: {
    Pie
  },
  props: {
    chartId: {
      type: String,
      default: 'pie-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => { }
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartData: {
        datasets: [
          {
            backgroundColor: ['#7921f3', '#f39821', '#21d0f3'],
            data: [80, 20, 30]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      }
    }
  }
}
</script>
<style scoped>
.v-toolbar__title {
  font-size: 2.8rem;
  font-weight: bold;
}
.centered-text{
  text-align: center;
}
.active{
  border-bottom: 3px solid #2196F3;
}

</style>