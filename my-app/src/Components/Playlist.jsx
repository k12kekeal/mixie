import React from 'react';
import Song from './Song.jsx';

const Playlist = ({playlist, setPlaylist}) => {

  return (
    <ol>

    {playlist.map(song => (
      <li className="song" key={song.songId}><Song song={song}/></li>
    ))}
    </ol>
  )

}

export default Playlist;