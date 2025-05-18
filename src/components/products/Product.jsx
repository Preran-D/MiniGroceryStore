function Product({
    id,
    name,
    price,
    category,
    image,
    onAddToCart
}) {
    return (
        <div className="product">
            <img src={image} alt={name} />
            <div className="product-content">
                <div>
                    <p className="product-category">{category}</p>
                    <h3 className="product-name">{name}</h3>
                    <p className="product-price">₹{price}</p>
                </div>
                <div className="product-add-to-cart">
                    <button onClick={() => onAddToCart(id)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Product;