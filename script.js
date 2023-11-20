let jogoDaVelha = ["","","","","","","","",""];

let jogador = `X`;

function marcar (posicao) {
    jogoDaVelha[posicao] = jogador;
    console.log(jogoDaVelha[posicao])

    if(jogador == "X"){
        jogador = "O";
    } else {
        jogador = "X"
    }
}