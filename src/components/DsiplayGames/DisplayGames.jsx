import axios from "axios";
import React from "react";

const DisplayGames = ({ searchTerm, parentVideoGames }) => {
  const filterVideoGames = videoGame => {
    return videoGame.name.includes(searchTerm);
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
        {parentVideoGames.filter(filterVideoGames).map(videoGame => {
          return (
            <tr>
              <td>{videoGame.name}</td>
              <td>{videoGame.platform}</td>
              <td>{videoGame.year}</td>
              <td>{videoGame.publisher}</td>
              <td>
                <button type="submit">view stats</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayGames;
