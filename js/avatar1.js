function jogar(){
    window.location.assign("../avatar1/av1stg1.html");
  
}


function responderFase1(resposta){
    var tentativas = 3;
    for(var i=0; i< tentativas; i++){
     resposta= prompt("Digite a letra correspondente a sua resposta: ");
        if(resposta=="c"){
            alert(`${resposta.toUpperCase()} é a resposta certa! É bom encontrar alguém tão entusiasmado quanto eu, vamos para próxima?`);
            window.location.assign("../avatar1/av1stg2.html");
            break;
        }else if(i<2){
            alert(`Errou, todos os ingredientes da lista da letra ${resposta.toUpperCase()} podem ser adicionados em cervejas`);
            alert("Te dou mais uma chance vai...");            
        }else{
            alert(`Errou, todos os ingredientes da lista da letra ${resposta.toUpperCase()} podem ser adicionados em cervejas`);
        }
        if(i==2){
            alert("Nada de mapa pra você, vá estudar mais e volte quando estiver preparado!")
            window.location.assign("../html/perdeu.html");
        }
    }

}
function responderFase2(resposta){
        var tentativas = 2;
        for(var i=0; i< tentativas; i++){        
        var resposta= prompt("Digite a letra correspondente a sua resposta: ");
            if(resposta=="a"){
                alert(`A letra ${resposta.toUpperCase()} é a resposta certa! De fato você sabe bastante heim?!`);
                window.location.assign("../avatar1/av1stg3.html");
                break;
            }else if(i<1){
                alert(`A letra ${resposta.toUpperCase()} não é a resposta certa, as definições estão invertidas`);
                alert("Tenta de novo... só porque eu sou gente boa");        
            }else{
                alert(`A letra ${resposta.toUpperCase()} não é a resposta certa, as definições estão invertidas`);
            }
        if(i==1){
            alert("Agora já chega, você entende de cervejas o mesmo tanto que entende de direções!")
            window.location.assign("../html/perdeu.html");
        }
}
}
function responderFase3(resposta){
    var tentativas = 3;
    for(var i=0; i< tentativas; i++){        
    var resposta= prompt("Digite a letra correspondente a sua resposta: ");
        if(resposta=="b"){
            alert(`UAU acertou!!!! É a letra ${resposta.toUpperCase()}! Acho que posso te apontar o caminho...`);
            alert(`Siga na direção oeste, lá você encontrará uma ótima taverna com cervejas incríveis!`)
            window.location.assign("../html/ganhou.html");
            break;
        }else if(i<2){
            alert(`Infelizmente você errou, a letra ${resposta.toUpperCase()} contém processos que não são de cerverjarias!`);
            alert("Tenta de novo... só porque eu sou gente boa");        
        }else{
            alert(`Infelizmente você errou, a letra ${resposta.toUpperCase()} contém processos que não são de cerverjarias!`);       }
    if(i==2){
        alert("Parece que você não sabe tanto quanto diz saber heim! Pois continue perdido!")
        window.location.assign("../html/perdeu.html");
    }
}
}
