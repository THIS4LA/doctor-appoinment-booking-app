/* eslint-disable react/prop-types */
import React from "react";
import convertTime from "../../utils/convertTime";

const SidePanel = ({ticketPrice, timeSlots}) => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md bg-slate-300">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          Rs.{ticketPrice || "N/A"}
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>
        <ul className="mt-3">
        {timeSlots && timeSlots.length > 0 ? (
            timeSlots.map((item, index) => (
              <li key={index} className="flex items-center justify-between mb-2">
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
                </p>
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
                </p>
              </li>
            ))
          ) : (
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              No available time slots.
            </p>
          )}
          
        </ul>
      </div>

      <button className="btn px-2 w-full rounded-md">Book Appointment</button>
    </div>
  );
};

export default SidePanel;
