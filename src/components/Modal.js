import NavSection from "./NavSections";

function Modal() {
  const $modal = document.createElement("div");
  $modal.classList.add("modal");

  $modal.appendChild(NavSection());

  return $modal;
}

export default Modal;
