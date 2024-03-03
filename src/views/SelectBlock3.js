import React from "react";
const SelectBlock2 = ({ list, register, label, field, errors, forceClass }) => {
  return (
    <div className={` w-full  flex flex-col  gap-1   items-start   ${forceClass}`}>

      <select {...register(field)} className="select select-sm select-bordered w-full font-normal"  >
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
