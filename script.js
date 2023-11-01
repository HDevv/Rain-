// on fait tomber la pluie sur tout le body du HTML
const body = document.body;

// Pluie
setInterval(rainFall, 10);

function rainFall() {
  const waterDrop = document.createElement("i");

  // Récupère l'icone (pas besoin de le mettre dans le HTML)
  waterDrop.classList.add("fas");
  waterDrop.classList.add("fa-tint");

  // On injecte le CSS via le JS
  waterDrop.style.fontSize = Math.random() * 7 + "px";
  waterDrop.style.animationDuration = Math.random() * 2 + "s";
  waterDrop.style.opacity = Math.random() + 0.3;

  // Réparti les gouttes sur la largeur
  // window.innerWidth = largeur de la window
  waterDrop.style.left = Math.random() * window.innerWidth + "px";

  // Intègre les gouttes dans la fontion
  // créer l'enfant waterDrop à la balise body (toutes les 0.001sec)
  body.appendChild(waterDrop);

  // tuer chaque élément qui a été créer (waterDrop), toutes les 6sec
  setTimeout(() => {
    waterDrop.remove();
  }, 6000);
}
