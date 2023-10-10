import estado from "./estado.js"
import * as el from "./elementos.js"
import { resetarTempo } from "./actions.js"

export function countdown() {
  clearTimeout(estado.countdownId)

  if (!estado.rodando) {
    return
  }

  let minutos = Number(el.minutos.textContent)
  let segundos = Number(el.segundos.textContent)

  segundos--

  if (segundos < 0) {
    segundos = 59
    minutos--
  }

  if (minutos < 0) {
    resetarTempo()
    return
  }

  updateDisplay(minutos, segundos)

  estado.countdownId = setTimeout(() => countdown(), 1000)
}

export function maisCinco() {
  let minutos = Number(el.minutos.textContent)
  let segundos = Number(el.segundos.textContent)

  if (minutos <= 59 && minutos >= 56) {
    minutos = 59
  } else {
    minutos += 5
  }

  if (minutos >= 60) {
    minutos = 60
  }

  updateDisplay(minutos, segundos)
}
 
export function menosCinco() {
  let minutos = Number(el.minutos.textContent)
  let segundos = Number(el.segundos.textContent)

  if (minutos <= 4) {
    minutos = 0
  } else {
    minutos -= 5
  }

  updateDisplay(minutos, segundos)
}

export function updateDisplay(minutos, segundos) {
  minutos = minutos ?? estado.minutos
  segundos = segundos ?? estado.segundos

  el.minutos.textContent = String(minutos).padStart(2, "0")
  el.segundos.textContent = String(segundos).padStart(2, "0")
}
