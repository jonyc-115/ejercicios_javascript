const d = document;
export function digitalClock(clock, btnPlay, btnStop) {
  /* clockTempo es una variable que se inicializa vacia para luego agregar
  el setInterval que se crea al dar click
  en el buton btnPlay*/
  let clockTempo;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      /**
       * se usa el setInterval() para imprimir
       * la hora que da toLocaleTimeString()
       * cada segundo, eso hace que de la hora
       * segundo a segundo
       *
       */
      clockTempo = setInterval(() => {
        /* toLocaleTimeString() devuelve un 
        string que da la hora en un formato
        legible por humanos
        */
        let clockHour = new Date().toLocaleTimeString();

        d.querySelector(clock).classList.remove("none");
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      // clearInterval es para limpiar el
      // setinterval() y detener el codigo
      // que hay escrito en este
      clearInterval(clockTempo);
      d.querySelector(clock).classList.add("none");
      d.querySelector(clock).innerHTML = null;

      d.querySelector(btnPlay).disabled = false;
    }
  });
}

export function alarm() {}
