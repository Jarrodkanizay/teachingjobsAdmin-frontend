import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateInfo } from "../store/postsSlice";
import {
  useGetEmployerSuggestionsQuery,
} from "../store/apiSlice";
import { setJob, setId, setEmployer } from '../store/postsSlice'

const UniSearchBlock = ({ field, register, country, label, customKey, value1, onChange, forceClass, onSelect }) => {
  const countryRef = useRef('');
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(value1 || '');
  const { data: suggestions = [] } = useGetEmployerSuggestionsQuery({ query, country: country  || "" }, {
  });
  const handleInputClick = () => {
    setShowSuggestions(true);
    
  };
  const handleSuggestionClick = (company_name, id, Region, country, logo, employerPageURL, clientType) => {
    setQuery(company_name);
    dispatch(setEmployer({ company_name, employer_id: id, logo, employerPageURL, clientType }))
    onChange(company_name, id || 0, Region, country, logo, employerPageURL, clientType);
    onSelect && onSelect(company_name, id || 0, Region, country, logo, employerPageURL, clientType);
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
    setShowSuggestions(true);
    setQuery(e.target.value)
    onChange(e.target.value, 0,"","","");
  };
  useEffect(() => {
    //inputRef.current.value = value1 || '';
    setQuery(value1 || '')
  }, [value1]);
  return (
    <div className="w-full">
      <input
        {...register(field)}
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleInputChange}
        onClick={handleInputClick}
        //placeholder="Type at least 3 characters..."
        // className="w-full font-normal py-1 px-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        className={`w-full input input-sm input-bordered ${forceClass}`}
        autoComplete="one-time-code"
        name={customKey}
        placeholder={customKey}
        //onChange={handleInputChange}
      />
      {showSuggestions && (
        <ul className="mt-2 list-none">
          {suggestions.map(({ company_name, id, Region, country, logo, employerPageURL, clientType }, index) => (
            <li
              key={index}
              className="w-full py-1 px-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(company_name, id, Region, country, logo, employerPageURL, clientType )}
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