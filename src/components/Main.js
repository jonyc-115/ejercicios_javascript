import RelojDigital from "./sections/RelojDigital";

function Main() {
  const d = document,
    $main = d.createElement("main"),
    $container = d.createElement("div");

  $container.classList.add("container");

  $main.appendChild($container);
  $container.appendChild(RelojDigital());

  return $main;
}

export default Main;
