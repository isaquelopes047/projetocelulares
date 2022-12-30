<template>
  <div class="main">
    <div>
      <DashSuperior />
    </div>
    <div class="containerInferior">

      <MenuLateral :rotas="routes"/>

      <div class="containerMain">

        <router-view>
          
        </router-view>

      </div>
    </div>
  </div>
</template>

<script>
import DashSuperior from './components/DashSuperior/DashSuperior.vue'
import MenuLateral from './components/MenuLateral/MenuLateral.vue'
import { routes } from './router/index'

export default {
  data(){
    return{
      routes,
    }
  },
  components: {
    DashSuperior,
    MenuLateral
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  .main{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  .containerInferior{
    width: 100vw;
    height: 100vh;
    display: flex;
    background: #EAF2FD;
  }
  .containerMain {
    width: calc(100vw - 15vw);
    height: 100vh;
  }
</style>
