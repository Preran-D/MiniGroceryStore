import { createPortal } from "react-dom";
import Cart from "./Cart";
import { forwardRef } from "react";

const CartModal = forwardRef(({ cartItems, title, onUpdateCartItemQuantity, actions }, ref) => {
    return createPortal(
        <dialog ref={ref} className="cart-dialog">
            <h2>{title}</h2>
            <Cart items={cartItems} onUpdateItemQuantity={onUpdateCartItemQuantity} />
            <form method="dialog">
                {actions}
            </form>
        </dialog>,
        document.getElementById('modal')
    );
});

export default CartModal;