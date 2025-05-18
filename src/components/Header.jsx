import { useRef } from 'react';
import CartIcon from '../assets/CartIcon';
import CartModal from './cart/CartModal';

function Header({ cart, onUpdateCartItemQuantity, onClearCart }) {
    const modal = useRef();

    const cartQuantity = cart.items.length;

    const modalActions = (
        <>
            <button id="modal-close-btn" onClick={() => modal.current.close()}>Close</button>
            <button id="modal-clear-btn" onClick={() => {
                onClearCart();
            }}>Clear Cart</button>
        </>
    );

    function openCart() {
        modal.current.showModal();
    }

    return (
        <>
            <header id="main-header">
                <h1>Mini Grocery Store</h1>
                <button onClick={openCart}>
                    <CartIcon />
                    {cartQuantity}
                </button>
            </header>
            <CartModal
                ref={modal}
                cartItems={cart.items}
                onUpdateCartItemQuantity={onUpdateCartItemQuantity}
                title="Your Cart"
                actions={modalActions}
            />
        </>
    );
}

export default Header;