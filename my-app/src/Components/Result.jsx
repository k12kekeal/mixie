const Result = ({result, setPlaylist, playlist}) => {
  return (
    <li
      className="result-item"
      onClick={e => {
        e.preventDefault();
        // console.log(...playlist, {
        //   'songId': result.id,
        //   'songTitle': result.name,
        //   'songArtist': result.artists[0].name
        // })
        setPlaylist(playlist.concat({
          'songId': result.id,
          'songTitle': result.name,
          'songArtist': result.artists[0].name})
        )}}
        >
      {result.name} - {result.album.artists[0].name}
    </li>
  )
}

export default Result;