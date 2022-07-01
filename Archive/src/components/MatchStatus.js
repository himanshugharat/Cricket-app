import React from "react";

const MatchStatus = ({ scoreA, scoreB, matchType }) => {
  return (
    <>
      <div className="bg-gray-900 w-55">
        <div className="flex justify-around items-center py-5 m-2">
          <div>{scoreA.teamShortName}</div>
          <div className="border-2 py-1 px-2 rounded-2xl border-green-500">
            {matchType}
          </div>
          <div>{scoreB.teamShortName}</div>
        </div>
      </div>
    </>
  );
};

export default MatchStatus;
