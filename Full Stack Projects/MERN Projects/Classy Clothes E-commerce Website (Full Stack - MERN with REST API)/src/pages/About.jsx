import React from 'react';
import OurPolicy from '../components/OurPolicy';
const About = () => {
  return (
    <div className="about-page pt-14 px-4 sm:px-8">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-6">About Us</h1>

      <div className="max-w-3xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            Our mission is to provide high quality, thoughtfully curated collection of everyday attire.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Integrity: We operate with honesty and transparency.</li>
            <li>Innovation: We are committed to continuous improvement and creative problem-solving.</li>
            <li>Customer Focus: We prioritize the needs and satisfaction of our customers.</li>
            <li>Collaboration: We value teamwork and collective success.</li>
          </ul>
        </section>
    <OurPolicy/>
        
      </div>
    </div>
  );
};

export default About;
