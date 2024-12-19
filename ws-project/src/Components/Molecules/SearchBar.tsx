"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";
import {getLastPartOfUrl} from "@/Services/utils";
import { get } from "https";

interface Suggestion {
  label: string;
  image: string;
  url: string;
}

interface SearchBarProps {
  onSearch: (query: string) => void;
  suggestions: { [key: string]: Suggestion[] };
  query: string;
  setQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, suggestions = [], query, setQuery }) => {
  const [showSuggestions, setShowSuggestions] = React.useState(false);

  const handleSearch = () => {
    if (onSearch && query.trim()) {
      onSearch(query);
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const filteredSuggestions = Object.entries(suggestions).reduce((acc, [category, items]) => {
    const filteredItems = items.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );
    if (filteredItems.length > 0) {
      acc[category] = filteredItems;
    }
    return acc;
  }, {} as { [key: string]: Suggestion[] });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        width: "100%",
        maxWidth: "600px",
        margin: "20px auto",
      }}
    >
      <div style={{ display: "flex", width: "100%" }}>
        <input
          type="text"
          style={{
            flex: 1,
            padding: "10px 15px",
            fontSize: "16px",
            border: "2px solid black",
            borderRight: "none",
            borderRadius: "50px 0 0 50px",
            outline: "none",
          }}
          placeholder="Rechercher par nom"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onKeyDown={handleKeyDown}
        />
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            color: "black",
            backgroundColor: "white",
            border: "2px solid black",
            borderLeft: "none",
            borderRadius: "0 50px 50px 0",
            cursor: "pointer",
          }}
          onClick={handleSearch}
        >
          <FaSearch />
        </button>
      </div>
      {showSuggestions && query && Object.keys(filteredSuggestions).length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "5%",
            right: 0,
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "0 0 4px 4px",
            maxHeight: "290px",
            width: "90%",
            overflowY: "auto",
            margin: 0,
            padding: "10px",
            zIndex: 10,
          }}
        >
          {Object.entries(filteredSuggestions).map(([category, items]) => (
            <div key={category} style={{ marginBottom: "10px" }}>
              <h4 style={{ margin: "5px 0" }}>• {category}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {items.map((item, index) => (
                <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  cursor: "pointer",
                  borderBottom: "1px solid #f0f0f0",
                }}
                onClick={() => {
                  if (category === "Conflit") {
                    window.location.href = `/war/${getLastPartOfUrl(item.url)}`;
                  } else if (category === "Personnalité") {
                    window.location.href = `/commander/${getLastPartOfUrl(item.url)}`;
                  } else if (category === "Lieu") {
                    window.location.href = `/country/${getLastPartOfUrl(item.url)}`;
                  }
                  
                }}
                >
                <img
                  src={item.image}
                  alt={item.label}
                  style={{ width: "30px", height: "30px", marginRight: "10px"}}
                />
                {item.label}
                </li>
              ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
