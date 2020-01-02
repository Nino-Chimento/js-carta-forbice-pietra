var carta = document.getElementById('carta-player');
var forbice = document.getElementById('forbice-player');
var pietra = document.getElementById('pietra-player');
var cartaCpu = document.getElementById('carta-cpu');
var forbiceCpu = document.getElementById('forbice-cpu');
var pietraCpu = document.getElementById('pietra-cpu');
var scorePlayer = 0;
var scoreCpu = 0;
var sceltaPc =  Math.floor(Math.random() * 3 + 1);
console.log(sceltaPc);
// specifico cosa succede ogni volta che si clicca su uan scelta
carta.addEventListener("click",
function() {
  forbice.classList.add("hidden");
  pietra.classList.add("hidden");
  carta.classList.add("animation")
  if (sceltaPc == 1) {
    pietraCpu.classList.add("hidden");
    forbiceCpu.classList.add("hidden");
    cartaCpu.classList.add("animation-pc");
    var risultato = "pareggio";
    document.getElementById('risultato').innerHTML= risultato
  }
  else if (sceltaPc == 2) {
    pietraCpu.classList.add("hidden");
    forbiceCpu.classList.add("animation-pc");
    cartaCpu.classList.add("hidden");
    var risultato = "vittoriaPc";
    scoreCpu++;
    document.getElementById('risultato').innerHTML= risultato;
    document.getElementById('score-cpu').innerHTML = scoreCpu;
  }




}

)
