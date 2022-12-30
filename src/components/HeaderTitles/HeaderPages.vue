<template>
    <div>
        <div class="containerTitle">
            <div class="containerTitulo">
                <p>{{title}}</p>
            </div>
            <slot>
                
            </slot>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'HeaderPages',
        props: ['title']
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');

    .containerTitle{
        width: calc(99vw - 15vw);
        height: 90px;
        background: #3C82F5;
        margin:10px 10px 0 10px;
        display: flex;
    }
    .containerTitulo{
        width: 50%;
        height: 90px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    p{
        font-family: 'Abel', sans-serif;
        margin: 0 0 0 20px;
        font-size: 30px;
        color: #fff;
    }
</style>