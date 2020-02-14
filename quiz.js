

function cifraAleatoria() {
  //  document.getElementById("botao").style.display = "none";

    var notasNaturais = ["A", "B", "C", "D", "E", "F", "G"]

    var notasAleatorias = '';

    document.getElementById("divNotas").innerHTML = '';

    for (notasNaturais, i = notasNaturais.length; i--; ) {
         notasAleatorias = notasNaturais.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        document.getElementById("divNotas").innerHTML +=  '<span> '+notasAleatorias+' </span>';
    }
}

