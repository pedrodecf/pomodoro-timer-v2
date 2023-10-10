import estado from "./estado.js"
import * as eventos from "./eventos.js"
import * as timer from "./timer.js"

export function iniciar(minutos, segundos) {
  estado.minutos = minutos
  estado.segundos = segundos

  timer.updateDisplay()
  eventos.registroDeControles()
  eventos.registroDeControlesSonoros()
}
