//selecionar os elementos usando DOM
const combustivel = document.querySelector('.valor-combustivel');
const dinheiro = document.querySelector('.dinheiro');
const cLitro = document.querySelector('.conta-litro');
const cDinheiro = document.querySelector('.conta-dinheiro');
const btnAbastecer = document.querySelector('.btn-abastecer')

//abastecer enquanto estiver apertando o botão
function encher (){
    const valor = +dinheiro.value;
    for (let index = 0; index <= valor; index = index + 0.1) {
        const contagem =  index.toFixed(2);
        cDinheiro.value = contagem;
    }
}

btnAbastecer.addEventListener('mousedown', () => {
    encher();
});


// algoritmo

// incrementar valor ao iniciar
// 1- saber o quanto em dinheiro foi pago;
// 2- saber o preço de cada litro
// 3- converter o valor de dinheiro para litro
// 4- ao abastecer o contador deve mostrar a quantidade em dinheiro e em litro abastecido a cada momento;
// 5- parar de abastecer quando o valor abastecido for igual ao valor pago.

// funções
    // converter o valor em real para centavos
function converterReal(valorReal){  
    const calculo = valorReal * 100;
    return calculo
}

    // descobrindo o valor do ML
function precoML(valorLitro){
    const valorCentavos = converterReal(valorLitro)
    const calculo = 1000 / valorCentavos;
    return calculo.toFixed(2);
}

function litroAbastecido(valorDoLitro, valorPago){
    const valorPagoCentavos = converterReal(valorPago);
    const calculo = (precoML(valorDoLitro) * valorPagoCentavos) /1000;
    return calculo;
}





// passo a passo
// 1-descobrir quanto vale 1ml de combustível 
// 1.1 - converter o real para centavos valorReal * 100 = numCentavos;
// 1.2 - 1000 / numCentavos para descobrir o valor de 1ml

// 2- descobrir quantos litros seram abastecido
// 2.1 - valorPago * 100; descobre valorPagoCentavos;
// 2.2 - valorML * valorPagoCentavos = totalCombustivelAbastecido;




