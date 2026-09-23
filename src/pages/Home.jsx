import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import GitHubProjects from "../components/GitHubProjects";
import products from "../data/products";

function Home() {
  const featuredProducts = products.slice(0, 8);

  const categories = [
    {
      name: "Beauty",
      description: "Beauty essentials for your everyday routine.",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Furniture",
      description: "Modern pieces designed for beautiful spaces.",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Fashion",
      description: "Clean, modern styles made for every day.",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const githubUsername =
    import.meta.env.VITE_GITHUB_USERNAME || "";

  return (
    <div className="home-page">

      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">

          <div className="hero-content">
            <span className="hero-label">
              WELCOME TO MANLOZA STORE
            </span>

            <h1>
              Simple.
              <br />
              Modern.
              <br />
              <span>Yours.</span>
            </h1>

            <p>
              Discover a carefully selected collection of
              beauty, furniture, and fashion products designed
              to fit your everyday lifestyle.
            </p>

            <div className="hero-actions">
              <Link to="/products" className="primary-btn">
                Shop Collection
                <span>→</span>
              </Link>

              <Link to="/about" className="secondary-btn">
                Discover More
              </Link>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=90"
              alt="Manloza Store collection"
            />

            <div className="hero-badge">
              <strong>24+</strong>
              <span>Products</span>
            </div>
          </div>

        </div>
      </section>

      {/* Promo Banner */}
      <section className="promo-banner">
        <div className="container promo-inner">

          <div className="promo-content">
            <span>NEW COLLECTION</span>

            <h2>
              Something new
              <br />
              is waiting for you.
            </h2>
          </div>

          <Link to="/products" className="primary-btn">
            Explore Now
            <span>→</span>
          </Link>

        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-label">
                SHOP BY CATEGORY
              </span>

              <h2 className="section-title">
                Find Your Style
              </h2>
            </div>

            <Link to="/products" className="text-link">
              View All
              <span>→</span>
            </Link>
          </div>

          <div className="category-grid">

            {categories.map((category) => (
              <Link
                to={`/products?category=${category.name}`}
                className="category-card"
                key={category.name}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                />

                <div className="category-overlay">
                  <span>Explore</span>

                  <h3>{category.name}</h3>

                  <p>{category.description}</p>

                  <span className="category-arrow">
                    →
                  </span>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section products-section">
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-label">
                OUR SELECTION
              </span>

              <h2 className="section-title">
                Featured Products
              </h2>
            </div>

            <Link to="/products" className="text-link">
              Shop All
              <span>→</span>
            </Link>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
              />
            ))}
          </div>

        </div>
      </section>

      {/* About Preview */}
      <section className="section about-preview">
        <div className="container about-grid">

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=85"
              alt="Manloza Store fashion collection"
              loading="lazy"
            />
          </div>

          <div className="about-content">

            <span className="section-label">
              ABOUT MANLOZA
            </span>

            <h2 className="section-title">
              More than a store.
              <br />
              A collection of things
              <br />
              we love.
            </h2>

            <p>
              Manloza Store brings together carefully selected
              products across beauty, furniture, and fashion.
              Our goal is simple: make discovering products
              enjoyable, easy, and inspiring.
            </p>

            <p>
              From everyday essentials to pieces that add
              personality to your space or wardrobe, every
              collection is designed with a modern and timeless
              feeling in mind.
            </p>

            <Link to="/about" className="primary-btn">
              About Us
              <span>→</span>
            </Link>

          </div>

        </div>
      </section>

      {/* Why Manloza */}
      <section className="section features-section">
        <div className="container">

          <div className="section-heading centered-heading">
            <div>
              <span className="section-label">
                WHY MANLOZA
              </span>

              <h2 className="section-title">
                Shopping Made Simple
              </h2>
            </div>
          </div>

          <div className="features-grid">

            <div className="feature-card">
              <div className="feature-icon">
                ✓
              </div>

              <h3>Carefully Selected</h3>

              <p>
                Products are selected with quality,
                style, and everyday use in mind.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                ◆
              </div>

              <h3>Modern Style</h3>

              <p>
                Clean and timeless products that fit
                naturally into your lifestyle.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                ↗
              </div>

              <h3>Easy Shopping</h3>

              <p>
                Browse, discover, and add your favorite
                products to your cart with ease.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                ♡
              </div>

              <h3>Made With Care</h3>

              <p>
                A store experience built around simplicity
                and attention to detail.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* GitHub Projects */}
      {githubUsername && (
        <GitHubProjects username={githubUsername} />
      )}

      {/* Final CTA */}
      <section className="promo-banner final-cta">
        <div className="container promo-inner">

          <div className="promo-content">
            <span>READY TO EXPLORE?</span>

            <h2>
              Find something
              <br />
              made for you.
            </h2>
          </div>

          <Link to="/products" className="primary-btn">
            Start Shopping
            <span>→</span>
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Home;