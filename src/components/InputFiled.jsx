import React from "react";

function InputField({ label, name, type = "text", value, onChange, error, required = false }) {
  return (
    <div className="flex flex-col mb-4 w-full">
      <label htmlFor={name} className="mb-2 font-medium">
        {label}
        {required && <span className="text-emerald-700 ml-1">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full border rounded-md p-3 focus:outline-none focus:ring-2 ${
            error ? "border-red-500" : "border-gray-400 focus:ring-emerald-800"
          }`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className={`w-full border rounded-md p-3 focus:outline-none focus:ring-2 ${
            error ? "border-red-500" : "border-gray-400 focus:ring-emerald-800"
          }`}
        />
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default InputField;
