console.log("Trabalhando com Condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 16;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log(`Destinos possíveis`);
console.log(listaDeDestinos);

// if( idadeComprador >= 18){
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1 );
// }else if(estaAcompanhada == true){
//     console.log("Comprador está acompanhado");
//     istaDeDestinos.splice(1,1 )
// }else{
//     console.log("Não é maior de Idade e não posso vender");
// }



if (
    idadeComprador >= 18 ||estaAcompanhada == true
    ) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(2, 1);
} else {
    console.log("Não é maior de Idade e não posso vender");
}



console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem")
}else{
    console.log("Você não pode embarcar");
} 

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);





