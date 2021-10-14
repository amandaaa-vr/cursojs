console.log("Trabalhando com listas");

//crtl+K+C comenta tudo                crtl+K+U descomenta
// shift+ alt+f formata
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro =`Rio de Janeiro`;


const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);

listaDeDestinos.push(`Curitiba`) //adcionando um item na lista

console.log(`Destinos possíveis`);
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1 )// como tirar um arquivo da lista (a partir de, ate)
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);// mostrar arquivo que eu quero, posição na lista 



