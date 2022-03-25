function jogar() {
    window.location.assign("../avatar2/av2stg1.html");
}

function responderFase1(resposta) {
    var tentativas = 2;
    for (var i = 0; i < tentativas; i++) {
        resposta = prompt("Digite a letra correspondente a sua resposta: ");
        if (resposta == null) {
            break;
        } else {
            if (resposta == "a") {
                alert(`A resposta é a letra ${resposta.toUpperCase()}. Parabéns! Será que um dia teremos uma escola Brasileira??`);
                window.location.assign("../avatar2/av2stg2.html");
                break;
            } else if (resposta == "b" || resposta == "c" || resposta == "d") {
                if (i < 1) {
                    alert(`Ah não, na letra ${resposta.toUpperCase()} tem escola que nem existe.`);
                    alert("Eu gostei de você, vai lá tenta de novo...");
                } else if (i == 1) {
                    alert(`Poxa pelo jeito você não sabe mesmo né... A letra ${resposta.toUpperCase()} tá errada!`);
                    alert("É... boa sorte encontando o caminho sozinho!")
                    window.location.assign("../html/perdeu.html");
                } else {
                    alert("Essa alternativa nem existe... Cê ta bem?!")
                    if (i == 0) {
                        i = 0;
                    } else {
                        i--;
                    }
                }
            }
        }
    }
}

function responderFase2(resposta) {
    var tentativas = 2;
    for (var i = 0; i < tentativas; i++) {
        resposta = prompt("Digite a letra correspondente a sua resposta: ");
        if (resposta == null) {
            break;
        } else {
            if (resposta == "c") {
                alert(`Cheers! a letra ${resposta.toUpperCase()} está certíssima!`);
                alert("Marcada por intensidades essa escola ama explorar o uso de lúpulos, aliás vamos pra próxima que essa conversa esta me deixando com vontade de uma Imperial IPA.")
                window.location.assign("../avatar2/av2stg3.html");
                break;
            } else if (resposta == "a" || resposta == "b" || resposta == "d") {
                if (i < 1) {
                    alert(`A letra ${resposta.toUpperCase()} tem estilos de escolas variadas`);
                    alert("C'mon try again... só porque eu sou gente boa");
                } else if (i == 1) {
                    alert(`Errou... não é a letra ${resposta.toUpperCase()}.`);
                    alert("Pra quem não sabe onde ta indo qualquer caminho serve...")
                    window.location.assign("../html/perdeu.html");
                } else {
                    alert("Essa alternativa nem existe, acho que você deve maneirar com as IPAs...")
                    if (i == 0) {
                        i = 0;
                    } else {
                        i--;
                    }
                }
            }
        }
    }
}

function responderFase3(resposta) {
    var tentativas = 2;
    for (var i = 0; i < tentativas; i++) {
        resposta = prompt("Digite a letra correspondente a sua resposta: ");
        if (resposta == null) {
            break;
        } else {
            if (resposta == "b") {
                alert(`Já viajou pra Alemanha é?! é a letra${resposta.toUpperCase()}!`);
                alert("Quando falamos em Alemanha falamos em tradição! Viva a Reinheitsgebot ")
                window.location.assign("../avatar2/av2stg4.html");
                break;
            } else if (resposta == "a" || resposta == "c" || resposta == "d") {
                if (i < 1) {
                    alert(`A letra ${resposta.toUpperCase()} não é a certa`);
                    alert("Mais uma chance heim?!");
                } else if (i == 1) {
                    alert(`Gastou tua ultima chance não é a letra ${resposta.toUpperCase()}! `);
                    alert("De fato é uma escola difícil, mais sorte da próxima vez...")
                    window.location.assign("../html/perdeu.html");
                } else {
                    alert("Essa alternativa nem existe... tenta a,b,c ou d...")
                    if (i == 0) {
                        i = 0;
                    } else {
                        i--;
                    }
                }
            }
        }
    }
}

function responderFase4(resposta) {
    var tentativas = 2;
    for (var i = 0; i < tentativas; i++) {
        resposta = prompt("Digite a letra correspondente a sua resposta: ");
        if (resposta == null) {
            break;
        } else {
            if (resposta == "d") {
                alert(`proost. ${resposta.toUpperCase()} está certíssima!`);
                alert("Os belgas adoram umas cervejas diferentonas, eu, particularmente, amo uma witbier no verão...")
                window.location.assign("../avatar1/av2stg5.html");
                break;
            } else if (resposta == "b" || resposta == "c" || resposta == "a") {
                if (i < 1) {
                    alert(`Seu chute na letra ${resposta.toUpperCase()} não deu certo...`);
                    alert("Não ta tão dificil assim vai... tenta mais uma vez");
                } else if (i == 1) {
                    alert(`Boa tentativa, mas não é a letra ${resposta.toUpperCase()}.`);
                    alert("Você não faz boas escolhas, provavelmente por isso se perdeu e vai continuar perdido...")
                    window.location.assign("../html/perdeu.html");
                } else {
                    alert("Essa alternativa nem existe. Presta atenção e coloca outra...")
                    if (i == 0) {
                        i = 0;
                    } else {
                        i--;
                    }
                }
            }
        }
    }
}

function responderFase5(resposta) {
    var tentativas = 2;
    for (var i = 0; i < tentativas; i++) {
        resposta = prompt("Digite a letra correspondente a sua resposta: ");
        if (resposta == null) {
            break;
        } else {
            if (resposta == "b") {
                alert(`Sláinte é a letra ${resposta.toUpperCase()}!`);
                alert("Escola inglesa engloba também a Escócia e a Irlanda podendo ser denominada britânica.")
                alert(`Siga na direção oeste, lá você encontrará uma ótima taverna com cervejas de todas as escolas!`)
                window.location.assign("../html/ganhou.html");
                break;
            } else if (resposta == "a" || resposta == "c" || resposta == "d") {
                if (i < 1) {
                    alert(`Ih, tem estilos de outras escolas na letra ${resposta.toUpperCase()}.`);
                    alert("Como é a ultima escola não posso deixar de te dar outra chance...");
                } else if (i == 1) {
                    alert(`Você tava mandando muito bem! Mas a resposta não é a letra ${resposta.toUpperCase()}.`);
                    alert("Por pouco você não venceu minha trivia. Faça melhores escolhas na próxima, boa sorte no seu caminho.")
                    window.location.assign("../html/perdeu.html");
                } else{
                    alert("Essa alternativa nem existe... Três escolas foi demais?!")
                if (i == 0) {
                    i = 0;
                } else {
                    i--;
                }
            }
        }
    }
}
}