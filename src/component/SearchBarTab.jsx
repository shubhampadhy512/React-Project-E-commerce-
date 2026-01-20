import React, { useState, useEffect } from "react";
import "./SearchTab.css";
import { useDispatch } from "react-redux";
import { Tyesofproduct } from "../features/infoItem";
import { memo, useCallback } from "react";

function SearchBarTab({ onFocus, onClose, searchOpen, onSearchSelect }) {
  const [text, setText] = useState("");
  const [suggestion, setSuggestions] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (text.trim().length < 2) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${text}&limit=5`
        );
        const data = await res.json();
        setSuggestions(data.products);
      } catch (err) {
        console.error(err);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [text]);
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" && text.trim()) {
        const slug = text.trim().toLowerCase().replace(/\s+/g, "-");

        setSuggestions([]);
        dispatch(Tyesofproduct(slug));

        onSearchSelect?.(slug);
        onClose?.();
      }
    },
    [text, dispatch, onSearchSelect, onClose]
  );

  const searchobject = useCallback(
    (item) => {
      const slug = item.category
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-");

      setText(item.title);
      setSuggestions([]);
      dispatch(Tyesofproduct(slug));

      onSearchSelect?.(slug);
      onClose?.();
    },
    [dispatch, onSearchSelect, onClose]
  );


  return (
    <div className="search-component">
      <div className="search-container">
        <input
          type="text"
          value={text}
          onFocus={onFocus}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search products..."
        />
        <button>🔍</button>
      </div>

      <div className="suggestion-outer-container">
        {searchOpen && suggestion.length > 0 && (
          <div className="suggestion-container">
            <ul>
              {suggestion.map((item) => (
                <li
                  key={item.id}
                  onClick={() => searchobject(item)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(SearchBarTab);
