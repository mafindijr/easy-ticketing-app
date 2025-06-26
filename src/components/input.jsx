import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export const Input = ({
  label,
  name,
  type = "text",
  placeholder = "",
  register,
  required = false,
  error = null,
  className = "",
  prefixIcon: PrefixIcon,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";

  return (
    <div className="mt-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-montserrat text-[#1F2A44] mb-1"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {PrefixIcon && (
          <span className="absolute left-3 text-[#9CA3AF]">
            <PrefixIcon size={18} />
          </span>
        )}

        <input
          id={name}
          name={name}
          type={isPasswordField && showPassword ? "text" : type}
          placeholder={placeholder}
          className={`
            w-full p-2 ${PrefixIcon ? "pl-10" : "pl-2"} pr-10 border 
            border-[#D1D5DB] text-[#6B7280] text-base font-montserrat 
            rounded-[4px] focus:outline-none focus:ring-1 focus:ring-[#6B7280] 
            ${className}
          `}
          {...(register ? register(name, { required }) : {})}
          {...rest}
        />

        {isPasswordField && (
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 cursor-pointer"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        )}
      </div>

      {error && (
        <p className="text-red-500 text-xs mt-1">
          {error.message || "This field is required"}
        </p>
      )}
    </div>
  );
};
