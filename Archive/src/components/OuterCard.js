import React from "react";
import Card from "./Card";
import MatchHeader from "./MatchHeader";

const OuterCard = ({ data }) => {
  const { seriesName, matches, matchType, league } = data;
  console.log({ matches });
  return (
    <div>
      <div className="dark:bg-gray-700 rounded-md py-1 mb-1">
        <div className="py-1 px-3">
          <span className="bg-red-700 text-white p-1 m-1">{league[0]}</span>
          {seriesName}
        </div>
      </div>

      <div className="overflow-scroll  gap-4 mb-4 flex">
        {matches.map((match, index) => (
          <div className="w-full rounded  shadow-lg dark:bg-gray-700 p-3">
            <MatchHeader numberMatch={index} matchType={matchType} />
            <Card key={index} data={match} matchType={matchType} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OuterCard;
