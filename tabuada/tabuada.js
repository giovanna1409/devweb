const escolhaEnviada = document.querySelector('.escolhaEnviada');
const escolha = document.querySelector('.escolha');
const tabuada = document.querySelector('.tabuada');

function mostrarTabuada() {
    // while (tabuada.querySelectorAll.length > 0) {
    //     tabuada.removeChild(tabuada.querySelector('p'));
    // }

    for (var i = 1; i <= 10; i++) {
        let linha = document.createElement('p');
        linha.textContent = escolha.value + ' x ' + i + ' = ' + escolha.value * i;
        tabuada.appendChild(linha)
    }
    tabuada.appendChild(document.createElement('p').textContent = 'Fim.');
}

escolhaEnviada.addEventListener('click', mostrarTabuada);