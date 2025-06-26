export const Button = ({
  children,
  onClick,
  type = 'button',
  loading = false,
  disabled = false,
  className = '',
  ...rest
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`
        rounded-[8px] transition-all duration-200 cursor-pointer
        ${isDisabled ? 'opacity-60 cursor-not-allowed' : ''}
        ${className}
      `}
      {...rest}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};
