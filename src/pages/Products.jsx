import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory =
    searchParams.get("category") || "All";

  const [activeCategory, setActiveCategory] =
    useState(initialCategory);

  const [searchTerm, setSearchTerm] = useState("");

  const [sortBy, setSortBy] = useState("featured");

  const categories = [
    "All",
    "Beauty",
    "Furniture",
    "Fashion",
  ];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }

    setSearchParams(searchParams);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory !== "All") {
      result = result.filter(
        (product) =>
          product.category === activeCategory
      );
    }

    // Search filter
    if (searchTerm.trim()) {
      const search = searchTerm
        .toLowerCase()
        .trim();

      result = result.filter((product) => {
        return (
          product.name
            .toLowerCase()
            .includes(search) ||
          product.category
            .toLowerCase()
            .includes(search) ||
          product.brand
            .toLowerCase()
            .includes(search)
        );
      });
    }

    // Sorting
    if (sortBy === "price-low") {
      result.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sortBy === "price-high") {
      result.sort(
        (a, b) => b.price - a.price
      );
    }

    if (sortBy === "rating") {
      result.sort(
        (a, b) => b.rating - a.rating
      );
    }

    if (sortBy === "name") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [
    activeCategory,
    searchTerm,
    sortBy,
  ]);

  const clearFilters = () => {
    setSearchTerm("");
    setActiveCategory("All");
    setSortBy("featured");

    searchParams.delete("category");
    setSearchParams(searchParams);
  };

  return (
    <div className="products-page">

      {/* Page Header */}
      <section className="page-hero">
        <div className="container">

          <span className="section-label">
            MANLOZA COLLECTION
          </span>

          <h1 className="page-title">
            All Products
          </h1>

          <p>
            Explore our collection of beauty, furniture,
            and fashion products.
          </p>

        </div>
      </section>

      {/* Products Section */}
      <section className="section products-section">
        <div className="container">

          {/* Toolbar */}
          <div className="products-toolbar">

            {/* Categories */}
            <div className="filter-buttons">

              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={`filter-btn ${
                    activeCategory === category
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleCategoryChange(category)
                  }
                >
                  {category}
                </button>
              ))}

            </div>

            {/* Search + Sort */}
            <div className="products-tools">

              <div className="search-box">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="6.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M16 16L21 21"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>

                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search products..."
                  aria-label="Search products"
                />
              </div>

              <select
                value={sortBy}
                onChange={handleSortChange}
                className="sort-select"
                aria-label="Sort products"
              >
                <option value="featured">
                  Featured
                </option>

                <option value="price-low">
                  Price: Low to High
                </option>

                <option value="price-high">
                  Price: High to Low
                </option>

                <option value="rating">
                  Highest Rated
                </option>

                <option value="name">
                  Name: A-Z
                </option>
              </select>

            </div>
          </div>

          {/* Result Info */}
          <div className="products-result-info">

            <p className="products-count">
              Showing{" "}
              <strong>
                {filteredProducts.length}
              </strong>{" "}
              {filteredProducts.length === 1
                ? "product"
                : "products"}
            </p>

            {(searchTerm ||
              activeCategory !== "All" ||
              sortBy !== "featured") && (
              <button
                type="button"
                className="clear-filters"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            )}

          </div>

          {/* Products */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  product={product}
                  key={product.id}
                />
              ))}
            </div>
          ) : (
            <div className="empty-products">

              <div className="empty-products-icon">
                ×
              </div>

              <h2>
                No products found
              </h2>

              <p>
                We couldn't find products matching
                your search.
              </p>

              <button
                type="button"
                className="primary-btn"
                onClick={clearFilters}
              >
                Show All Products
              </button>

            </div>
          )}

        </div>
      </section>

    </div>
  );
}

export default Products;