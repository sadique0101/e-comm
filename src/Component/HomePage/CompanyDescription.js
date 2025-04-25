import React from 'react';

const CompanyDescription = () => {
  return (
    <div className="flex flex-col p-20 pl-32 md:flex-row w-full h-[80vh] overflow-hidden bg-gray-50">
      {/* Image Section */}
      <div className="md:w-1/2 h-[100%] relative border-4 border-gray-300 rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://m.media-amazon.com/images/I/7103ZHazZYL._AC_UY300_.jpg" // Replace with your image URL
          alt="Company"
          className="object-cover h-full w-full transition-transform duration-300 transform hover:scale-110"
        />
      </div>

      {/* Description Section */}
      <div className="md:w-1/2 h-[100%] flex items-center justify-center relative p-6 bg-white border-4 border-gray-300 rounded-lg shadow-lg ml-[-10%] mt-[-5%]  z-10">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4 transition duration-300 transform hover:-translate-y-1 animate__animated animate__fadeInDown">
            Welcome to Our Company
          </h1>
          <p className="text-lg mb-2 text-gray-700 leading-relaxed animate__animated animate__fadeInUp">
            We are an industry leader in innovative solutions, dedicated to providing exceptional services that exceed our clients' expectations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed animate__animated animate__fadeInUp delay-1s">
            Our commitment to excellence and our passion for technology drive us to create cutting-edge products that empower businesses and enhance customer experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyDescription;
