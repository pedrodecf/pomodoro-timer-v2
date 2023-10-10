import { controles, controlesSonoros } from "./elementos.js"
import * as actions from "./actions.js"

export function registroDeControles() {
  controles.addEventListener("click", (event) => {
    const action = event.target.dataset.action

    if (typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })
}

export function registroDeControlesSonoros() {
  controlesSonoros.addEventListener("click", (event) => {
    const action = event.target.dataset.action

    if (typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })
}
