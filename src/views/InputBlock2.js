import React from "react";
const InputBlock2 = ({ type, register, label, field, errors, forceClass, forceClass1, placeholder }) => {
  return (
    <div className={` w-full  flex flex-col  gap-1   items-start   ${forceClass}`}>
      {label && <label className="label-text text-xs">{label}</label>}
      <input {...register(field)} type={type} placeholder={placeholder} className={`w-full input input-sm input-bordered ${forceClass1}`} />
      {errors[field] && (
        <span className="error">{errors[field].message}</span>
      )}
    </div>
  );
};
export default InputBlock2;
