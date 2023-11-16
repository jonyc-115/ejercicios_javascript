function RelojDigital() {
  const d = document,
    $section = d.createElement("section");

  $section.classList.add("section");
  $section.id = "reloj";

  $section.innerHTML = "<h1>Reloj Digital</h1>";

  return $section;
}

export default RelojDigital;
