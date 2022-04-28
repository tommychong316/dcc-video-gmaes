import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayPlatformStats from "./components/DisplayPlatformStats";
import "./App.css";
import SearchBar from "./components/Searchbar/SearchBar";
import DisplayGames from "./components/DsiplayGames/DisplayGames";

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
      
        <h3 style={{margin: '1em'}}>GAME STATS</h3>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <DisplayPlatformStats searchTerm={searchTerm} videoGames={videoGames} />
          <div className="border-box">
          <DisplayGames parentVideoGames={videoGames} />
          
          </div>
     
    </div>
  );
}

export default App;
