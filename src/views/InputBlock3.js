import React from "react";
const InputBlock3 = ({ type, register, label, field, errors, forceClass }) => {
  return (
    <div className={`flex flex-col  gap-1   items-start   ${forceClass}`}>
      <input {...register(field)} type={type} className="w-full input input-sm input-bordered"
        placeholder={label}
      />
      {errors[field] && (
        <span className="error">{errors[field].message}</span>
      )}
    </div>
  );
};
export default InputBlock3;
