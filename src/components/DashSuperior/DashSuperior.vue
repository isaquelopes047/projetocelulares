<template>
    <div class="ContainerMain">

        <div class="containerInfos">
            <InfoDash
                v-show="InfoDash"
                estilo="total" 
                titulo="total"
                :image="require('../../assets/iconeDashUm.png')"
            />

        <InfoDash 
            v-show="InfoDash"
            estilo="hoje" 
            titulo="Quantidade de hoje"
            :image="require('../../assets/iconeDashCalendar.png')"
        />

        <InfoDash 
            v-show="InfoDash"
            estilo="valor" 
            titulo="Valores total estimado"
            :image="require('../../assets/IconeDashReal.png')"
        />
        </div>

        <div class="container">
            <button @click="hiddenMenu"> 
                <img src="../../assets/Menu.png" alt="">
            </button>
        </div>

    </div>
</template>

<script>
    import InfoDash from './ContainerInfo.vue'
    export default{
        name: 'DashSuperior',
        components: {
            InfoDash
        }, 

        methods: {
            hiddenMenu(){
                this.InfoDash == false ? this.InfoDash = true : this.InfoDash = false
            }
        },

        data(){
            return{
                InfoDash: true
            }
        }
    }
</script>

<style scoped>
    .containerInfos{
        display: flex;
    }
    .ContainerMain{
        width: 100%;
        height: 100px;
        background: #fff;
        display: flex;
        justify-content: space-between;
    }
    .container button{
        background: transparent;
        border: none;
        margin: 30px 30px 0 0;
        cursor: pointer;
    }
    .container img{
        width: 30px;
    }
</style>