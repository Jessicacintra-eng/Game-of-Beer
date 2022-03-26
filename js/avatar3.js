function jogar(){
    window.location.assign("../avatar3/av3stg1.html");
  
}
function responderFase1(resposta) {
    var tentativas = 2;
    for (var i = 0; i < tentativas; i++) {
        resposta = prompt("Digite a letra correspondente a sua resposta: ");
        resposta  = resposta.toLowerCase();
        if (resposta == null) {
            break;
        } else {
            if (resposta == "a") {
                alert(`A resposta é a letra ${resposta.toUpperCase()}. Parabéns! Será que um dia teremos uma escola Brasileira??`);
                alert("Ao analisar a história da cerveja, percebemos que ela é tão antiga quanto à própria história");
                window.location.assign("../avatar3/av3stg2.html");
                break;
            } else if (resposta == "b" || resposta == "c" || resposta == "d") {
                if (i < 1) {
                    alert(`Você está perdido no espaço temporal não é a letra ${resposta.toUpperCase()}.`);
                    alert("Eu não quero ter que encerrar agora. Vai lá tenta de novo...");
                } else if (i == 1) {
                    alert(`Pelo jeito você não sabe nem que dia é hoje... A letra ${resposta.toUpperCase()} tá errada!`);
                    alert("Não passou nem do primeiro desafio, não vai conseguir achar seu caminho sozinho... desejo sorte.")
                    window.location.assign("../html/perdeu.html");
                } else {
                    alert("Essa alternativa nem existe... História te deixou confuso?")
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
            if (resposta == "d") {
                alert(`Acertou é a letra ${resposta.toUpperCase()}. Como você sabe tanto de deusas?`);
                alert("Uma famosa tabuinha cuneiforme de 4000 anos atrás tem um poema chamado Hino a Ninkasi, um hino de louvor à deusa suméria da cerveja.");
                window.location.assign("../avatar3/av3stg3.html");
                break;
            } else if (resposta == "a" || resposta == "b" || resposta == "c") {
                if (i < 1) {
                    alert(`A letra ${resposta.toUpperCase()} fala de outra deusa.`);
                    alert("Pode tentar outra vez.");
                } else if (i == 1) {
                    alert(`Errou... não é a letra ${resposta.toUpperCase()}.`);
                    alert("Pra quem não sabe onde ta indo qualquer caminho serve...")
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

function responderFase3(resposta) {
    var tentativas = 2;
    for (var i = 0; i < tentativas; i++) {
        resposta = prompt("Digite a letra correspondente a sua resposta: ");
        resposta  = resposta.toLowerCase();
        if (resposta == null) {
            break;
        } else {
            if (resposta == "b") {
                alert(`Respeito quem entende de leis a resposta é a letra ${resposta.toUpperCase()}!`);
                alert("O código de Hamurabi estabelecia a porção diária de cerveja de 2L/dia para trabalhadores, 3L/dia para funcionários públicos, administradores e sacerdotes tinham direito a 5L/dia. ")
                window.location.assign("../avatar3/av3stg4.html");
                break;
            } else if (resposta == "a" || resposta == "c" || resposta == "d") {
                if (i < 1) {
                    alert(`A letra ${resposta.toUpperCase()} não é a certa`);
                    alert("Legislação não é pra todos... tenta outra vez...");
                } else if (i == 1) {
                    alert(`Gastou tua ultima chance não é a letra ${resposta.toUpperCase()}! `);
                    alert("Saiba que na legislação mais antiga servir má cerveja tinha castigo de morte por afogamento?!")
                    window.location.assign("../html/perdeu.html");
                } else {
                    alert("Essa alternativa nem existe... tente a,b,c ou d...")
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
        resposta  = resposta.toLowerCase();
        if (resposta == null) {
            break;
        } else {
            if (resposta == "d") {
                alert(`Tem gente que sabe chutar as respostas, a letra ${resposta.toUpperCase()} está correta!`);
                alert("As cervejas na antiguidade eram de cores ambares e mais escuras, além de conter uma grande mistura de ingredientes. Nessa época não se conhecia o lúpulo.")
                window.location.assign("../avatar3/av3stg5.html");
                break;
            } else if (resposta == "b" || resposta == "c" || resposta == "a") {
                if (i < 1) {
                    alert(`Seu chute na letra ${resposta.toUpperCase()} não deu certo...`);
                    alert("Não ta tão dificil assim vai... tenta mais uma vez");
                } else if (i == 1) {
                    alert(`Acho que você não sabe a resposta... não é a letra ${resposta.toUpperCase()}.`);
                    alert("Você não faz boas escolhas, provavelmente por isso se perdeu e vai continuar perdido...")
                    window.location.assign("../html/perdeu.html");
                } else {
                    alert("Essa alternativa nem existe. Eu estou sendo pouco claro?")
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
        resposta  = resposta.toLowerCase();
        if (resposta == null) {
            break;
        } else {
            if (resposta == "b") {
                alert(`Pura sorte eu diria, mas você acertou é a letra ${resposta.toUpperCase()}!`);
                alert("Curiosidade: segundo as regras monásticas  cada monge teria direito a um 'pint' (568 mL) de cerveja ou meio 'pint' de vinho por dia.");
                alert(`Siga na direção oeste, lá você encontrará uma ótima taverna com livros e mais livros sobre cerveja!`)
                window.location.assign("../html/ganhou.html");
                break;
            } else if (resposta == "a" || resposta == "c" || resposta == "d") {
                if (i < 1) {
                    alert(`Chegou até aqui e errou... a letra ${resposta.toUpperCase()} não é a resposta.`);
                    alert("Acho justo te dar outra chance...");
                } else if (i == 1) {
                    alert(`Parece que seus conhecimentos chegram num limite, a resposta não é a letra ${resposta.toUpperCase()}.`);
                    alert("Confesso que fiquei impressionado. Estude um pouco mais sobre a história da cerveja na Antiguidade e tente outra vez.")
                    window.location.assign("../html/perdeu.html");
                } else{
                    alert("Essa alternativa nem existe... PRESTE ATENÇÃO!!")
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