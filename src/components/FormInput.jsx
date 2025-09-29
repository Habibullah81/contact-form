import React from "react";

export default function FormInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  placeholder,
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl border
          ${error ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-green-200"}
          focus:outline-none focus:ring-2 transition`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />

      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
