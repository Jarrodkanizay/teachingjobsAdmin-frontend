import React from "react";
const InputBlock2 = ({ type, register, label, field, errors, forceClass }) => {
  return (
    <div className={` w-full  flex flex-col  gap-1   items-start   ${forceClass}`}>
      
      <input {...register(field)} type={type} placeholder={label} className="w-full input input-sm bg-gray-200" />
      {errors[field] && (
        <span className="error">{errors[field].message}</span>
      )}
    </div>
  );
};
export default InputBlock2;
