import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetJobKeywordSuggestionsQuery } from "../store/apiSlice";
const UniSearchBlock = ({
  field,
  country,
  label,
  customKey,
  value1,
  onSelect,
  onInputChange,
  forceClass,
}) => {
  const countryRef = useRef("");
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(value1 || "");
  const { data: suggestions = [] } = useGetJobKeywordSuggestionsQuery({ query });
  const handleInputClick = () => {
    setShowSuggestions(true);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleInputChange = (e) => {
    //inputRef.current.value = e.target.value;
    setShowSuggestions(true);
    setQuery(e.target.value);
    //leonInputChange(e.target.value);
  };
  useEffect(() => {
    //inputRef.current.value = value1 || '';
    setQuery(value1 || "");
  }, [value1]);
  return (
    <div className="w-full bg-white ">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleInputChange}
        onClick={handleInputClick}
        //placeholder="Type at least 3 characters..."
        // className="w-full font-normal py-1 px-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        className={`w-full input input-md input-bordered focus:outline-none focus:border-orange-500 `}
        autoComplete="one-time-code"
        name={customKey}
        placeholder={label}
      //onChange={handleInputChange}
      />
      {showSuggestions && (
        <ul className="mt-2 list-none z-10">
          {suggestions.map(
            (
              {
                category1,
                realCtg,
                category2, category01, category01A, category02, category02A,link
              },
              index
            ) => (
              <li
                key={index}
                className="bg-white  w-full py-1 px-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  console.log("category21", category2)
                  setQuery(category2);
                  //alert(link)
                  onSelect(realCtg,  category2, category01, category01A, category02, category02A,link)
                }}
              >
                <div className="w-[100%]"><span className="text-sm font-bold">{category2}</span>{category1 && <span className="text-xs">{` (${category1})`}</span>}</div>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};
export default UniSearchBlock;
