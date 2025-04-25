import React from "react";

function Footer() {
  return (
    <footer className="py-10 bg-pink-400 h-[50vh] text-white text-center relative">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-60"
        
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* First Row */}
        <div className="flex flex-col md:flex-row md:space-x-6 border-b border-white pb-5 mb-5">
          {/* Email Subscription Section */}
          <div className="flex-1 pb-5 md:pb-0">
            <label className="block font-bold text-lg mb-2">
              Sign Up For Email Offers & Updates
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter Email"
                className="flex-grow p-2 text-black rounded-l-md"
              />
              <button className="bg-gray-500 hover:bg-black text-white font-bold px-4 py-2 rounded-r-md">
                SUBMIT
              </button>
            </div>
          </div>

          {/* Social Icons Section */}
          <div className="flex-1 mt-5 md:mt-0 text-center">
            <h5 className="text-lg font-semibold mb-2">Connect With Us</h5>
            <div className="flex justify-center space-x-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl">
                <i className="fa-brands fa-facebook-f"></i>
              </span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 text-white text-xl">
                <i className="fa-brands fa-twitter"></i>
              </span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white text-xl">
                <i className="fa-brands fa-pinterest-p"></i>
              </span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white text-xl">
                <i className="fa-brands fa-instagram"></i>
              </span>
            </div>
          </div>

          {/* Payment Icons Section */}
          <div className="flex-1 mt-5 md:mt-0 text-center">
            <h6 className="text-lg font-semibold mb-2">
              SECURE ORDERING & TRANSACTIONS
            </h6>
            <div className="flex justify-center space-x-4">
              <img
                src="assets/icons/visa.png"
                alt="Visa"
                className="h-10 w-16 rounded-md"
              />
              <img
                src="assets/icons/mastercard.png"
                alt="MasterCard"
                className="h-10 w-16 rounded-md"
              />
              <img
                src="assets/icons/rupay.png"
                alt="RuPay"
                className="h-10 w-16 rounded-md"
              />
              <img
                src="assets/icons/paypal.png"
                alt="PayPal"
                className="h-10 w-16 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-sm text-white mb-4">
          About us | SMF Team | Careers | Contact Us | Testimonials | Terms &
          Conditions | Disclaimer | Terms Of Use | Privacy Policy | FAQ |
          Retails Store | Franchise | Blog | Affiliate Program | Flower |
          Astrology | News | Room | Download App
        </div>

        {/* Footer Bottom */}
        <div className="text-sm text-white">
          &copy; 2020 www.hallstein.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
