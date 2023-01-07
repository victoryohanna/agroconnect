import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState:{
        products : []
    },

    reducers:{
        getProducts(state, action){
            state.products = action.payload

            //console.log(state.products)
        },

        productDetails(state, action){
            //Filter Details of each product  
        }
    }
})

export const productsAction = productsSlice.actions
export default productsSlice