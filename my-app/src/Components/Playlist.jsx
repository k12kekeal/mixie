import React from "react";
import Song from "./Song.jsx";

const Playlist = ({ playlist, setPlaylist }) => {
  console.log('playlist in Playlist: ', playlist);
  return (
    <ol>
      {playlist.map((song) => {
        const newList = playlist.filter(listItem => listItem.songId !== song.songId);
        return (
          <li
          className="song"
          key={song.songId}
          onClick={(e) => {
            e.preventDefault();
            setPlaylist(newList);
          }}>
          <Song song={song} />
          </li>
          )
        }
      )}
    </ol>
  );
};

export default Playlist;
