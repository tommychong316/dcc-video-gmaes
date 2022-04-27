import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayPlatformStats from './components/DisplayPlatformStats';

function App() {
  
  
  const [videoGames, setVdieoGaems] = useState([])

  useEffect(() => {
    getAllVideoGames();
  }, []);

  async function getAllVideoGames(){
    try{
    debugger;
    const response = await axios.get('https://localhost:7260/api/games/');
    setVdieoGaems(response.data);
  } catch(ex){
      console.log(`ERROR in getVideoGames EXCEPTION: ${ex}`)
    }
  }

  return (
    <div>
     <DisplayPlatformStats videoGames={videoGames}/>
    </div>
  );
}

export default App;
