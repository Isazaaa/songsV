
// Seleccionar todos los elementos necesarios
const cards = document.querySelectorAll(".card");
const audioPlayer = document.getElementById("audioPlayer");

// Función para manejar el giro de la tarjeta y la reproducción de música
cards.forEach((card) => {
  const cardInner = card.querySelector(".card-inner");
  const cardBack = card.querySelector(".card-back");
  const closeBtn = cardBack.querySelector(".closeBtn");

  // Evento de clic para girar la tarjeta y reproducir/pausar la música
  card.addEventListener("click", () => {
    // Verificar si la tarjeta ya está girada
    if (cardInner.style.transform === "rotateY(180deg)") {
      // Si la tarjeta está girada, volvemos al estado original
      cardInner.style.transform = "rotateY(0deg)";
      audioPlayer.pause(); // Detener la música
      audioPlayer.currentTime = 0; // Volver al principio de la canción
    } else {
      // Si la tarjeta no está girada, girarla y reproducir la música
      cardInner.style.transform = "rotateY(180deg)"; // Girar la tarjeta
      const music = card.getAttribute("data-music");

      // Comprobar si la música es diferente para reproducirla
      if (audioPlayer.src !== music) {
        audioPlayer.src = music; // Cambiar la fuente de la música
        audioPlayer.play(); // Reproducir la música
      } else {
        // Si la música ya está sonando, pausarla
        audioPlayer.pause();
        audioPlayer.currentTime = 0; // Volver al principio de la canción
      }
    }
  });

  // Evento para cerrar la tarjeta sin hacerla girar
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Evita que el clic en el botón dispare el giro
    cardInner.style.transform = "rotateY(0deg)"; // Volver al estado original
    audioPlayer.pause(); // Detener la música
    audioPlayer.currentTime = 0; // Volver al principio de la canción
  });
});

// Opcional: Detener la música cuando termine
audioPlayer.addEventListener("ended", () => {
  audioPlayer.src = ""; // Vaciar la fuente de audio
});

