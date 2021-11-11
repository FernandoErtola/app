import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    const addToCart = (quantity, product) => {
        const productExists = cart.find(item => item.product.id === product.id)
        if (productExists) {
            setCart(cart.map(item => item.product.id === product.id ? { product, quantity: item.quantity + quantity } : item))
        } else {
            setCart([...cart, { product, quantity }])
        }
    }

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.product.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    const value = {cart, addToCart, removeFromCart, clearCart}

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
