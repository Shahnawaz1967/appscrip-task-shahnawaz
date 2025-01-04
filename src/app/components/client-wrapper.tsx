"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import ProductCard from "./product-card";
import SortDropdown from "./sort-dropdown";
import MobileFilterDrawer from "./mobile-filter-drawer";
import "@/styles/home.css";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface ClientWrapperProps {
  products: Product[];
}

export default function ClientWrapper({
  products: initialProducts,
}: ClientWrapperProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [products, setProducts] = useState(initialProducts);

  const handleSort = (sortValue: string) => {
    const sortedProducts = [...products];
    switch (sortValue) {
      case "price-asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
    }
    setProducts(sortedProducts);
  };

  return (
    <>
      <div className="home-controls">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="home-filter-button"
        >
          <Filter className="icon" />
          <span>Filter</span>
        </button>
        <div className="home-sort-dropdown">
          <SortDropdown onSort={handleSort} />
        </div>
      </div>

      <div className="home-content">
        <div className="home-products">
          <div className="home-product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>

      <MobileFilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </>
  );
}
