

function cifraAleatoria() {
  //  document.getElementById("botao").style.display = "none";

    var notasNaturais = ["A", "B", "C", "D", "E", "F", "G"]

    var numeroCorda = Math.floor(Math.random() * (4 - 1 + 1) + 1);

 //   var notasAleatorias = '';

    document.getElementById("divNotas").innerHTML = '';

    document.getElementById("numero-corda").innerHTML = '';

    document.getElementById("numero-corda").innerHTML += '<p>' +numeroCorda +'ª corda </p>';

    for (notasNaturais, i = notasNaturais.length; i--; ) {
         notasAleatorias = notasNaturais.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        document.getElementById("divNotas").innerHTML +=  '<span> '+notasAleatorias+' </span>';
    }
}

