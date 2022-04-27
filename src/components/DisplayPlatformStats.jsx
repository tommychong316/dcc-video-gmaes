import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";



const DisplayPlatformStats = ({videoGames}) => {
    
    function generateChartData(){
        console.log(videoGames);
        
        // filter the Video Games by Year
        let filteredGames = videoGames.filter(vg => vg.year >= 2013);
        console.log(filteredGames);

        
        const data = [
            ["Platform", "Sales", { role: "style" }],
            ["PS3", 8.94, "#b87333"], // RGB value
            ["Silver", 10.49, "silver"], // English color name
            ["Gold", 19.3, "gold"],
            ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
          ];

        return data;
    }

    return ( 
        <div>
            <h1>Platform By Global sales in Millions</h1>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateChartData()} />


        </div>
     );
}
 
export default DisplayPlatformStats;