

function cifraAleatoria() {
  //  document.getElementById("botao").style.display = "none";
    var dificuldade = document.getElementById("dificuldade");
    
    var dificuldadeSelecionada = dificuldade.options[dificuldade.selectedIndex].value;


    if (dificuldadeSelecionada == "naturais") {   
            var notasNaturais = ["A", "B", "C", "D", "E", "F", "G"];
}
    else  {  
            var notasNaturais = ["A","A#", "B", "C", "C#", "D","D#", "E", "F","F#", "G", "G#"];
}

    var numeroCorda = Math.floor(Math.random() * (4 - 1 + 1) + 1);

 //   var notasAleatorias = '';

    document.getElementById("divNotas").innerHTML = '';

    document.getElementById("numero-corda").innerHTML = '';

    document.getElementById("numero-corda").innerHTML += '<p id="corda">' +numeroCorda +'ª corda </p>';

    for (notasNaturais, i = notasNaturais.length; i--; ) {
         notasAleatorias = notasNaturais.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        document.getElementById("divNotas").innerHTML +=  '<span> '+notasAleatorias+' </span>';
    }
}

//---------------------------------------------------------------------------------------------


function acordeEscolhido() {


        var acorde = document.getElementById("nota-acorde").value.toUpperCase();
        console.log(acorde);

        var notasAcordes = ["A","A#", "B", "C", "C#", "D","D#", "E", "F","F#", "G", "G#",
                            "A","A#", "B", "C", "C#", "D","D#", "E", "F","F#", "G", "G#"];

        var index = notasAcordes.indexOf(acorde);
        console.log(notasAcordes[index+1]);


        document.getElementById("acorde-completo").innerHTML = '';


        document.getElementById("acorde-completo").innerHTML += '<span> '
                                                                      + notasAcordes[index] 
                                                                + ' ' + notasAcordes[index+2]
                                                                + ' ' + notasAcordes[index+4]
                                                                + ' ' + notasAcordes[index+5]
                                                                + ' ' + notasAcordes[index+7]
                                                                + ' ' + notasAcordes[index+9]
                                                                + ' ' + notasAcordes[index+11]
                                                                + ' ' + notasAcordes[index+12]
                                                                +' </span>';
                                                                 
}