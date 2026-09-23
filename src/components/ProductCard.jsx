import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart, getCartItemQuantity } = useCart();

  const quantityInCart = getCartItemQuantity(product.id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <article className="product-card">

      {/* Product Image */}
      <div className="product-image-wrapper">

        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
        </Link>

        {/* Product Badge */}
        {product.badge && (
          <span className="product-badge">
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          className="product-wishlist"
          aria-label={`Add ${product.name} to wishlist`}
        >
          ♡
        </button>

      </div>

      {/* Product Information */}
      <div className="product-info">

        <span className="product-category">
          {product.category}
        </span>

        <Link
          to={`/products/${product.id}`}
          className="product-name"
        >
          {product.name}
        </Link>

        {/* Rating */}
        <div className="product-rating">

          <span className="rating-stars">
            ★★★★★
          </span>

          <span className="rating-number">
            {product.rating}
          </span>

          <span className="rating-reviews">
            ({product.reviews})
          </span>

        </div>

        {/* Price + Cart */}
        <div className="product-bottom">

          <div className="product-price">
            <span className="current-price">
              ${product.price.toFixed(2)}
            </span>

            {product.oldPrice && (
              <span className="product-old-price">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            type="button"
            className="add-cart-btn"
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
          >
            <span>
              {quantityInCart > 0
                ? `Add More (${quantityInCart})`
                : "Add to Cart"}
            </span>

            <span className="cart-btn-icon">
              +
            </span>
          </button>

        </div>

      </div>
    </article>
  );
}

export default ProductCard;