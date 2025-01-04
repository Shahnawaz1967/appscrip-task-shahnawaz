"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "@/styles/filter-sidebar.css";

interface FilterGroup {
  title: string;
  options: string[];
}

const filterGroups: FilterGroup[] = [
  {
    title: "IDEAL FOR",
    options: ["Men", "Women", "Baby & Kids"],
  },
  {
    title: "OCCASION",
    options: ["Casual", "Formal", "Sport", "Work"],
  },
];

export default function FilterSidebar() {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    Object.fromEntries(filterGroups.map((group) => [group.title, true]))
  );
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  const toggleGroup = (title: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const toggleFilter = (group: string, option: string) => {
    setSelectedFilters((prev) => {
      const groupFilters = prev[group] || [];
      const updated = groupFilters.includes(option)
        ? groupFilters.filter((item) => item !== option)
        : [...groupFilters, option];

      return {
        ...prev,
        [group]: updated,
      };
    });
  };

  return (
    <div className="filter-sidebar">
      <div className="filter-groups">
        {filterGroups.map((group) => (
          <div key={group.title} className="filter-group">
            <button
              onClick={() => toggleGroup(group.title)}
              className="filter-group-header"
            >
              <span className="filter-group-title">{group.title}</span>
              {expandedGroups[group.title] ? (
                <ChevronUp className="icon" />
              ) : (
                <ChevronDown className="icon" />
              )}
            </button>
            {expandedGroups[group.title] && (
              <div className="filter-options">
                {group.options.map((option) => (
                  <label key={option} className="filter-option">
                    <input
                      type="checkbox"
                      checked={
                        selectedFilters[group.title]?.includes(option) || false
                      }
                      onChange={() => toggleFilter(group.title, option)}
                      className="filter-checkbox"
                    />
                    <span className="filter-label">{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
