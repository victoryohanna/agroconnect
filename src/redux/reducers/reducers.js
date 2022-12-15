import { ADD_PRODUCT } from "../actions/productTypes";
const initialState = {
    product: ""
}
 
const productReducer = (state =initialState, action ) =>{
    switch (action.type) {
        case ADD_PRODUCT: return {
            ...state,
            product
        }
            
            break;
    
        default: return state
            break;
    }
}

export default productReducer;