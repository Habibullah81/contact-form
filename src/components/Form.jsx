import { useState } from "react";
import NameInputs from "./NameInput";
import EmailInput from "./EmailInput";
import QueryType from "./QueriType";
import MessageInput from "./MassageInput";
import ConsentCheckbox from "./ConsentCheckBox";
import SubmitButton from "./SubmitButton";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  query: "",
  message: "",
  consent: false,
};

export default function Form() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function handleChanges(e) {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function validateForm() {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let formErrors = {};

    if (!values.firstName) formErrors.firstName = "This field is required";
    if (!values.lastName) formErrors.lastName = "This field is required";
    if (!values.message) formErrors.message = "This field is required";
    if (!values.email) {
      formErrors.email = "This field is required";
    } else if (!regex.test(values.email)) {
      formErrors.email = "Please enter a valid email address";
    }
    if (!values.query) formErrors.query = "Please select a query type";
    if (!values.consent) {
      formErrors.consent = "To submit this form, please consent to being contacted";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  }

  function submitForm(e) {
    e.preventDefault();
    if (validateForm()) {
      setSuccess(true);
      setValues(initialValues);
      setTimeout(() => setSuccess(false), 3000);
    }
  }

  return (
    <main className="bg-white rounded-xl p-6 md:p-10 max-w-2xl mx-auto shadow-md">
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>

      {success && (
        <div className="mb-5 p-4 bg-green-700 text-white rounded-md">
          <h2 className="font-semibold text-lg">✅ Message Sent!</h2>
          <p className="text-green-100">Thanks for completing the form. We'll be in touch soon!</p>
        </div>
      )}

      <form onSubmit={submitForm}>
        <NameInputs values={values} errors={errors} onChange={handleChanges} />
        <EmailInput value={values.email} error={errors.email} onChange={handleChanges} />
        <QueryType value={values.query} error={errors.query} onChange={handleChanges} />
        <MessageInput value={values.message} error={errors.message} onChange={handleChanges} />
        <ConsentCheckbox checked={values.consent} error={errors.consent} onChange={handleChanges} />
        <SubmitButton />
      </form>
    </main>
  );
}
