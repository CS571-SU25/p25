import { useState, useEffect } from "react";

export default function useCart() {
    const [cart, setCart] = useState(() => {
        const stored = sessionStorage.getItem("cart");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        sessionStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function addToCart(item) {
        setCart(prev => [...prev, item]);
    }

    function clearCart() {
        setCart([]);
    }

    function removeFromCart(index) {
        setCart(prev => prev.filter((_, i) => i !== index));
    }

    return { cart, addToCart, clearCart, removeFromCart };
}