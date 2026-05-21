import React from 'react';

interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;        // ← Add your preferred color here
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      className={`
        px-6 py-2.5 
        font-semibold 
        transition-all 
        active:scale-95 
        hover:opacity-90
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2
        ${className}        
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;