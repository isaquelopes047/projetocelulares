<template>
    <div class="containerMenuLateral">
        
            <li v-for="rota in rotas" :key="rota.id">
                <router-link :to="rota.path ? rota.path : '/'">

                    <img :src="require(`../../assets/${rota.img}`)" alt="">
                    <p>{{rota.titulo}}</p>
                        
                </router-link>
            </li>
        
    </div>
</template>

<script>
    export default {
        name: 'MenuLateral',
        props: ['rotas'],
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
    .containerMenuLateral {width: 15vw;height: 99vh;background: #fff;margin-top: 10px;}
    a{color: rgb(65, 65, 65);text-decoration: none;font-size: 23px;display: flex;justify-content: flex-start;align-items: center;width: 100%;height: 70px;}
    a:hover{background: rgba(23, 105, 199, 0.082);}
    li{text-decoration: none;list-style: none;font-family: 'Abel', sans-serif;width: 100%;height: 70px}
    img{margin-left: 30px;}
    p{margin-left: 10px;}
</style>