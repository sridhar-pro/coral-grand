"use client"
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const JointVentureForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
    whatsapp: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with actual submit logic
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h2 className="text-center text-4xl font-semibold text-gray-700 mb-2 uppercase mt-5">
        <span className="inline-block border-t-2 border-gray-300 w-10 align-middle mr-2" />
        <span className="text-blue-600">Joint</span>
        <span className="text-gray-800"> Venture</span>
        <span className="inline-block border-t-2 border-gray-300 w-10 align-middle ml-2" />
      </h2>

      <p className="text-center bg-blue-600 text-white font-medium py-2 px-4 mt-8 rounded">
      Inviting Land Owners for a Profitable Joint Venture / Outright Purchase of your Property
      </p>

      <h3 className="text-center text-2xl font-bold text-gray-900 mt-6 mb-6">
      30 cents to 5 acre all over in tamilnadu
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <input
      name="name"
      placeholder="Name"
      value={formData.name}
      onChange={handleChange}
      className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      required
    />
    <input
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      required
    />
    <input
      name="phone"
      placeholder="Phone"
      value={formData.phone}
      onChange={handleChange}
      className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      required
    />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <select
      name="location"
      value={formData.location}
      onChange={handleChange}
      className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      required
    >
      <option value="">Select District</option>
      <option value="Ariyalur">Ariyalur</option>
        <option value="Chengalpattu">Chengalpattu</option>
        <option value="Chennai">Chennai</option>
        <option value="Coimbatore">Coimbatore</option>
        <option value="Cuddalore">Cuddalore</option>
        <option value="Dharmapuri">Dharmapuri</option>
        <option value="Dindigul">Dindigul</option>
        <option value="Erode">Erode</option>
        <option value="Kallakurichi">Kallakurichi</option>
        <option value="Kanchipuram">Kanchipuram</option>
        <option value="Kanyakumari">Kanyakumari</option>
        <option value="Karur">Karur</option>
        <option value="Krishnagiri">Krishnagiri</option>
        <option value="Madurai">Madurai</option>
        <option value="Mayiladuthurai">Mayiladuthurai</option>
        <option value="Nagapattinam">Nagapattinam</option>
        <option value="Namakkal">Namakkal</option>
        <option value="Nilgiris">Nilgiris</option>
        <option value="Perambalur">Perambalur</option>
        <option value="Pudukkottai">Pudukkottai</option>
        <option value="Ramanathapuram">Ramanathapuram</option>
        <option value="Ranipet">Ranipet</option>
        <option value="Salem">Salem</option>
        <option value="Sivaganga">Sivaganga</option>
        <option value="Tenkasi">Tenkasi</option>
        <option value="Thanjavur">Thanjavur</option>
        <option value="Theni">Theni</option>
        <option value="Thoothukudi">Thoothukudi</option>
        <option value="Tiruchirappalli">Tiruchirappalli</option>
        <option value="Tirunelveli">Tirunelveli</option>
        <option value="Tirupathur">Tirupathur</option>
        <option value="Tiruppur">Tiruppur</option>
        <option value="Tiruvallur">Tiruvallur</option>
        <option value="Tiruvannamalai">Tiruvannamalai</option>
        <option value="Tiruvarur">Tiruvarur</option>
        <option value="Vellore">Vellore</option>
        <option value="Viluppuram">Viluppuram</option>
        <option value="Virudhunagar">Virudhunagar</option>
    </select>

    <textarea
      name="message"
      placeholder="Message"
      value={formData.message}
      onChange={handleChange}
      className="border border-gray-300 rounded-lg px-4 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      rows={2}
    />
  </div>

  <div className="flex items-center space-x-2">
    <input
      type="checkbox"
      name="whatsapp"
      checked={formData.whatsapp}
      onChange={handleChange}
      className="w-4 h-4"
    />
    <label className="text-gray-700 text-sm flex items-center space-x-2">
  <FaWhatsapp className="text-green-500 w-5 h-5" /> {/* WhatsApp icon */}
  <span>I want to be contacted on WhatsApp</span>
</label>
  </div>

  <p className="text-xs text-gray-500">
    By clicking on submit, you give permission to contact you via call & SMS
  </p>

  <div className="text-center">
    <button
      type="submit"
      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gradient-to-l hover:from-blue-600 hover:to-indigo-700 transition duration-200 transform hover:scale-105"
    >
      Submit
    </button>
  </div>
</form>

    </div>
  );
};

export default JointVentureForm;
