import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  onSearch: (query: string) => void;
  suggestions: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, suggestions = [] }) => {
  const [query, setQuery] = React.useState("");
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

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(query.toLowerCase())
  );

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
      <div style={{ display: "flex", width: "100%"}}>
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
      {showSuggestions && query && filteredSuggestions.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "5%",
            right: 0,
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "0 0 4px 4px",
            maxHeight: "200px",
            width: "90%",
            overflowY: "auto",
            margin: 0,
            padding: "10px",
            zIndex: 10,
          }}
        >
          {Object.entries(filteredSuggestions.reduce((acc, suggestion) => {
            const category = suggestion.split(' ')[0]; // Assuming category is the first word
            if (!acc[category]) acc[category] = [];
            acc[category].push(suggestion);
            return acc;
          }, {} as Record<string, string[]>)).map(([category, suggestions]) => (
            <div key={category} style={{ marginBottom: "10px" }}>
              <h4 style={{ margin: "5px 0" }}>{category}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {suggestions.map((suggestion, index) => (
              <li
            key={index}
            style={{
              padding: "10px",
              cursor: "pointer",
              borderBottom: "1px solid #f0f0f0",
            }}
            onClick={() => {
              setQuery(suggestion);
              setShowSuggestions(false);
            }}
              >
            {suggestion}
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
