export default function MessageInput({ value, error, onChange }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium" htmlFor="message">
        Message <span className="text-green-700">*</span>
      </label>
      <textarea
        id="message"
        name="message"
        value={value}
        onChange={onChange}
        className={`w-full rounded-md border p-3 min-h-[120px] 
          ${error ? "border-red-500" : "border-gray-400"} 
          focus:outline-none focus:ring-2 focus:ring-green-700`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
