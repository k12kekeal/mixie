import React from "react";
import Song from "./Song.jsx";

const Playlist = ({ playlist, setPlaylist }) => {
  if (playlist.length === 0) {
    return <p></p>;
  } else {
    return (
      <>
      <ol>
        {playlist.map((song) => {
          const newList = playlist.filter(
            (listItem) => listItem.songId !== song.songId
          );
          return (
            <li
              className="song"
              key={song.songId}
              onClick={(e) => {
                e.preventDefault();
                setPlaylist(newList);
              }}
            >
              <Song song={song} />
            </li>
          );
        })}
      </ol>
      <button>Make my Mixie</button>
      </>
    );
  }
};

export default Playlist;
