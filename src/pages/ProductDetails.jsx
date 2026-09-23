import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useCart } from "../context/CartContext";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart, getCartItemQuantity } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || ""
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <section className="section">
        <div className="container">
          <div className="empty-products">

            <div className="empty-products-icon">
              ?
            </div>

            <h2>Product Not Found</h2>

            <p>
              Sorry, we couldn't find the product
              you're looking for.
            </p>

            <Link
              to="/products"
              className="primary-btn"
            >
              Back to Products
            </Link>

          </div>
        </div>
      </section>
    );
  }

  const quantityInCart = getCartItemQuantity(
    product.id
  );

  const handleIncrease = () => {
    setQuantity((current) => current + 1);
  };

  const handleDecrease = () => {
    setQuantity((current) =>
      current > 1 ? current - 1 : 1
    );
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleBuyNow = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    navigate("/cart");
  };

  return (
    <div className="product-details-page">

      {/* Breadcrumb */}
      <div className="container">
        <div className="breadcrumb">

          <Link to="/">
            Home
          </Link>

          <span>/</span>

          <Link to="/products">
            Products
          </Link>

          <span>/</span>

          <span>{product.name}</span>

        </div>
      </div>

      {/* Product Details */}
      <section className="section">
        <div className="container">

          <div className="product-details">

            {/* Image */}
            <div className="product-details-image">

              <div className="details-image-wrapper">

                {product.badge && (
                  <span className="product-badge">
                    {product.badge}
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>

            </div>

            {/* Content */}
            <div className="product-details-content">

              <span className="details-category">
                {product.category}
              </span>

              <h1>
                {product.name}
              </h1>

              {/* Rating */}
              <div className="details-rating">

                <span className="rating-stars">
                  ★★★★★
                </span>

                <strong>
                  {product.rating}
                </strong>

                <span>
                  ({product.reviews} reviews)
                </span>

              </div>

              {/* Price */}
              <div className="details-price">

                <span>
                  ${product.price.toFixed(2)}
                </span>

                {product.oldPrice && (
                  <del>
                    ${product.oldPrice.toFixed(2)}
                  </del>
                )}

              </div>

              {/* Description */}
              <p className="details-description">
                {product.description}
              </p>

              {/* Product Meta */}
              <div className="details-meta">

                <div className="meta-item">
                  <span>Brand</span>
                  <strong>
                    {product.brand}
                  </strong>
                </div>

                <div className="meta-item">
                  <span>Availability</span>
                  <strong
                    className={
                      product.stock > 0
                        ? "in-stock"
                        : "out-of-stock"
                    }
                  >
                    {product.stock > 0
                      ? `${product.stock} in stock`
                      : "Out of stock"}
                  </strong>
                </div>

              </div>

              {/* Colors */}
              {product.colors?.length > 0 && (
                <div className="product-options">

                  <h3>
                    Color:
                    <span>{selectedColor}</span>
                  </h3>

                  <div className="color-options">

                    {product.colors.map((color) => (
                      <button
                        type="button"
                        key={color}
                        className={`color-option ${
                          selectedColor === color
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          setSelectedColor(color)
                        }
                      >
                        {color}
                      </button>
                    ))}

                  </div>

                </div>
              )}

              {/* Quantity */}
              <div className="details-actions">

                <div className="quantity-control">

                  <button
                    type="button"
                    onClick={handleDecrease}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>

                  <span>{quantity}</span>

                  <button
                    type="button"
                    onClick={handleIncrease}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>

                </div>

                <button
                  type="button"
                  className="primary-btn details-add-btn"
                  onClick={handleAddToCart}
                  disabled={product.stock <= 0}
                >
                  {product.stock > 0
                    ? `Add to Cart${
                        quantityInCart > 0
                          ? ` (${quantityInCart} in cart)`
                          : ""
                      }`
                    : "Out of Stock"}
                </button>

                <button
                  type="button"
                  className="secondary-btn buy-now-btn"
                  onClick={handleBuyNow}
                  disabled={product.stock <= 0}
                >
                  Buy Now
                </button>

              </div>

              {/* Extra Information */}
              <div className="details-extra">

                <div>
                  <span>✓</span>
                  Carefully selected product
                </div>

                <div>
                  <span>✓</span>
                  Easy and secure shopping
                </div>

                <div>
                  <span>✓</span>
                  Customer support available
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Related Products */}
      <section className="section related-products">

        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-label">
                YOU MAY ALSO LIKE
              </span>

              <h2 className="section-title">
                Related Products
              </h2>
            </div>

            <Link
              to={`/products?category=${product.category}`}
              className="text-link"
            >
              View More
              <span>→</span>
            </Link>
          </div>

          <div className="products-grid">

            {products
              .filter(
                (item) =>
                  item.category === product.category &&
                  item.id !== product.id
              )
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  to={`/products/${relatedProduct.id}`}
                  key={relatedProduct.id}
                  className="related-product-card"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    loading="lazy"
                  />

                  <div>
                    <span>
                      {relatedProduct.category}
                    </span>

                    <h3>
                      {relatedProduct.name}
                    </h3>

                    <strong>
                      ${relatedProduct.price.toFixed(2)}
                    </strong>
                  </div>
                </Link>
              ))}

          </div>

        </div>

      </section>

    </div>
  );
}

export default ProductDetails;