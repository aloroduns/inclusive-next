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