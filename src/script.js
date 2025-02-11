//Projeto Desafio do Felipão da DIO de Ranking de Heróis!
const nome = "Lovelace"; //Declaração das variáveis de nome, xp e nível
let xp = 0;
let nivel;

//Abaixo, estrutura de repetição que atendendo as devidas condições ligadas a variável xp, irá utilizar o
//valor dos rankings que estão armazenados em uma variável.
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel ="Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else if (xp >= 10001) {
    nivel = "Radiante";
}

//Console.log exibindo o nome e o nível do herói com o texto que foi pedido 
console.log(`O herói de nome ${nome} está no nível de ${nivel}!`)