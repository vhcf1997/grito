document.getElementById("botao-grito").addEventListener("click", function () {
  const grito = document.getElementById("audio-grito");
  grito.currentTime = 0; // Volta ao início caso o grito já esteja tocando
  grito.play();
});
