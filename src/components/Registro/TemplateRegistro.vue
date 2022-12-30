<template>
    <div class="main">
        <div class="containerCard">
            <div class="containerId">
                <div class="containerInfo">
                    <p>0</p>
                </div>
            </div>

            <div class="containerTitleInfos">
                <p>Patrimonio</p>
                <p>Motorista</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default{
        name: 'TemplateRegistro'
    }
</script>

<style scoped>
    .main{
        width:calc(99vw - 15vw);
        height: 700px;
        margin: 0 10px 0 10px;
    }
    .containerCard{
        width: 100%;
        height: 90px;
        background: rgb(255, 255, 255);
        margin-top: 10px;
        display: flex;
    }
        .containerId{
            width: 90px;
            height: 90px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
            .containerInfo{
                width: 50px;
                height: 50px;
                background: #3C82F5;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 8px;
            }
            .containerInfo p{
                font-family: Abel;
                color: #fff;
                font-size: 20px;
            }
    
    .containerTitleInfos{
        width: 200px;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
    }
    .containerTitleInfos p{
        font-family: Abel;
        font-size: 20px;
    }
</style>