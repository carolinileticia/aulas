function exibir(){
    document.getElementById('texto').innerHTML = 'Seu mouse está sobre o texto';
}

function ocultar(){
    document.getElementById('texto').innerHTML = '';
}

// Crie uma nova seção no HTML
/*
Desenvolva um botão que ao receber um clique mude a cor de um ou mais elementos
*/
function mudaCor(){
    let cor = document.getElementById('cor').style.color;
    if(cor == ''){
        document.getElementById('cor').style.color = 'blue';

    } else{''
        document.getElementById('cor').style.color = 'black';
    } 
    
}
function ligar(){
    document.getElementById('lamp').scr = 'img/pic_bulbon.gif';
}
function desligar(){
    document.getElementById('lamp').src = 'img/pic_bulboff.gif';
}

