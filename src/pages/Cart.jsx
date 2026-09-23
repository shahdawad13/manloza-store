import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const shipping = cartTotal > 0 ? 0 : 0;
  const finalTotal = cartTotal + shipping;

  if (cartItems.length === 0) {
    return (
      <section className="section cart-section">
        <div className="container">

          <div className="empty-cart">

            <div className="empty-cart-icon">
              🛒
            </div>

            <span className="section-label">
              YOUR SHOPPING CART
            </span>

            <h1 className="page-title">
              Your Cart Is Empty
            </h1>

            <p>
              Looks like you haven't added anything to
              your cart yet. Explore our collection and
              find something you love.
            </p>

            <Link
              to="/products"
              className="primary-btn"
            >
              Start Shopping
              <span>→</span>
            </Link>

          </div>

        </div>
      </section>
    );
  }

  return (
    <div className="cart-page">

      {/* Page Header */}
      <section className="page-hero">
        <div className="container">

          <span className="section-label">
            YOUR SHOPPING CART
          </span>

          <h1 className="page-title">
            Shopping Cart
          </h1>

          <p>
            Review your items before completing your order.
          </p>

        </div>
      </section>

      {/* Cart */}
      <section className="section cart-section">
        <div className="container">

          <div className="cart-layout">

            {/* Cart Items */}
            <div className="cart-items">

              <div className="cart-items-header">
                <h2>
                  Your Items
                </h2>

                <button
                  type="button"
                  className="clear-cart-btn"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>

              {cartItems.map((item) => (
                <article
                  className="cart-item"
                  key={item.id}
                >

                  {/* Image */}
                  <Link
                    to={`/products/${item.id}`}
                    className="cart-item-image"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  </Link>

                  {/* Info */}
                  <div className="cart-item-info">

                    <span className="product-category">
                      {item.category}
                    </span>

                    <Link
                      to={`/products/${item.id}`}
                      className="product-name"
                    >
                      {item.name}
                    </Link>

                    <p>
                      {item.brand}
                    </p>

                    <button
                      type="button"
                      className="remove-item"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      Remove
                    </button>

                  </div>

                  {/* Quantity */}
                  <div className="quantity-control">

                    <button
                      type="button"
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      aria-label="Increase quantity"
                    >
                      +
                    </button>

                  </div>

                  {/* Price */}
                  <div className="cart-item-price">
                    $
                    {(
                      item.price * item.quantity
                    ).toFixed(2)}
                  </div>

                </article>
              ))}

              {/* Continue Shopping */}
              <Link
                to="/products"
                className="continue-shopping"
              >
                ← Continue Shopping
              </Link>

            </div>

            {/* Summary */}
            <aside className="cart-summary">

              <h2>
                Order Summary
              </h2>

              <div className="summary-row">
                <span>
                  Subtotal
                </span>

                <strong>
                  ${cartTotal.toFixed(2)}
                </strong>
              </div>

              <div className="summary-row">
                <span>
                  Shipping
                </span>

                <strong>
                  {shipping === 0
                    ? "Free"
                    : `$${shipping.toFixed(2)}`}
                </strong>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row total-row">
                <span>
                  Total
                </span>

                <strong>
                  ${finalTotal.toFixed(2)}
                </strong>
              </div>

              {/* Promo */}
              <div className="cart-promo">
                <span>✓</span>

                <p>
                  Free shipping on this order.
                </p>
              </div>

              {/* Checkout */}
              <button
                type="button"
                className="checkout-btn"
                onClick={() =>
                  alert(
                    "Checkout is ready to be connected to a payment system."
                  )
                }
              >
                Proceed to Checkout
                <span>→</span>
              </button>

              <p className="secure-checkout">
                Secure checkout • Your information is protected
              </p>

            </aside>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Cart;