import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 w-full">
      <div className='container mx-auto'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left Side - Contact Information */}
        <div className="bg-blue-500 text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Feel free to visit our office</h3>
          <div className="mb-4">
            <h4 className="font-bold">ADDRESS:</h4>
            <p>WDS Tower, Golden Boulevard Q39, BSD City</p>
          </div>
          <div className="mb-4">
            <h4 className="font-bold">E-MAIL:</h4>
            <p>support@wds.co.id</p>
          </div>
          <div>
            <h4 className="font-bold">PHONE:</h4>
            <p>021 538 5577</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Don't Hesitate Any More</h3>
          <p className="mb-6">Get In Touch With Us</p>
          
          <form action="#" method="POST" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-lg text-gray-700"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A4.992 4.992 0 015 14c0-1.657.672-3.157 1.764-4.243A6.985 6.985 0 0012 7c1.657 0 3.157.672 4.243 1.764A6.985 6.985 0 0019 14c0 1.657-.672 3.157-1.764 4.243A6.985 6.985 0 0012 21a6.985 6.985 0 01-4.243-1.764A4.992 4.992 0 015.121 17.8z"
                    />
                  </svg>
                </div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your E-mail"
                  className="w-full px-4 py-3 border rounded-lg text-gray-700"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12V8a4 4 0 10-8 0v4M4 12h16M4 12v4a4 4 0 008 0v-4m0 0v4"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Company Name Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 border rounded-lg text-gray-700"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12v4M12 12v4m4-4v4M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </div>
            </div>

            {/* Your Topic Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Your Topic"
                className="w-full px-4 py-3 border rounded-lg text-gray-700"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12l5 5L20 7"
                  />
                </svg>
              </div>
            </div>

            {/* Your Message Input */}
            <div className="relative">
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-3 border rounded-lg text-gray-700 h-32"
              ></textarea>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4h16M4 8h16M4 12h16M4 16h16M4 20h16"
                  />
                </svg>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-transparent border border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all"
            >
              Submit Now
            </button>
          </form>
        </div>

      </div>
      </div>
    </section>
  );
};

export default ContactSection;
