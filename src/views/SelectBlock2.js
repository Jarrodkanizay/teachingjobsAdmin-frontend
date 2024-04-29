import React from "react";

const SelectBlock2 = ({ list, register, label, field, errors, forceClass, defaultValue }) => {
  return (
    <div className={` w-full  flex flex-col  gap-1   items-start   ${forceClass}`}>
      <label className="label-text text-md">{label}</label>
      <select {...register(field)} className="select select-sm select-bordered w-full font-normal" defaultValue={defaultValue}>
        {list.map((el, i) => (
          <option key={i} value={el}>
            {el}
          </option>
        ))}
      </select>
      {errors[field] && (
        <span className="error">{errors[field].message}</span>
      )}
    </div>
  );
};

export default SelectBlock2;
