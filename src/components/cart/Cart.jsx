export default function Cart({ items, onUpdateItemQuantity }) {
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const formattedTotal = `₹ ${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {items.length === 0 ? (
        <p>Your cart is  empty.</p>
      ) : (
        <>
          <ul id="cart-items">
            {items.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price"> ₹{item.price.toFixed(2)}</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => onUpdateItemQuantity(item.id, -1)}>
                    –
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p id="cart-total-price">
            Total: <strong>{formattedTotal}</strong>
          </p>
        </>
      )}
    </div>
  );
}