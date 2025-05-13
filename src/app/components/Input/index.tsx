type InputProps = {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const CustomInput = ({ placeholder, onChange, value }: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="bg-gray-500 w-100 h-10 p-4 colors-gray-900 rounded-md shadow-md focus:outline-none focus:border-none placeholder-gray-800 text-gray-900"
      onChange={onChange}
      value={value}
    />
  );
};
export default CustomInput;
