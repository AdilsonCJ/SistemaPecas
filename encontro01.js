console.log("Bem Vindo ao Sistema de Cadastro Savinis!")
// Criação de um Sistema de Cadastro de Peças
// Se a peça possuir peso superior a 100g pode cadastrar
// Dado a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprimir uma mensagem de falta
// capacidade
// Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de Erro

// Recebe Peça (Tipo, Quantidade, Peso)
// Avaliar Informação da Peça
    // Se peso < 100 - Erro
    // Se Quantidade dessa peça > 10 - Erro de Capacidade
    // Se Tipo.caracteres < 3 - Erro
// Senão Cadastrar

let pesoPeca = 150

if (pesoPeca > 100) {
    console.log("Peso maior que 100g. Cadastro da peça aprovado")
} else {
    console.log("Peso insuficiente. Não é possível cadastrar")
}


let numeroPecas = 8
if (numeroPecas < 10) {
    console.log("Ainda há espaço na caixa para novas peças")
} else {
    console.log("Caixa Lotada. Cadastro Interrompido")
}


let nomePeca = "Disco de Freio"
if (nomePeca.length > 3){
    console.log("Nome OK! Pode prosseguir com o cadastro")
} else {
    console.log("Nome Incorreto. Favor selecionar um tipo com 4 ou mais caracteres")
}




