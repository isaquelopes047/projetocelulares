<template>
    <div>
        <HeaderPages title="Registros de Manutenções">
            <div class="containerButtons">
                <PrimaryButton 
                    titulo="+ Adicionar"
                    link="/criarregistro"
                />
                <ModalOptions />
            </div>  
        </HeaderPages>

        <TemplateRegistro />
    </div>
</template>

<script>
    import HeaderPages from '../components/HeaderTitles/HeaderPages.vue'
    import PrimaryButton from '../components/Buttons/PrimaryButton.vue'
    import ModalOptions from '../components/HeaderTitles/ModalOptions.vue'
    import TemplateRegistro from '../components/Registro/TemplateRegistro.vue'

    export default{
        data(){
            return{
                modalOptions: true
            }
        },
        components: {
            HeaderPages,
            PrimaryButton,
            ModalOptions,
            TemplateRegistro
        },
    }
</script>

<style scoped>
    .containerButtons{
        width: 50%;
        height: 90px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
</style>