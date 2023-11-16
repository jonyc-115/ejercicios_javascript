import { digitalClock } from "./relojFunctions";
import "./styles/RelojDigital.css";

function RelojDigital() {
  const d = document,
    $section = d.createElement("section");

  $section.classList.add("section");
  $section.id = "seccion_1";

  $section.innerHTML = `
    <h2>Reloj Digital y Alarma Sonora</h2>
    <div id="reloj" class="none"></div>
    <div class="reloj-btns ">
      <button id="activar-reloj">Iniciar Reloj</button>
      <button id="desactivar-reloj">Detener Reloj</button>
      <button id="activar-alarma">Iniciar Alarma</button>
      <button id="desactivar-alarma">Detener Alarma</button>
    </div>
  `;

  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");

  return $section;
}

export default RelojDigital;
