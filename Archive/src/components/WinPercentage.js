import React from "react";

const WinPercentage = ({ teamsWinProbability }) => {
  const { homeTeamPercentage, awayTeamPercentage } = teamsWinProbability;
  return (
    <div style={{ width: "270px" }}>
      <div>Win Percentage</div>
      <div className=" bg-gray-200 h-2 mb-2 mt-2 rounded-lg">
        <div
          className="bg-green-500 h-2 rounded-l-lg"
          style={{ width: `${homeTeamPercentage}%` }}
        ></div>
      </div>
      <div className="text-xs flex justify-between items-center">
        <li>IND({homeTeamPercentage}%)</li>
        <li>SA({awayTeamPercentage}%)</li>
      </div>
    </div>
  );
};

export default WinPercentage;
