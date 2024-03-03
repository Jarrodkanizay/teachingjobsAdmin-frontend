import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateInfo } from "../store/postsSlice";
const CheckBoxBlock = ({ customKey, value1, onChange, forceClass }) => {
  console.log(value1);
  const name = useRef(null );
  const handleInputChange = (e) => {
    name.current.value = e.target.checked
    onChange(e.target.checked, customKey);
  };
  useEffect(() => {
    name.current.checked = value1 === 1;
  }, [value1]);
  return (
    <input
      ref={name}
      name={customKey}
      onChange={handleInputChange}
      type="checkbox"
      className="checkbox checkbox-xs checkbox-warning"
    />
  );
};
export default CheckBoxBlock;
