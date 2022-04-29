import { Chart } from "react-google-charts";

const DisplayPlatformStatsInAmerica = ({ videoGames }) => {
  

  function generateChartData() {
    console.log(videoGames);

    // filter the Video Games by Year
    let filteredGames = videoGames.filter((vg) => vg.year >= 2013);
    console.log("Filtered Games: ", filteredGames);

    let platforms = filteredGames.map((vg) => {
      return vg.platform;
    });



    let distinctPlatform = [...new Set(platforms)];

    console.log("Platforms: ", platforms);

    // uniq = [... Set(Array)]
    console.log("Distinct Platforms", distinctPlatform);

    // ["ps3, 10, "silver"]

    let platformArrays = distinctPlatform.map((platform) => {
      let allPlatformGames = filteredGames
        .filter((game) => game.platform === platform)
        .reduce(
          (total, currentValue) => (total = total + currentValue.northAmericaSales),
          0
        );
      // now we need to loop through allPlatformGames and sum each games global sales
      // Once we have the sum of all those gmaes global sales replace the "10"
      console.log("Platform", platform, "N. America Sales", allPlatformGames);
      return [platform, allPlatformGames, "green"];
    });
        
    console.log("PlatformArrays: ", platformArrays);

    const data = [["Platform", "Sales", { role: "style" }], ...platformArrays];
    console.log("data:", data);

    return data;
  }

  return (
    <div>
      <h1>What is the Best Game to Purchase based on Platform By N. America sales in Millions(since 2013)?</h1>
      <Chart chartType="ColumnChart" width="100%" height="400px" data={generateChartData()} />

    </div>
  );
};

export default DisplayPlatformStatsInAmerica;

  