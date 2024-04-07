import React, { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Link, useNavigate } from "react-router-dom";

const SearchField = () => {
  const navigate = useNavigate();
  // Define initial list of items
  const initialItems = [
    {
      id: 0,
      name: "Automation Solution",
      path: "/automation-solution",
    },
    {
      id: 1,
      name: "Electrical Solution",
      path: "/electrical-solution",
    },
    {
      id: 2,
      name: "PCC Panels",
      path: "/electrical-solution/pcc",
    },
    {
      id: 3,
      name: "MCC Panels",
      path: "/electrical-solution/mcc",
    },
    {
      id: 4,
      name: "APFC Panels",
      path: "/electrical-solution/apfc",
    },
    {
      id: 5,
      name: "VFD Panels",
      path: "/electrical-solution/vfd",
    },
    {
      id: 6,
      name: "Soft-starter Panels",
      path: "/electrical-solution/soft-starter",
    },
    {
      id: 7,
      name: "Type-tested Panels",
      path: "/electrical-solution/type-tested",
    },
    {
      id: 8,
      name: "PDP Panels",
      path: "/electrical-solution/pdp",
    },
  ];

  // State to manage search results
  const [searchResults, setSearchResults] = useState([]);

  const handleOnSearch = (string, results) => {
    // Filter items based on input string
    const filteredItems = initialItems.filter(
      (item) =>
        item.name.toLowerCase().includes(string.toLowerCase()) ||
        item.path.toLowerCase().includes(string.toLowerCase())
    );

    // Update search results
    setSearchResults(filteredItems);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
    // here
    navigate(item.path);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <Link
        style={{
          display: "block",
          textAlign: "left",
          textDecoration: "none",
          fontFamily: "Montserrat",
        }}
        to={item.path}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={searchResults}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            placeholder="Magic Search"
          />
        </div>
      </header>
    </div>
  );
};

export default SearchField;
