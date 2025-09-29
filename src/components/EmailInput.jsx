export default function EmailInput({ value, error, onChange }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium" htmlFor="email">
        Email Address <span className="text-green-700">*</span>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={value}
        onChange={onChange}
        className={`w-full rounded-md border p-3 
          ${error ? "border-red-500" : "border-gray-400"} 
          focus:outline-none focus:ring-2 focus:ring-green-700`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
