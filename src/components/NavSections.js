import menu from "../assets/menu.svg";

function NavSection() {
  const d = document,
    $nav = d.createElement("nav");
  $nav.classList.add("nav-sections");

  $nav.innerHTML = `
    <a href="#reloj">Reloj Digital</a>
  `;

  setTimeout(() => {
    const $allLinks = d.querySelectorAll(".nav-sections a");

    $allLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        d.querySelector(".modal").classList.remove("translate-modal");
        d.querySelector(".menu img").src = menu;
      });
    });
  }, 100);

  return $nav;
}

export default NavSection;
