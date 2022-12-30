<template>
    <div class="containerInfos">

        <div :class="estiloInfo">
            <img :src="image" alt="">
        </div>
        <div class="iconContainer infos">
            <p>{{titulo}}</p>
            <p>0</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'InfoDash',
        props: ['estilo', 'titulo', 'image'],

        computed: {
            estiloInfo(){
                if(this.estilo == 'total') return 'iconContainer infoTotal';
                if(this.estilo == 'hoje') return 'iconContainer infoHoje';
                if(this.estilo == 'valor') return 'iconContainer infoValor';
                else return this.estilo
            }
        },
    }
</script>

<style scoped> 
    @import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');

    .containerInfos{
        width: 300px;
        height: 80px;
        background: #F5FBFF;
        margin-left: 20px;
        margin-top: 10px;
        display: flex;
        align-items: center;
    }

    /* container dos icones */
    .iconContainer{
        width: 65px;
        height: 65px;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
        .infoTotal{
            background: #9000E9;
        }
        .infoHoje{
            background: #FFB400;
        }
        .infoValor{
            background: #16B1FF;
        }

    /* Estilo dos paragrafos */
    .infos{
        width: 180px;
        height: 60px;
        font-family: 'Abel', sans-serif;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
    }
</style>