"use client";

import { X } from "lucide-react";
import FilterSidebar from "./filter-sidebar";
import "@/styles/mobile-filter-drawer.css";

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileFilterDrawer({
  isOpen,
  onClose,
}: MobileFilterDrawerProps) {
  return (
    <div className={`mobile-filter-backdrop ${isOpen ? "open" : "closed"}`}>
      <div className={`mobile-filter-drawer ${isOpen ? "open" : "closed"}`}>
        <div className="mobile-filter-header">
          <h2 className="mobile-filter-title">Filters</h2>
          <button onClick={onClose} className="mobile-filter-close-button">
            <X className="icon" />
          </button>
        </div>
        <div className="mobile-filter-content">
          <FilterSidebar />
        </div>
      </div>
    </div>
  );
}
