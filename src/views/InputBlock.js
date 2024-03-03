import React, { useState, useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { updateInfo } from "../store/postsSlice";
const InputBlock = ({ customKey, value1, onChange, forceClass }) => {
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
    <input
      ref={name}
      autoComplete="one-time-code"
      type="text"
      className={`input input-sm input-bordered ${forceClass}`}
      name={customKey}
      placeholder={customKey}
      onChange={handleInputChange}
    />
  );
};
export default InputBlock;
