import menu from "../assets/menu.svg";
import closed from "../assets/closed.svg";

function Menu() {
  const d = document,
    $menu = d.createElement("div");

  $menu.classList.add("menu");

  $menu.addEventListener("click", (e) => {
    const $modal = d.querySelector(".modal"),
      $img = d.querySelector(".menu img");

    $modal.classList.toggle("translate-modal");
    $modal.classList.contains("translate-modal")
      ? ($img.src = closed)
      : ($img.src = menu);
  });

  $menu.innerHTML = `
      <img src="${menu}" alt="Menu hamburguesa" />
  `;

  return $menu;
}

export default Menu;
