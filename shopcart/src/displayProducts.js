function DisplayProducts({ products }) {
    return (

        <div className="products-container">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <h3>{product.desc}</h3>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                    />
                    <div>
                        <input type="number" value={product.quantity} readOnly />
                        <span>Quantity</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DisplayProducts;