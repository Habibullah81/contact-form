export default function NameInputs({ values, errors, onChange }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="block mb-1 font-medium" htmlFor="firstName">
          First Name <span className="text-green-700">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={values.firstName}
          onChange={onChange}
          className={`w-full rounded-md border p-3 
            ${errors.firstName ? "border-red-500" : "border-gray-400"} 
            focus:outline-none focus:ring-2 focus:ring-green-700`}
        />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium" htmlFor="lastName">
          Last Name <span className="text-green-700">*</span>
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={values.lastName}
          onChange={onChange}
          className={`w-full rounded-md border p-3 
            ${errors.lastName ? "border-red-500" : "border-gray-400"} 
            focus:outline-none focus:ring-2 focus:ring-green-700`}
        />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
      </div>
    </div>
  );
}
