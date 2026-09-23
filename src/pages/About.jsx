import { Link } from "react-router-dom";

function About() {
  const stats = [
    {
      number: "24+",
      label: "Products",
    },
    {
      number: "3",
      label: "Categories",
    },
    {
      number: "100%",
      label: "Carefully Selected",
    },
    {
      number: "24/7",
      label: "Online Access",
    },
  ];

  const values = [
    {
      icon: "◇",
      title: "Quality",
      text: "We focus on products that combine quality, useful design, and everyday value.",
    },
    {
      icon: "✦",
      title: "Style",
      text: "Our collections are built around simple, modern, and timeless aesthetics.",
    },
    {
      icon: "♡",
      title: "Simplicity",
      text: "We believe discovering and shopping for products should feel easy and enjoyable.",
    },
    {
      icon: "✓",
      title: "Care",
      text: "Every part of the store is designed with attention to detail and the customer experience.",
    },
  ];

  return (
    <div className="about-page">

      {/* Page Header */}
      <section className="page-hero">
        <div className="container">

          <span className="section-label">
            OUR STORY
          </span>

          <h1 className="page-title">
            About Manloza
          </h1>

          <p>
            A modern online store built around products,
            style, and a simple shopping experience.
          </p>

        </div>
      </section>

      {/* Main Story */}
      <section className="section">
        <div className="container about-grid">

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1100&q=90"
              alt="Manloza Store"
            />
          </div>

          <div className="about-content">

            <span className="section-label">
              WHO WE ARE
            </span>

            <h2 className="section-title">
              A simple idea,
              <br />
              made into a store.
            </h2>

            <p>
              Manloza Store is a modern e-commerce concept
              created to bring different product categories
              together in one clean and easy-to-use shopping
              experience.
            </p>

            <p>
              From beauty essentials and furniture to fashion
              pieces, our collections are selected around a
              simple idea: products should be useful, stylish,
              and enjoyable to discover.
            </p>

            <p>
              The store combines a clean visual identity with
              practical features such as product filtering,
              search, product details, shopping cart
              functionality, and responsive design.
            </p>

            <Link
              to="/products"
              className="primary-btn"
            >
              Explore Products
              <span>→</span>
            </Link>

          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="section stats-section">
        <div className="container">

          <div className="stats-grid">

            {stats.map((stat) => (
              <div
                className="stat-card"
                key={stat.label}
              >
                <strong>
                  {stat.number}
                </strong>

                <span>
                  {stat.label}
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Mission */}
      <section className="section about-mission">
        <div className="container">

          <div className="mission-content">

            <span className="section-label">
              OUR MISSION
            </span>

            <h2 className="section-title">
              Make discovering
              <br />
              products feel effortless.
            </h2>

            <p>
              We want Manloza to feel less like a complicated
              marketplace and more like a carefully organized
              collection where finding something you like is
              simple.
            </p>

          </div>

        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">

          <div className="section-heading centered-heading">
            <div>
              <span className="section-label">
                WHAT WE VALUE
              </span>

              <h2 className="section-title">
                Built Around What Matters
              </h2>
            </div>
          </div>

          <div className="features-grid">

            {values.map((value) => (
              <div
                className="feature-card"
                key={value.title}
              >
                <div className="feature-icon">
                  {value.icon}
                </div>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="promo-banner">
        <div className="container promo-inner">

          <div className="promo-content">
            <span>
              DISCOVER MANLOZA
            </span>

            <h2>
              Find your next
              <br />
              favorite product.
            </h2>
          </div>

          <Link
            to="/products"
            className="primary-btn"
          >
            Shop Now
            <span>→</span>
          </Link>

        </div>
      </section>

    </div>
  );
}

export default About;