import React, { useState, useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { updateInfo } from "../../store/postsSlice";

const InputBlock = ({
  customKey,
  label,
  type,
  value1,
  onChange,
  forceClass,
}) => {
  console.log(value1);
  const name = useRef(value1 || "");

  const handleInputChange = (e) => {
    name.current.value = e.target.value;
    onChange(e.target.value, customKey);
  };
  useEffect(() => {
    name.current.value = value1 || "";
  }, [value1]);
  return (
    <>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text text-xs">{label}</span>
        </div>
        <input
          ref={name}
          autoComplete="one-time-code"
          type={type ? type : "text"}
          className={`input input-sm py-4 input-bordered w-full ${forceClass}`}
          name={customKey}
          placeholder={label}
          onChange={handleInputChange}
        />
      </label>
    </>
  );
};
export default InputBlock;
