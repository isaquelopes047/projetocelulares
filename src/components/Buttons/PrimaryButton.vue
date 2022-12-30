<template>
    <button><a :href="link">{{titulo}}</a></button>
</template>

<script>
    export default{
        name: 'PrimaryButton',
        props: ['titulo', 'link']
    }
</script>

<style scoped> 
    button{
        width: 135px;
        height: 45px;
        left: 1207px;
        top: 149px;
        background: rgba(22, 203, 6, 0.822);
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: 0.4s;
    }
    button:hover{
        background: rgba(33, 145, 23, 0.822);
        transition: 0.4s;
    }
    a{
        font-family: 'Abel';
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 27px;
        text-align: center;
        color: #FFFFFF;
        list-style: none;
        text-decoration: none;
    }
</style>