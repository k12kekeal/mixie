const Result = ({result}) => {
  return (
    <li
      className="result-item"
      onClick={e => {e.preventDefault(); console.log('added to playlist')}}>
      {result.name} - {result.album.artists[0].name}
    </li>
  )
}

export default Result;