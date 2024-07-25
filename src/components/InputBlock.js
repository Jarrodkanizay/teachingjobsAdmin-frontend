import React from 'react';

const InputBlock = React.forwardRef(({
  ID,
  name,
  type,
  register,
  label,
  field,
  errors,
  forceClass,
  autoComplete,
  placeholder,
  tabIndex,
  required = false,
  hidden,
  showLabel = false,
  disabled = false,
  defaultValue = '',
}, ref) => {
  return (
    <div className={`w-full flex flex-col gap-1.5 items-start ${forceClass}`}>
      {!hidden && <label htmlFor={ID} className="label-text text-xs">{label}</label>}
      {showLabel && <label htmlFor={ID} className="label-text text-xs">{label}</label>}
      <input
        tabIndex={tabIndex}
        {...register(field)}
        type={type}
        className="w-full input input-md input-bordered focus:outline-none focus:border-orange-500"
        autoComplete={autoComplete}
        placeholder={placeholder}
        hidden={hidden}
        required={required}
        disabled={disabled}
        defaultValue={defaultValue}
      />
      {errors[field] && <span className="error">{errors[field].message}</span>}
    </div>
  );
});

export default InputBlock;
