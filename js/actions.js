import estado from "./estado.js"
import * as timer from "./timer.js"
import * as sounds from "./sounds.js"

export function toggleTempo() {
  estado.rodando = document.documentElement.classList.toggle("rodando")
  timer.countdown()
}

export function resetarTempo() {
  estado.rodando = false
  document.documentElement.classList.remove("rodando")
  timer.updateDisplay()
}

export function aumentarCincoMinutos() {
  timer.maisCinco()
}

export function diminuirCincoMinutos() {
  timer.menosCinco()
}

export function floresta() {
  document.documentElement.classList.toggle("floresta")
  document.documentElement.classList.remove("chuva")
  document.documentElement.classList.remove("cafeteria")
  document.documentElement.classList.remove("lareira")
  sounds.chuva.pause()
  sounds.cafeteria.pause()
  sounds.lareira.pause()

  if (document.documentElement.classList.contains("floresta")) {
    sounds.floresta.play()
  } else {
    sounds.floresta.pause()
  }
}

export function chuva() {
  document.documentElement.classList.remove("floresta")
  document.documentElement.classList.toggle("chuva")
  document.documentElement.classList.remove("cafeteria")
  document.documentElement.classList.remove("lareira")
  sounds.floresta.pause()
  sounds.cafeteria.pause()
  sounds.lareira.pause()

  if (document.documentElement.classList.contains("chuva")) {
    sounds.chuva.play()
  } else {
    sounds.chuva.pause()
  }
}

export function cafeteria() {
  document.documentElement.classList.remove("floresta")
  document.documentElement.classList.remove("chuva")
  document.documentElement.classList.toggle("cafeteria")
  document.documentElement.classList.remove("lareira")
  sounds.floresta.pause()
  sounds.chuva.pause()
  sounds.lareira.pause()

  if (document.documentElement.classList.contains("cafeteria")) {
    sounds.cafeteria.play()
  } else {
    sounds.cafeteria.pause()
  }
}

export function lareira() {
  document.documentElement.classList.remove("floresta")
  document.documentElement.classList.remove("chuva")
  document.documentElement.classList.remove("cafeteria")
  document.documentElement.classList.toggle("lareira")
  sounds.floresta.pause()
  sounds.chuva.pause()
  sounds.cafeteria.pause()

  if (document.documentElement.classList.contains("lareira")) {
    sounds.lareira.play()
  } else {
    sounds.lareira.pause()
  }
}
