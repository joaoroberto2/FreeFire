function filtrar( tipo ){

    $( ".bloco" ).each(function() {

        $( this ).show();
        
        if( $(this).attr('tipo') != tipo)
            $( this ).hide();
    });

}


function seleciona(elemento){

    $( ".person > img" ).each(function() {
        $( this ).css("border", "none");
    });
    elemento.style.border = "5px solid orange";
}

function person( personagem ){
    var img;
    var nome;
    var descricao;
    var habilidade;

    if(personagem == "a124"){
        nome = "A124";
        descricao = "A124 é um robô feito com a mais moderna tecnologia. "
        habilidade = "Transforma parte do EP em HP"
        img = "person/char_a124.jpg";
    }
    else if(personagem == 'hayato'){
        nome = "Hayato";
        descricao = "Hayato é um Samurai lendário. Quanto menor sua VIDA, maior será sua penetração."
        habilidade = "Quanto menor sua VIDA, maior será sua penetração da bala"
        img = "person/char_hayato.jpg";
    }
     else if(personagem == 'rafael'){
        nome = "Rafael";
        descricao = "Rafael é um perigoso mercenário."
        habilidade = "Você não será revelado no mini-mapa por 8s"
        img = "person/char_rafael.jpg"
    }
    else if(personagem == 'laura'){
        nome = "Laura";
        descricao = "Laura é uma excelente agente especial.."
        habilidade = "Precisão aumentada ao mirar"
        img = "person/char_laura.jpg";
    }
    else if(personagem == 'moco'){
        nome = "Moco";
        descricao = "Moco é uma excelente hacker."
        habilidade = "Marca os inimigos que Moco atirou por alguns segundos.."
        img = "person/char_moco.jpg";
    }
    else if(personagem == 'antonio'){
        nome = "Antonio";
        descricao = "Antonio era um órfão que cresceu para ser um gangster."
        habilidade = "Receba VIDA extra quando a rodada começar"
        img = "person/char_antonio.jpg";
    }
    else if(personagem == 'caroline'){
        nome = "Caroline";
        descricao = "A melhor amiga de Kelly. Uma das garotas mais populares da escola."
        habilidade = "Maior velocidade de movimento ao segurar uma espingarda"
        img = "person/char_caroline.jpg";
    }
    else if(personagem == 'miguel'){
        nome = "Miguel";
        descricao = "Um capitão das forças especiais, amado por seus subordinados."
        habilidade = "Miguel ganha EP por cada abate"
        img = "person/char_miguel.jpg";
    }
    else if(personagem == 'paloma'){
        nome = "Paloma";
        descricao = "Paloma é a rainha das armas do submundo."
        habilidade = "Capaz de transportar munições de AR sem ocupar espaço na mochila"
        img = "person/char_paloma.jpg";
    }
    else if(personagem == 'wukong'){
        nome = "Wukong";
        descricao = "O Rei Macaco está aqui!Camuflagem: ."
        habilidade = "Transforme-se em uma Moita"
        img = "person/char_wukong.jpg";
    }
    $(".imgGrande").css("background-image", "url(" + img + ")"); 
    $("#nome").html( nome );
    $("#descricao").html( descricao ); 
    $("#habilidade").html( habilidade );

}
 


function menu(){
    $('nav').toggle();
}