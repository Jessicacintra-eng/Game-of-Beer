function jogar() {
    window.location.assign("../avatar1/av1stg1.html");

}

function responderFase1(resposta) {
    var tentativas = 2;
    for (var i = 0; i < tentativas; i++) {
        resposta = prompt("Digite a letra correspondente a sua resposta: ");
        resposta  = resposta.toLowerCase();
        if (resposta == null) {
            break;
        } else {
            if (resposta == "c") {
                alert(`${resposta.toUpperCase()} é a resposta certa! É bom encontrar alguém tão entusiasmado quanto eu, vamos para próxima?`);
                window.location.assign("../avatar1/av1stg2.html");
                break;
            } else if (resposta == "b" || resposta == "a" || resposta == "d") {
                if (i < 1) {
                    alert(`Errou, todos os ingredientes da lista da letra ${resposta.toUpperCase()} podem ser adicionados em cervejas`);
                    alert("Te dou mais uma chance vai...");
                } else if (i == 1) {
                    alert(`Errou, todos os ingredientes da lista da letra ${resposta.toUpperCase()} podem ser adicionados em cervejas`);
                    alert("Nada de mapa pra você, vá estudar mais e volte quando estiver preparado!")
                    window.location.assign("../html/perdeu.html");
                } else {
                    alert("Essa alternativa nem existe...")
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
        resposta  = resposta.toLowerCase();
        if (resposta == null) {
            break;
        } else {
            if (resposta == "a") {
                alert(`A letra ${resposta.toUpperCase()} é a resposta certa! De fato você sabe bastante heim?!`);
                window.location.assign("../avatar1/av1stg3.html");
                break;
            } else if (resposta == "b") {
                if (i < 1) {
                    alert(`A letra ${resposta.toUpperCase()} não é a resposta certa, as definições estão invertidas`);
                    alert("Acerta agora que só sobrou uma alternativa");
                } else if (i == 1) {
                    alert(`A letra ${resposta.toUpperCase()} não é a resposta certa, as definições estão invertidas`);
                    alert("Agora já chega, você entende de fermentação o mesmo tanto que entende de direções!")
                    window.location.assign("../html/perdeu.html");
                } else {
                    alert("Essa alternativa nem existe... Ale e Lager tá muito avancado pra você?")
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
        resposta  = resposta.toLowerCase();
        if (resposta == null) {
            break;
        } else {
            if (resposta == "b") {
                alert(`UAU acertou!!!! É a letra ${resposta.toUpperCase()}! Acho que posso te apontar o caminho...`);
                alert(`Siga na direção oeste, lá você encontrará uma ótima taverna com cervejas incríveis!`)
                window.location.assign("../html/ganhou.html");
                break;
            } else if (resposta == "a" || resposta == "c" || resposta == "d") {
                if (i < 1) {
                    alert(`Infelizmente você errou, a letra ${resposta.toUpperCase()} contém processos que não são de cerverjarias!`);
                    alert("Mais uma chance...");
                } else if (i == 1) {
                    alert(`Talvez fazer cerveja não seja sua praia a letra ${resposta.toUpperCase()} ta errada!`);
                    alert("Parece que você não sabe tanto quanto diz saber heim! Pois continue perdido!")
                    window.location.assign("../html/perdeu.html");
                } else {
                    alert("Essa alternativa nem existe...")
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