import React from "react";
const testProduct = {
    image: "https://via.placeholder.com/150",
    name: "Sample Product",
    price: 799,
    variants: ["Red", "Blue"],
    inStock: true
};
<ProductCard product={testProduct} />

function ProductCard({ product }) {
    const [selectedVariant, setSelectedVariant] = React.useState(product.variants[0] || "");

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">₹{product.price}</p>
            {product.variants.length > 1 ? (
                <select
                    className="product-variants"
                    value={selectedVariant}
                    onChange={e => setSelectedVariant(e.target.value)}
                >
                    {product.variants.map(variant =>
                        <option key={variant} value={variant}>{variant}</option>
                    )}
                </select>
            ) : (
                <span className="product-variant">{product.variants[0]}</span>
            )}
            <button
                className="add-to-cart"
                disabled={!product.inStock}
            >
                {product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
        </div>
    );
}

export default ProductCard;