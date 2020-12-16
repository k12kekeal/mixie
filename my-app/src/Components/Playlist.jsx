import React from 'react';
import Song from './Song.jsx';

const Playlist = ({playlist, setPlaylist}) => {

  return (
    <ul>

    {playlist.map(song => (
      <li className="song" key={song.songId}><Song song={song}/></li>
    ))}
    </ul>
  )

}

export default Playlist;