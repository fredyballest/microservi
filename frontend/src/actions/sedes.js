import axios from 'axios'
import { tokenConfig } from "./auth";


import { GET_SEDES,ADD_SEDES,DELETE_SEDE } from './types'

export const getSedes = () => (dispatch, getState) => {
   console.log(tokenConfig(getState))
    axios
      .get("/api/sedes/",tokenConfig(getState))
      .then(res => {
        dispatch({
          type: GET_SEDES,
          payload: res.data
        });
      })
      .catch(err =>console.log(err)  );
      
  };
  
  
  export const addSede = (sede) => (dispatch, getState) => {
    axios
      .post("/api/sedes/",sede,tokenConfig(getState))
      .then(res => {
        dispatch({
          type: ADD_SEDES,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
      
  };

  export const deleteSede = (id) => (dispatch, getState) => {
    axios
      .delete(`/api/sedes/${id}/`,tokenConfig(getState))
      .then(res => {
        dispatch({
          type: DELETE_SEDE,
          payload: id
        });
      })
      .catch(err => console.log(err))
      
  };
