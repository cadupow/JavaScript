function pegarDisciplinas(){
    var strongs = document.querySelectorAll("strong");
    var disciplinas = [];
    for(let i = 0; i < strongs.length; i++){
        if(strongs[i].innerHTML != "+"){
            disciplinas.push(strongs[i].innerHTML);
        }
    }
    return disciplinas;
}

function pegarCodigos(){
    var divs = document.querySelectorAll(".tab-grid-content-header.tab-text");
    codigos = [];
    var cortar = 0;
    var divCortada = "";
    for(let i = 0; i < divs.length; i++){
        cortar = divs[i].innerHTML.indexOf('</strong>') + 12;
        divCortada = divs[i].innerHTML.slice(cortar, cortar + 7);
        codigos.push(divCortada);
    }
    return codigos;
}