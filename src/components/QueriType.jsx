export default function QueryType({ value, error, onChange }) {
  return (
    <div className="mb-4">
      <p className="mb-2 font-medium">
        Query Type <span className="text-green-700">*</span>
      </p>
      <div className="flex flex-col md:flex-row gap-3">
        {["General Enquiry", "Support Request"].map((option) => (
          <label
            key={option}
            className={`flex items-center gap-2 p-3 border rounded-md cursor-pointer
              ${value === option ? "bg-green-100 border-green-700" : "border-gray-400"}`}
          >
            <input
              type="radio"
              name="query"
              value={option}
              checked={value === option}
              onChange={onChange}
              className="scale-125 accent-green-700"
            />
            {option}
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
