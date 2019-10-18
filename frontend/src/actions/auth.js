import axios from "axios";
import {
    USER_LOADED,
    USER_LOADING,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
  } from "./types";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
   dispatch({ type: USER_LOADING });
   // Get token from state
  axios.get('/api/auth/user', tokenConfig(getState))
    .then( res => {
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    }).catch(err => console.log(err))
    
  }


// LOGIN USER
export const login = (username, password) => dispatch => {


    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
   
    const body = JSON.stringify({ username, password });

    axios.post('/api/auth/login',body, config)
      .then( res => {
          dispatch({
              type: LOGIN_SUCCESS,
              payload: res.data
          })
      }).catch(err => console.log(err))
    }

   
   
   // REGISTER USER
export const register = ({ username, password, email }) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({ username, email, password });

  axios
    .post("/api/auth/register", body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

   
   
 
   
    // LOGOUT USER
    export const logout = () => (dispatch, getState) => {
      
       // Get token from state
      
      axios.post('/api/auth/logout/',null, tokenConfig(getState))
        .then( res => {
            dispatch({
                type: LOGOUT_SUCCESS
            })
        }).catch(err => console.log(err))
      }


      // Setup config with token - helper function
export const tokenConfig = getState => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
}