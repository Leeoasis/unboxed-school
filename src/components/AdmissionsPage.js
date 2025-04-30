import React from "react";

const AdmissionsPage = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-20 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-emerald-800 mb-6 text-center">Admissions</h1>
      <p className="text-lg mb-4">
        We welcome children between the ages of 4 and 12 who are on the autism spectrum and seek a structured, Christian learning environment.
      </p>
      <h2 className="text-2xl font-semibold text-amber-600 mt-8 mb-2">How to Apply:</h2>
      <ul className="list-disc list-inside text-lg space-y-2">
        <li>Fill out the online application form</li>
        <li>Schedule an interview/assessment with the school</li>
        <li>Submit supporting documents</li>
        <li>Receive confirmation and start date</li>
      </ul>
      <p className="mt-6 text-lg">For more info, please <a href="/contact" className="text-emerald-600 underline">contact us</a>.</p>
    </div>
  );
};

export default AdmissionsPage;
