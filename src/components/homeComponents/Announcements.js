import React from "react";
import { FaBullhorn } from "react-icons/fa";

const Announcements = () => {
  return (
    <div className="bg-amber-100 py-6 px-4 md:px-12 flex items-center justify-between flex-col md:flex-row text-center md:text-left gap-4">
      <div className="flex items-center text-amber-800 text-lg font-semibold">
        <FaBullhorn className="mr-2 text-2xl" />
        <span>Open Day: Saturday, May 25th • Come meet our team and explore!</span>
      </div>
      <a
        href="/events"
        className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-5 rounded-full transition duration-300"
      >
        View All Events
      </a>
    </div>
  );
};

export default Announcements;
