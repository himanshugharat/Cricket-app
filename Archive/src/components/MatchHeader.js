import React, { useEffect, useState } from "react";

const MatchHeader = ({ matchType, numberMatch }) => {
  const [timeth, setTimeth] = useState("th");
  useEffect(() => {
    if (numberMatch == 1) {
      setTimeth("st");
    } else if (numberMatch == 2) {
      setTimeth("nd");
    } else if (numberMatch == 3) {
      setTimeth("rd");
    } else {
      setTimeth("th");
    }
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center ">
        <div>
          <div className="flex gap-1 items-center">
            <div className="text-sm break-normal">
              {numberMatch + 1}
              {timeth} {matchType}
            </div>{" "}
            <span className="inline-block bg-sky-300 opacity-20 rounded-full px-3  text-xs font-semibold text-gray-700 mr-2 uppercase">
              <div className="m-0 ">{"upcomming"}</div>
            </span>
          </div>
          <div className="text-xs">
            <li>{"venue"}</li>
          </div>
        </div>
        <div className="bg-gray-900 p-2 m-1 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MatchHeader;
