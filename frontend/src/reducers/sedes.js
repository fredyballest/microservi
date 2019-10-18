import { GET_SEDES, ADD_SEDES, DELETE_SEDE } from "../actions/types"

const initialState = {
    sedes:[]
}

export default function(state = initialState, action){
    

    switch(action.type){
   
    case GET_SEDES:
        console.log(action)
        return {
            ...state,
            sedes: action.payload
        }
    case DELETE_SEDE:
        return {
              ...state,
            sedes: state.sedes.filter(sede => sede.id !== action.payload)
             }
    case ADD_SEDES:
        return {
               ...state,
             sedes: [...state.sedes, action.payload]
            }    
    
    default:
        return state    
    }
}