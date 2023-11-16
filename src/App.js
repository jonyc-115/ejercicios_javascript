import Header from "./components/Header";
import Menu from "./components/Menu";
import "./styles/App.css";

export function App() {
  const $app = document.getElementById("app");

  $app.appendChild(Header());
  $app.appendChild(Menu());
}
