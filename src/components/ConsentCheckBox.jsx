export default function ConsentCheckbox({ checked, error, onChange }) {
  return (
    <div className="mb-4">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          checked={checked}
          onChange={onChange}
          className="scale-125 accent-green-700"
        />
        I consent to being contacted by the team <span className="text-green-700">*</span>
      </label>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
