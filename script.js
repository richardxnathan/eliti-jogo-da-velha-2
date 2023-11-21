let jogoDaVelha = ["", "", "", "", "", "", "", "", ""];

let jogador = `X`;

function marcar(posicao) {
    if (jogoDaVelha[posicao] == "") {
        jogoDaVelha[posicao] = jogador;
        console.log(jogoDaVelha[posicao])

        if (jogador == "X") {
            jogador = "O";
        } else {
            jogador = "X"
        }
    } else {
        alert("Jogou no lugar errado champs.")
    }

    render();
}

function render() {
    let tds = document.querySelectorAll("td");
    let index = 0;

    while (index < 9) {
        tds[index].innerHTML = jogoDaVelha[index];
        index++;
    }
}