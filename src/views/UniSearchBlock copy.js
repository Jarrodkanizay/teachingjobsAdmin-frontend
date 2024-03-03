import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateInfo } from "../store/postsSlice";
import {
  useGetEmployerSuggestionsQuery,
} from "../store/apiSlice";
const UniSearchBlock = ({ register,country, label, customKey,  forceClass, }) => {
  const countryRef = useRef('');
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const inputRef = useRef();
  const { data: suggestions = [] } = useGetEmployerSuggestionsQuery({ query, country: countryRef.current || "" }, {
  });
  const handleInputClick = () => {
    setShowSuggestions(true);
  };
  const handleSuggestionClick = (selectedSuggestion) => {
    setQuery(selectedSuggestion.company_name);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const handleInputChange = (e) => {
    //inputRef.current.value = e.target.value;
    console.log(e.target.value)
    setQuery(e.target.value)

  };

  return (
    <div>
      <input
        {...register(label)}
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleInputChange}
        onClick={handleInputClick}
        //placeholder="Type at least 3 characters..."
        // className="w-full font-normal py-1 px-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        className={`input input-sm input-bordered ${forceClass}`}
        autoComplete="one-time-code"
        name={customKey}
        placeholder={customKey}
        //onChange={handleInputChange}
      />
      {showSuggestions && (
        <ul className="mt-2 list-none">
          {suggestions.map(({ company_name, counrty }, index) => (
            <li
              key={index}
              className="w-full py-1 px-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick({ company_name, country })}
            >
              <div className="w-[100%]">{company_name}</div>
              {/* <div className="w-[40%]">{counrty}</div> */}
            </li>
          ))}
        </ul>)}
    </div>
  );
};
export default UniSearchBlock