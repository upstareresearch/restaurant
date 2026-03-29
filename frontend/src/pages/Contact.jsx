import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import emailjs from "@emailjs/browser"
import { useState } from "react";

const Contact = () => {

  // state
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // emailjs keys 
  const publickey = import.meta.env.VITE_PUBLIC_KEY
  const templateId = import.meta.env.VITE_TEMPLATE_ID
  const serviceId = import.meta.env.VITE_SERVICE_ID

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // emailjs send process
  const sendEmail = (e) => {
    e.preventDefault();
    try {
      emailjs.send(serviceId, templateId, form, publickey).then((res) => {
        if (res.text === "OK") {
          alert("Message send successfully✅")
        }
      })
      console.log("this is data", form)

    } catch (error) {
      alert("Message send failed try again❌")
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-5xl  rounded-xl shadow-2xl border border-gray-200 p-8 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold text-green-600 font-serif">
            Get in Touch with Ashok-Yadav
          </h2>
          <div>
            <h3 className="text-lg font-semibold text-gray-400">Call Us:</h3>
            <p className="text-gray-300">+ 91-1234567890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-400">Location:</h3>
            <p className="text-gray-300">Bhopal madhya pradesh</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-400">
              Top Services:
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Recipe Consultation</li>
              <li>Online Cooking Classes</li>
              <li>Personal Chef Booking</li>
            </ul>
          </div>

          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.ashok-dev.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 text-gray-100 hover:bg-green-500 hover:text-white rounded-full p-3 transform hover:scale-110 transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.ashok-dev.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 text-gray-100 hover:bg-green-500 hover:text-white rounded-full p-3 transform hover:scale-110 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.ashok-dev.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 text-gray-100 hover:bg-green-500 hover:text-white rounded-full p-3 transform hover:scale-110 transition duration-300"
            >
              <IoEarth />
            </a>
            <a
              href="https://www.ashok-dev.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 text-gray-100 hover:bg-green-500 hover:text-white rounded-full p-3 transform hover:scale-110 transition duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold text-green-600 font-serif">
            Contact Form
          </h2>
          <form onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-1" htmlFor="fullname">
                Full Name
              </label>
              <input
                onChange={handleChange}
                value={form.name}
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                id="fullname"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1" htmlFor="email">
                Email
              </label>
              <input
                onChange={handleChange}
                value={form.email}
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                onChange={handleChange}
                value={form.message}
                name="message"
                id="message"
                required
                placeholder="Write your message..."
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;