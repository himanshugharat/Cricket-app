import React from "react";
import MatchStatus from "./MatchStatus";
import WinPercentage from "./WinPercentage.js";

const Card = ({ data, matchType }) => {
  const { matchScore, teamsWinProbability } = data;
  return (
    <>
      <MatchStatus
        scoreA={matchScore[0]}
        scoreB={matchScore[1]}
        matchType={matchType}
      />
      <WinPercentage teamsWinProbability={teamsWinProbability} />
    </>
  );
};

export default Card;
