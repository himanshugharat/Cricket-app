import "./App.css";
import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import OuterCard from "./components/OuterCard";
function App() {
  const query = gql`
    {
      newSchedule(type: "all", status: "upcoming", page: 1) {
        matches {
          teamsWinProbability {
            homeTeamPercentage
            awayTeamPercentage
            tiePercentage
          }
          matchScore {
            teamID
            teamScore {
              inning
              inningNumber
              battingTeam
              runsScored
              wickets
              overs
              runRate
              battingSide
              teamID
              battingTeamShortName
              declared
              folowOn
            }
            teamShortName
          }
        }
        seriesName
        seriesID
        matchType
        league
        seriesView
        seriesAvailable
      }
    }
  `;
  const [filterType, setfilterType] = useState("");
  const { data, loading, error } = useQuery(query);
  console.log({ data });
  if (loading) {
    return <h1>loading</h1>;
  }
  if (error) {
    return <h1>"error"</h1>;
  } else {
    return (
      <div className=" p-3 mb-3">
        <div class="flex items-center justify-center m-2">
          <div
            class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
            role="group"
          >
            <button
              type="button"
              class="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
              onClick={() => setfilterType("")}
            >
              All
            </button>
            <button
              type="button"
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
              onClick={() => setfilterType("International")}
            >
              Inter National
            </button>
            <button
              type="button"
              class=" rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
              onClick={() => setfilterType("Domestic")}
            >
              Domestic
            </button>
          </div>
        </div>

        <div className="overflow-scroll  gap-4 ">
          {/* <Card key={index} data={item} /> */}
          {data.newSchedule
            .filter((match) => match.league.includes(filterType))
            .map((item, index) => (
              <OuterCard key={index} data={item} />
            ))}
        </div>
      </div>
    );
  }
}
export default App;
// query {
//   schedule{
//     newSchedule(type:"All",status:"upcoming",page:1){
//       matches{
//         teamWinProbability
//         matchScore
//       }
//       seriesID
//       matchType
//       seriesName
//       seriesView
//       league
//       seriesAvailable

//     }
// }
