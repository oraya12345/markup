import React, { createContext, useReducer } from "react"

export const CartContext = createContext({})

const initialState = {
    cart: []
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case "SUB_CART":
            let arr = state.cart.filter(item => item.ProductID != action.payload)
            return {
                ...state,
                cart: arr
            }
        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            }

        case "CHANGE_CART":
            let id = action.payload.ProductID
            let qty = action.payload.qty
            let index = action.payload.index
            let arr2 = state.cart
            arr2[index].qty = qty
            arr2[index].total = qty*action.payload.Price
            arr2[index].net = qty*action.payload.Price
            return {
                ...state,
                cart: arr2
            }
    }
}

export const CartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(
        cartReducer,
        initialState
    )

    const { cart } = cartState

    const addCart = payload =>
        cartDispatch({ type: "ADD_CART", payload })
    const subCart = payload =>
        cartDispatch({ type: "SUB_CART", payload })
    const clearCart = payload =>
        cartDispatch({ type: "CLEAR_CART", payload })
    const changeCart = payload =>
        cartDispatch({ type: "CHANGE_CART", payload })

    return (
        <CartContext.Provider value={{ cart, addCart, subCart, clearCart,changeCart }}>
            {children}
        </CartContext.Provider>
    )
}