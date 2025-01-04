"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import "@/styles/header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-flex">
          <div className="header-logo">
            <Link href="/" className="header-title">
              AppScrip Task
            </Link>
          </div>

          <nav className="header-nav">
            <Link href="/" className="header-link disabled">
              Home
            </Link>
            <Link href="/products" className="header-link disabled">
              Products
            </Link>
            <Link href="/about" className="header-link disabled">
              About
            </Link>
            <Link href="/contact" className="header-link disabled">
              Contact
            </Link>
          </nav>

          <div className="mobile-menu-button">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-toggle"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-links">
              <Link
                href="/"
                className="mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
