/*programa para calcular o valor de uma viagem
dessa vez tem mais variaveis e estruturas condicionais*/

const vrEtanol = 5.79;
const vrGasol = 6.50;
let kmMediog = 12;
let kmMedioe = 15;
let distancia = 200;
let comb = 'gasolina';
if (comb == "gasolina") {
    vrViagem = (distancia / kmMediog * vrGasol)
    console.log("Valor gasto na viagem com gasolina:", vrViagem.toFixed(2))
} else  {
    vrViagem = (distancia / kmMedioe * vrEtanol)
    console.log("Valor gasto na viagem com etanol:", vrViagem.toFixed(2))
}