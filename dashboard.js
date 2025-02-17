// Modo Oscuro
const toggleDarkModeButton = document.getElementById("toggleDarkMode");
const body = document.body;
const sunIcon = '<i class="ri-sun-line"></i>';
const moonIcon = '<i class="ri-moon-line"></i>';

// Comprobar el estado guardado del modo oscuro en el localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  toggleDarkModeButton.innerHTML = moonIcon;
}

toggleDarkModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Guardar el estado del modo oscuro en el localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    toggleDarkModeButton.innerHTML = moonIcon;
  } else {
    localStorage.setItem("darkMode", "disabled");
    toggleDarkModeButton.innerHTML = sunIcon;
  }
});

// Cerrar Sesión con confirmación
document.getElementById("logoutButton").addEventListener("click", () => {
  const confirmation = confirm("¿Estás seguro de que quieres cerrar sesión?");
  if (confirmation) {
    window.location.href = "index.html";
  }
});

// Navegación entre secciones
const links = document.querySelectorAll(".sidebar nav ul li a");
const sections = document.querySelectorAll(".content-section");

links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
  
      // Oculta todas las secciones
      sections.forEach((section) => {
        section.classList.remove("active");
      });
  
      // Muestra la sección seleccionada
      document.getElementById(targetId).classList.add("active");
  
      // Agrega o remueve la clase "music-active" según la sección
      if (targetId === "musicas") {
        body.classList.add("music-active");
      } else {
        body.classList.remove("music-active");
      }
  
      // Marca el enlace como activo
      links.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

// Mostrar/Ocultar Sidebar
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

window.addEventListener("load", () => {
  // Establecer la fecha de aniversario (22 de noviembre de 2024)
  const anniversary = new Date("2024-11-22T00:00:00");

  // Función que actualiza el contador de tiempo transcurrido
  function updateTimeElapsed() {
    const now = new Date();
    let years = now.getFullYear() - anniversary.getFullYear();
    let months = now.getMonth() - anniversary.getMonth();
    let days = now.getDate() - anniversary.getDate();

    // Ajuste de días si el día actual es menor que el día del aniversario
    if (days < 0) {
      months--;
      // Obtenemos el número de días del mes anterior
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += lastMonth.getDate();
    }

    // Ajuste de meses si el mes actual es menor que el del aniversario
    if (months < 0) {
      years--;
      months += 12;
    }

    let output = "";

    // Si ha pasado al menos un año, se muestran años, meses y días
    if (years > 0) {
      output = `Han pasado ${years} ${years === 1 ? "año" : "años"}, ${months} ${months === 1 ? "mes" : "meses"} y ${days} ${days === 1 ? "día" : "días"} desde el 22 de noviembre de 2024.`;
    } else {
      // Si aún no ha pasado un año, se muestran solo meses y días
      output = `Han pasado ${months} ${months === 1 ? "mes" : "meses"} y ${days} ${days === 1 ? "día" : "días"} desde que nos conocimos.`;
    }

    // Actualizamos el elemento en el DOM
    document.getElementById("daysCount").innerText = output;
  }

  // Llamada inicial para mostrar el contador al cargar la página
  updateTimeElapsed();

  // Actualizar el contador cada segundo para mantenerlo en tiempo real
  setInterval(updateTimeElapsed, 1000);
});


particlesJS("particles-js", {
  particles: {
    number: {
      value: 10, // Número de partículas (corazones)
      density: {
        enable: true,
        value_area: 800,
      },
    },
    shape: {
      type: "image",
      image: {
        src: "https://img.icons8.com/?size=100&id=12306&format=png&color=000000", // Aquí puedes usar cualquier imagen de corazón
        width: 2,
        height: 2,
      },
    },
    move: {
      enable: true,
      speed: 1, // Velocidad de caída
      direction: "top", // Dirección hacia abajo
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
    },
  },
  retina_detect: true,
});

const mensajes = [
  "awo",
  "fo",
  "eso es todo",
  "tome agua",
  "hola",
  "cabezona", 
  "besos",
  "te quiero", 
  "bebesauria",
  "boff",
  "linda",
  
 /*    "Eres mi razón de sonreír cada día. 💖",
    "Contigo, cada momento es especial. 🌟",
    "Tu amor es mi mayor tesoro. 🏆",
    "Eres mi hoy, mi mañana y mi siempre. 🌹",
    "Gracias por hacerme tan feliz. 😊",
    "Eres la mejor parte de mi día. ☀️",
    "Mi corazón late por ti. 💓", */
];

const mensajeTexto = document.getElementById("mensaje-texto");
const nuevoMensajeBtn = document.getElementById("nuevo-mensaje-btn");

function mostrarMensajeAleatorio() {
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    mensajeTexto.textContent = mensajeAleatorio;
}

// Mostrar un mensaje aleatorio al cargar la página
mostrarMensajeAleatorio();

// Cambiar mensaje al hacer clic en el botón
nuevoMensajeBtn.addEventListener("click", mostrarMensajeAleatorio);

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const volumeControl = document.getElementById('volumeControl');

    playBtn.addEventListener('click', function() {
        audio.play();
    });

    pauseBtn.addEventListener('click', function() {
        audio.pause();
    });

    volumeControl.addEventListener('input', function() {
        audio.volume = volumeControl.value;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const playlistItems = document.querySelectorAll('.playlist ul li');

    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            const src = this.getAttribute('data-src');
            audioPlayer.src = src;
            audioPlayer.play();
        });
    });
});

// JavaScript para mostrar la sorpresa
document.getElementById('sorpresa-btn').addEventListener('click', function() {
    const contenido = document.getElementById('sorpresa-content');
    contenido.classList.toggle('hidden'); // Muestra u oculta la sorpresa
});


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





