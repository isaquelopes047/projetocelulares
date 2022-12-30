<template>
    <div>
        <button class="buttonModal" @click="modal">
            <img src="../../assets/Engineering.png" alt="">
        </button>

        <div class="modalOptions" v-show="modalOptions">
            <div class="headerTitle">
                <p>Preferencias</p>
            </div>


            <div class="containerInputs">
                <div class="mainInput">
                    <p>Quantidade de registro</p>
                    <select @change="onChange($event)" v-model="value">
                        <option>Selecione</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <div class="mainInput">
                    <p>Ordenar a lista</p>
                    <select>
                        <option>Selecione</option>
                        <option value="Decrecente">Decrecente</option>
                        <option value="Crecente">Crecente</option>
                    </select>
                </div>
                <div class="mainInput enviar">
                    <button @click="recarregarPagina">Salvar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'ModalOptions',
        data(){
            return{
                modalOptions: false,
                value: ''
            }
        },
        created() {
            this.adicionarValor()
        },
        methods: {
            modal(){
                this.modalOptions == false ? this.modalOptions = true : this.modalOptions = false
            },
            adicionarValor(){ 

                /* Valor inicial sera de 20 registros na lista */
                let valorInicial = 20

                localStorage.setItem('quantidadeRegistro', valorInicial)
                this.value = localStorage.getItem('quantidadeRegistro')

            },
            onChange(event) {
                localStorage.setItem('quantidadeRegistro', event.target.value)
            },
            recarregarPagina(){
                window.location.reload(true);
            }
        }
    }
</script>

<style scoped>
.buttonModal {
    margin: 0 20px 0 20px;
    width: 45px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 5px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

/* Modal de opções */
.modalOptions {
    position: absolute;
    width: 350px;
    height: 450px;
    background: rgb(255, 255, 255);
    margin: 30px 0px 0 -265px;
}

.headerTitle {
    width: 100%;
    height: 90px;
    background: #3C82F5;
    display: flex;
    justify-content: center;
    align-items: center;
}

.headerTitle p {
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 38px;
    text-align: center;
    color: #fff;
}

.containerInputs {
    width: 100%;
    height: auto;
}

.mainInput {
    width: 100%;
    height: 70px;
    background: #d9d9d938;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

.mainInput p {
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    margin-left: 15px;
}

.mainInput select {
    font-family: 'Abel';
    margin-right: 15px;
    background: #3C82F5;
    color: #fff;
    padding: 5px;
    height: 30px;
    border: none;
}

.enviar{
    background: #fff;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
}
.enviar button{
    width: 100%;
    height: 30px;
    border: none;
    background: #32A428;
    color: #fff;
    margin: 0 10px 0 10px;
    cursor: pointer;
}
</style>