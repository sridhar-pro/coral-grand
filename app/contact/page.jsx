// import React from 'react'
// import ContactForm from '../components/Contact/Contact'

// const page = () => {
//   return (
//     <>
//     <div className='py-0 lg:py-20'>
//     <ContactForm/></div>
//     </>
//   )
// }

// export default page
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="w-full px-4 py-24 mt-5 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left - Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4  uppercase">Let's Get In Touch With Us</h2>
          <p className="text-gray-600 mb-8">
            You can also reach out to us by phone or email are many variations
          </p>

          <div className="space-y-10">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaPhoneAlt className="text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone Number</p>
                <p className="font-semibold text-lg">+91 866 776 6020</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaEnvelope className="text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-semibold text-lg">splakshman24@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaMapMarkerAlt className="text-blue-500" />
              </div>
              <div>
                <p className="font-semibold">
                  No. 36, Mgr Colony, Thadagam Road, Edayarpalayam, Coimbatore, TamilNadu, 641025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
  <h2 className="text-3xl font-bold mb-2 text-gray-800">Send A Message</h2>
  <p className="text-gray-500 mb-8">
    You can also reach out to us by phone or email are many variations
  </p>

  <form className="space-y-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <input
        type="text"
        placeholder="Name"
        className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400 transition"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400 transition"
      />
      <input
        type="text"
        placeholder="Phone"
        className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400 transition"
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400 transition"
      />
    </div>

    <textarea
      placeholder="Message"
      rows={2}
      className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400 resize-none transition"
    ></textarea>

    <button
      type="submit"
      className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300"
    >
      Send Message
    </button>
  </form>
</div>

      </div>
    </div>
  );
};

export default ContactSection;
