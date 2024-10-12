import React, { ReactNode } from 'react';

interface InputFieldProps {
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon: ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({ type, value, onChange, placeholder, icon }) => {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        placeholder={placeholder}
        className="w-full mt-2 pl-10 pr-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-primary"
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        {icon}
      </div>
    </div>
  );
};

export default InputField;
