var carta = document.getElementById('carta-player');
var forbice = document.getElementById('forbice-player');
var pietra = document.getElementById('pietra-player');
var cartaPc = document.getElementById('carta-cpu');
var forbiceCpu = document.getElementById('forbice-cpu');
var pietraCpu = document.getElementById('pietra-cpu');
var scorePlayer = document.getElementById("score-player");
var scoreCpu = document.getElementById('score-cpu');
var sceltaPc =  Math.floor(Math.random() * 3 + 1);
console.log(sceltaPc);
// specifico cosa succede ogni volta che si clicca su uan scelta
carta.addEventListener("click",
function() {
  forbice.classList.add("hidden");
  pietra.classList.add("hidden");
  carta.classList.add("animation")
  if (sceltaPc== 1) {
    pietraPc.classList.add("hidden");
    forbicePc.classList.add("hidden");
    forbicePc.classList.add("animation");
  }



}

)
