import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayPlatformStats from "./components/DisplayPlatformStats";
import "./App.css";
import SearchBar from "./components/Searchbar/SearchBar";
import DisplayGames from "./components/DsiplayGames/DisplayGames";
import Navbar from "./components/NavBar/NavBar";
import DisplayPlatformStatsInAmerica from "./DisplayPlatformStatsInAmerica";



function App() {
  const [videoGames, setVideoGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState([""])
  
  useEffect(() => {
    getAllVideoGames();
  }, []);

  async function getAllVideoGames() {
    try {
      debugger;
      const response = await axios.get("https://localhost:7260/api/games/");
      setVideoGames(response.data);
    } catch (ex) {
      console.log(`ERROR in getVideoGames EXCEPTION: ${ex}`);
    }
  }






  return (
    <div className="container">
      <div className="row"/>
          <Navbar />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <DisplayPlatformStats videoGames={videoGames} />
          <DisplayPlatformStatsInAmerica videoGames={videoGames} />


          <div className="border-box">
          <DisplayGames searchTerm={searchTerm} parentVideoGames={videoGames} setVideoGames={setVideoGames} />
          
          </div>
     
    </div>
  );
}

export default App;
