import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateInfo } from "../store/postsSlice";
const SelectBlock = ({ list, label, customKey, value1, onChange }) => {
  console.log(value1);
  const name = useRef(value1);
  const handleInputChange = (e) => {
    name.current.value = e.target.value;
    onChange(e.target.value, customKey);
  };
  useEffect(() => {
    name.current.value = value1;
  }, [value1]);
  return (
    <>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">{label}=================</span>
        </div>
        <select
          ref={name}
          value={value1}
          name={customKey}
          placeholder={label ? label : customKey}
          onChange={handleInputChange}
          className="block w-full py-2 px-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm"
        >
          {/* <option disabled selected>
            {`Select ${label}`}
          </option> */}
          {list.map((region, index) => (
            <option key={index} value={region}>
              {region}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};
export default SelectBlock;
