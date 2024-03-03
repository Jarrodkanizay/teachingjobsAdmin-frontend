import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateInfo } from "../store/postsSlice";
const SelectBlock1 = ({  list,  label,  customKey,  value1,  onChange,  forceClass,}) => {
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
    <label className={`form-control w-full ${forceClass}`}>
      <div className="label">
        <span className="label-text text-xs">{label}</span>
      </div>
      <select
        className="select select-sm select-bordered w-full font-normal"
        //value={selectedRegion}
        ref={name}
        name={customKey}
        placeholder={label ? label : customKey}
        onChange={handleInputChange}
      >
        <option disabled selected>
          {`Select ${label}`}
        </option>
        {list.map((region, index) => (
          <option key={index} value={region}>
            {region}
          </option>
        ))}
      </select>
    </label>
  );
};
export default SelectBlock1;
{
  /* // <select
    //   ref={name}
    //   name={customKey}
    //   className={`input input-sm input-bordered ml-1`}
    //   onChange={handleInputChange}
    //   required
    // >
    //   <option
    //     className="disabled"
    //     value="Department"
    //     disabled
    //     selected
    //   >
    //     Choose Department…
    //   </option>
    //   <option value="Generalist HR">Generalist HR</option>
    //   <option value="Industrial Relations">
    //     Industrial Relations
    //   </option>
    //   <option value="HR Manager">HR Manager</option>
    //   <option value="Occupational Health & Safety">
    //     Occupational Health & Safety
    //   </option>
    //   <option value="Organisational Development">
    //     Organisational Development
    //   </option>
    //   <option value="Recruitment">Recruitment</option>
    //   <option value="Remuneration & Benefits">
    //     Remuneration & Benefits
    //   </option>
    //   <option value="Training & Development">
    //     Training & Development
    //   </option>
    //   <option value="HR Assistant">HR Assistant</option>
    //   <option value="Other">Other</option>
    // </select> */
}
