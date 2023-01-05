import React, { useState } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const SubscriberForm = () => {
    const [form, setForm] = useState({
        fullname: '',
        email: '',
    });

const submitForm = (e) => {
    e.preventDefault();
};

const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    });
};

return (
    <form className="space-y-3 max-w-lg mx-auto p-5" onSubmit={submitForm}>
        <p className="font-semibold text-2xl text-center">Subscriber Form</p>
        <label className="block">
            <span className="text-gray-700 font-semibold">Full Name</span>
            <input
                name="Full Name"
                type="text"
                className="form-input form-field-contact"
                placeholder="Full Name"
                onChange={handleChange}
            />
        </label>
        <label className="block">
            <span className="text-gray-700 font-semibold">Email</span>
            <input
                name="email"
                type="email"
                className="form-input form-field-contact"
                placeholder="Email"
                onChange={handleChange}
            />
        </label>
        <button
        className="bg-green-200 px-3 py-1 font-semibold shadow-md rounded-md"
        type="submit"
        >
        Send Message
      </button>
    </form>
  );
};

export default SubscriberForm;

//config variables
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY;

// GoogleSpreadsheet Initialize
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

// Append Function
const appendSpreadsheet = async (row) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: GOOGLE_CLIENT_EMAIL,
            private_key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        })
    }finally {
        // code that will always be executed
      }
      
};

//loads document properties and worksheets
await doc.loadInfo();

const sheet = doc.sheetsById[SHEET_ID];
await sheet.addRow(row);
try {
    // code that might throw an exception
  } finally {
    // code that will always be executed
  }  
} catch (e) {
console.error('Error: ', e);
}
};

const submitForm = (e) => {
e.preventDefault();

if (
form.name !== '' &&
form.email !== '' &&
form.topic !== '' &&
form.description !== ''
) {

// Data add for append
const newRow = {
  FullName: form.name,
  Email: form.email,
  Topic: form.topic,
  Description: form.description,
};

appendSpreadsheet(newRow);
}
};