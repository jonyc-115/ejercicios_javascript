import bars from "../assets/bars.svg";

function Menu() {
  const $menu = document.createElement("div");

  $menu.classList.add("menu");

  $menu.innerHTML = `
    <img src="${bars}" alt="Menu hamburguesa" />
  `;

  return $menu;
}

export default Menu;
