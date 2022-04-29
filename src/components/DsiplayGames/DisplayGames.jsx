import axios from "axios";
import React from "react";

const DisplayGames = ({ searchTerm, parentVideoGames, setVideoGames }) => {

  const filterVideoGames = (videoGame) => {
    console.log("video game name:", videoGame)
    let fliteredGames = parentVideoGames.filter(game => game.name == videoGame)
    setVideoGames(fliteredGames)
  };


  return (
      
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Platform</th>
          <th scope="col">Release Year</th>
          <th scope="col">Publisher</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {parentVideoGames.filter(game=>game.name.includes(searchTerm)).map(videoGame => {
          return (
            <tr>
              <td>{videoGame.name}</td>
              <td>{videoGame.platform}</td>
              <td>{videoGame.year}</td>
              <td>{videoGame.publisher}</td>
              <td>
                <button onClick={()=>filterVideoGames(videoGame.name)}>view stats</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayGames;
