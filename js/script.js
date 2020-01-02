var carta = document.getElementById('carta-player');
var forbice = document.getElementById('forbice-player');
var pietra = document.getElementById('pietra-player');
var cartaCpu = document.getElementById('carta-cpu');
var forbiceCpu = document.getElementById('forbice-cpu');
var pietraCpu = document.getElementById('pietra-cpu');
var scorePlayer = 0;
var scoreCpu = 0;
var rigioca = document.getElementById('gioca')


// setto la funzione rigioca
rigioca.addEventListener("click",
function() {
  
  forbice.classList.remove("hidden","animation");
  pietra.classList.remove("hidden","animation");
  carta.classList.remove("hidden","animation")
  pietraCpu.classList.remove("hidden","animation-pc");
  forbiceCpu.classList.remove("hidden","animation-pc");
  cartaCpu.classList.remove("hidden","animation-pc");
}
)
// specifico cosa succede ogni volta che si clicca su uan scelta
carta.addEventListener("click",
function() {
  var sceltaPc =  Math.floor(Math.random() * 3 + 1);
  console.log(sceltaPc);
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
    var risultato = "vittoria Pc";
    scoreCpu++;
    document.getElementById('risultato').innerHTML= risultato;
    document.getElementById('score-cpu').innerHTML = scoreCpu;
  }
  else {
    pietraCpu.classList.add("animation-pc");
    forbiceCpu.classList.add("hidden");
    cartaCpu.classList.add("hidden");
    var risultato = "vittoria Player";
    scorePlayer ++;
    document.getElementById('risultato').innerHTML= risultato;
    document.getElementById('score-player').innerHTML = scorePlayer;
  }
  setTimeout(function(){rigioca.classList.remove("hidden"); }, 6000);
}
)
