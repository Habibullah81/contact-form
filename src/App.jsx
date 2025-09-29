import React, { useState } from "react";
import ContactForm from "./components/Form";

function App() {
  const [successData, setSuccessData] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-100">
      <main className="w-[calc(100%-2rem)] max-w-[740px] bg-white mx-auto my-8 p-6 md:p-10 md:my-12 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6">Contact Us</h1>

        {successData && (
          <div className="success-container fixed top-4 left-1/2 -translate-x-1/2 bg-emerald-900 text-white px-6 py-4 rounded-lg shadow-lg">
            <h2 className="flex items-center gap-2 font-semibold text-lg">
               Message Sent!
            </h2>
            <p className="text-emerald-200">
              Thanks {successData.firstName}, we’ll be in touch soon.
            </p>
          </div>
        )}

        <ContactForm onSuccess={(data) => setSuccessData(data)} />

        <footer className="text-center mt-6 text-sm text-gray-600">
        {" "}
          <a
            href="https://www.frontendmentor.io"
            className="underline hover:text-emerald-700"
          >
       
          </a>
       
        </footer>
      </main>
    </div>
  );
}

export default App;
