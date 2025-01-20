// Seleccionar todos los elementos necesarios
const cards = document.querySelectorAll(".card");
const audioPlayer = document.getElementById("audioPlayer");

// Función para manejar el giro de la tarjeta
cards.forEach((card) => {
  const cardInner = card.querySelector(".card-inner");
  const cardBack = card.querySelector(".card-back");
  const closeBtn = cardBack.querySelector(".closeBtn"); // Cambio aquí

  // Evento de clic para girar la tarjeta
  card.addEventListener("click", () => {
    // Verificar si la tarjeta ya está girada
    if (cardInner.style.transform === "rotateY(180deg)") {
      cardInner.style.transform = "rotateY(0deg)"; // Si está girada, vuelve a su posición original
      audioPlayer.pause(); // Detener la música
      audioPlayer.currentTime = 0; // Volver al principio de la canción
    } else {
      cardInner.style.transform = "rotateY(180deg)"; // Girar la tarjeta

      // Obtener la música y letra de los atributos personalizados
      const lyric = card.getAttribute("data-lyric");
      const music = card.getAttribute("data-music");

      // Mostrar la letra en el reverso
      cardBack.querySelector("h2").textContent = lyric;

      // Reproducir la música
      audioPlayer.src = music;
      audioPlayer.play();
    }
  });

  // Evento para cerrar la tarjeta sin hacerla girar
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Evita que el clic en el botón dispare el giro
    cardInner.style.transform = "rotateY(0deg)"; // Vuelve al estado original
    audioPlayer.pause(); // Detener la música
    audioPlayer.currentTime = 0; // Volver al principio de la canción
  });
});

// Opcional: Detener la música cuando termine
audioPlayer.addEventListener("ended", () => {
  audioPlayer.src = ""; // Vacía la fuente de audio
});
