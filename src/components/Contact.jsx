import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      access_key: "2f8cb195-cb8b-42f6-ab05-70baa77589bb", // ✅ your Web3Forms access key
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Submission failed. Try again.");
      }
    } catch (err) {
      alert("Something went wrong.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f2f2] flex flex-col items-center px-4 py-12">
      {/* Form Section */}
      <div className="bg-[#fff0db] shadow-md rounded-lg p-8 max-w-xl w-full mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-black rounded-md  placeholder-white  focus:outline-none focus:ring-2 focus:ring-black font-bold bg-[#948979] text-white"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-black rounded-md  placeholder-white  focus:outline-none focus:ring-2 focus:ring-black font-bold bg-[#948979] text-white"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#948979]-700">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-black rounded-md  placeholder-white  focus:outline-none focus:ring-2 focus:ring-black font-bold bg-[#948979] text-white"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#948979]  py-2 px-4 rounded hover:bg-[#f2f2f2] transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        {success && (
          <p className="text-green-600 text-center mt-4">
            ✅ Message sent successfully!
          </p> 
        )}
      </div>

      {/* Info Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full ">
        <div className="bg-[#fff0db] shadow-md rounded-lg p-6 text-center">
          <div className="flex justify-center mb-2">
            <div className="bg-[#8e8271]-100 text-[#8e8271]-500 p-3 rounded-full">
              <FiPhone className="text-2xl" />
            </div>
          </div >
          <h3 className="text-lg font-semibold ">Phone No</h3>
          <p className="text-gray-700 mt-1">+91-9088432555</p>
           <p className="text-gray-700 mt-1">+91-9038227687</p>
            <p className="text-gray-700 mt-1">+91-9830974784</p>
        </div>

        <div className="bg-[#fff0db] shadow-md rounded-lg p-6 text-center">
          <div className="flex justify-center mb-2">
            <div className="bg-[#8e8271]-100 text-[#8e8271]-500 p-3 rounded-full">
              <FiMail className="text-2xl" />
            </div>
          </div>
          <h3 className="text-lg font-semibold">Email ID</h3>
          <p className="text-gray-700 mt-1">royalpg00@gmail.com</p>
        </div>

        <div className="bg-[#fff0db] shadow-md rounded-lg p-6 text-center">
          <div className="flex justify-center mb-2">
            <div className="bg-[#8e8271]-100 text-[#8e8271]-500 p-3 rounded-full">
              <FiMapPin className="text-2xl" />
            </div>
          </div>
          <h3 className="text-lg font-semibold">Address</h3>
          <p className="text-gray-700 mt-1">
           Rose Apartments, Sector V, Bidhannagar, Kolkata, West Bengal 700102
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
