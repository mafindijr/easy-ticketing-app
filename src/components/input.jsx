export const Input = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  register,
  required = false,
  error = null,
  className = '',
  ...rest
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm text-[#1F2A44] mb-1">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full p-2 border border-[#D1D5DB] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
        {...(register ? register(name, { required }) : {})}
        {...rest}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error.message || 'This field is required'}</p>
      )}
    </div>
  );
};
