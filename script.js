//selecionar os elementos usando DOM
const combustivel = document.querySelector('.valor-combustivel');
const dinheiro = document.querySelector('.dinheiro');
const cLitro = document.querySelector('.conta-litro');
const cDinheiro = document.querySelector('.conta-dinheiro');
const btnAbastecer = document.querySelector('.btn-abastecer')
const btnLimpar = document.querySelector('.limpar')

//abastecer enquanto estiver apertando o botão
function encher () {
    // const valor = +dinheiro.value;
    // for (let index = 0; index < valor ; index += 0.01) {
    //     const contagem =  index.toFixed(1);
    //     cDinheiro.value = contagem;
    // }
    
    const pago = dinheiro.value;
    let i = 0;
    
    while (i < pago) {
        i = i + 0.01;
        cDinheiro.value = i.toFixed(2);
    }

    //calcular a quantidade abastecida em litro
    if(dinheiro.value === " "){
        cLitro.value = 0.00;
    }else{
        numLitros = litroAbastecido(combustivel.value, dinheiro.value);
        cLitro.value = parseFloat(numLitros.toFixed(2));
    }
        
};


//mousedown
btnAbastecer.addEventListener('click', () => {
    if(combustivel.value === "" || dinheiro.value === "" ){
        window.alert('Campos a preencher!!')
    } else {
        encher();       
    }
   
});

btnLimpar.addEventListener('click', ()=>{
    dinheiro.value = "";
    cDinheiro.value = "";
    cLitro.value = "";
})
 

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


