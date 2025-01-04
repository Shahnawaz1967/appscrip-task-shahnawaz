"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import "@/styles/sort-dropdown.css";

interface SortOption {
  label: string;
  value: string;
}

const sortOptions: SortOption[] = [
  { label: "Recommended", value: "recommended" },
  { label: "Newest First", value: "newest" },
  { label: "Popular", value: "popular" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Price: Low to High", value: "price-asc" },
];

interface SortDropdownProps {
  onSort: (value: string) => void;
}

export default function SortDropdown({ onSort }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(sortOptions[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: SortOption) => {
    setSelected(option);
    onSort(option.value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sort-dropdown" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="sort-button">
        <span>Sort by: {selected.label}</span>
        <ChevronDown className={`icon ${isOpen ? "icon-rotate" : ""}`} />
      </button>

      <div className={`dropdown-menu ${isOpen ? "dropdown-menu-open" : ""}`}>
        {sortOptions.map((option, index) => (
          <div key={option.value}>
            <button
              onClick={() => handleSelect(option)}
              className={`dropdown-item ${
                selected.value === option.value ? "selected" : ""
              }`}
            >
              {option.label}
            </button>
            {index < sortOptions.length - 1 && (
              <div className="dropdown-separator" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
