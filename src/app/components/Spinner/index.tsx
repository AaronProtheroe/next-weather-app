import React from "react";

interface SpinnerProps {
  label?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ label = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div
        className={`h-16 w-16 border-4 border-gray-200 rounded-full border-t-transparent animate-spin`}
        role="status"
        aria-label={label}
      />
    </div>
  );
};

export default Spinner;
