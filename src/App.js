import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import "./styles/App.css";

export function App() {
  const $app = document.getElementById("app");

  $app.appendChild(Header());
  $app.appendChild(Menu());
  $app.appendChild(Main());
  $app.appendChild(Modal());
}
