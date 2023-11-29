import { ADD_FAV } from "./action-type"
import { REMOVE_FAV } from "./action-type"
import { FILTER } from "./action-type"
import { ORDER } from "./action-type"



export function addFav(character) { //* { id: 1, name: "Rick"}
  return {
    type: ADD_FAV,
    payload: character
  }
}

export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id
  }
}

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender
  }
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order
  }
}