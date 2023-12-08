import { ADD_FAV } from "./action-type"
import { REMOVE_FAV } from "./action-type"
import { FILTER } from "./action-type"
import { ORDER } from "./action-type"
import axios from "axios"



/* export function addFav(character) { //* { id: 1, name: "Rick"}
  return {
    type: ADD_FAV,
    payload: character
  }
} */

//* homework express reemplaza addFav

export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';

  //* solo hacemos async await la funcion dentro del return donde hacemos la peticion asíncrona, donde el axios es la promesa
  /* return (dispatch) => {
     axios.post(endpoint, character)
     .then(({ data }) => {
        return dispatch({
           type: ADD_FAV,
           payload: data,
        });
     });
  }; */

  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

/* export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id
  }
} */
//* homework express reemplaza removeFav
//* hacemos async await la funcion del return donde se realiza la peticion asíncrona y axios es la promesa

export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;

  /* return (dispatch) => {
     axios.delete(endpoint)
     .then(({ data }) => {
        return dispatch({
           type: REMOVE_FAV,
           payload: data,
     });
     });
  }; */

  return async (dispatch) => {
    try{
      const {data} = await axios.delete(endpoint);
      return dispatch({
         type: REMOVE_FAV,
         payload: data,
   });
  }catch (error) {
    alert(error.message);

    /* en lugar del alert, lo ideal seria despachar una accion cuyo type sea ERROR 
    y crear el caso de ERROR en reducer: case "ERROR" (codigo => cargar el error en estado errors = {})
    en el reducer crear un nuevo estado que sea errors = {} y en el objeto cargar los errores
    Nos preguntariamos si en errors hay algo y si lo hay se lo mostrariamos al usuario
    Para limpiar el error al hacer un add fav tambien limpiariamos el estado errors = {} (en el return de add fav)

      return dispatch({
        type: ERROR,
        payload: error.message,
      });
      */
  }
 };
};



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