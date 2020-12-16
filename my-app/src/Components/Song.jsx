import React from 'react';

const Song = ({song}) => {
  return (
  <>{song.songTitle} - {song.songArtist}</>)
}

export default Song