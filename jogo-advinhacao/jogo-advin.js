let aleatorio = Math.floor(Math.random() * 100) + 1;
const parEscolha = document.querySelector('.parEscolha');
const parUltimo = document.querySelector('.parUltimo');
const menorMaior = document.querySelector('.menorMaior');
const escolhaEnviada = document.querySelector('.escolhaEnviada');
const escolha = document.querySelector('.escolha');
let numChutes = 1;
let resetButton;

function checkGuess() {
    const escolhido = Number(escolha.value);
    if (numChutes === 1) {
        parEscolha.textContent = 'Números anteriores: ';
    }

    parEscolha.textContent += escolhido + ' ';

    if (escolhido === aleatorio) {
        parUltimo.textContent = 'Parabéns! Você acertou!';
        parUltimo.style.backgroundColor = 'green';
        menorMaior.textContent = '';
        setGameOver();
    } else if (numChutes === 10) {
        parUltimo.textContent = '!!!GAME OVER!!!';
        menorMaior.textContent = '';
        setGameOver();
    } else {
        parUltimo.textContent = 'Errou!';
        parUltimo.style.backgroundColor = 'red';
        if (escolhido < aleatorio) {
            menorMaior.textContent = 'Chutou baixo!';
        } else if (escolhido > aleatorio) {
            menorMaior.textContent = 'Chutou alto!';
        }
    }

    numChutes++;
    escolha.value = '';
    escolha.focus();
}

escolhaEnviada.addEventListener('click', checkGuess);

function setGameOver() {
    escolha.disabled = true;
    escolhaEnviada.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Novo jogo';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    numChutes = 1;
    const resetParas = document.querySelectorAll('.avisos p');
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    escolha.disabled = false;
    escolhaEnviada.disabled = false;
    escolha.value = '';
    escolha.focus();
    parUltimo.style.backgroundColor = 'white';
    aleatorio = Math.floor(Math.random() * 100) + 1;
}