const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

let nom1 = prompt("Entrez votre nom");
let FakeName = "to you";
if (
  nom1 == "lorie" ||
  nom1 == "Lorie" ||
  nom1 == "Malorie" ||
  nom1 == "laury" ||
  nom1 == "Laury" ||
  nom1 == "Malaury" ||
  nom1 == "Anne" ||
  nom1 == "anne"
) {
  let nom = `Happy Valentine's day ${nom1 || FakeName} ❤️ `;
  $(document).ready(() => {
    new Typed(".animate-text", {
      strings: [
        nom,
        "Toi et moi sommes unis pour l'éternité",
        "la mort seule peut nous séparer",
        "je voulais te dire combien je t'aime",
        "Tu es la lumière qui illumine ma vie, la raison pour laquelle je me réveille chaque matin avec le sourire",
        "Je veux passer le reste de ma vie à tes côtés, à t'aimer et à te chérir",
        "Joyeuse Saint-Valentin, mon amour, je t'aime plus que tout au monde",
      ],
      typeSpeed: 200,
    });
  });
} else if (nom1 == "stanley" || nom1 == "Stanley") {
  let nom = `Happy Valentine's day ${"to me"} ❤️ `;
  $(document).ready(() => {
    new Typed(".animate-text", {
      strings: [nom],
      typeSpeed: 200,
    });
  });
} else {
  let nom = `Happy Valentine's day ${nom1 || FakeName} ❤️ `;
  $(document).ready(() => {
    new Typed(".animate-text", {
      strings: [nom],
      typeSpeed: 200,
    });
  });
}
