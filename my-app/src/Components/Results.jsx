import Result from "./Result.jsx";

const Results = ({ results, setPlaylist, playlist }) => {
    return (
      <ul>
        {results.map((result, i) => <Result result={result} key={i} setPlaylist={setPlaylist} playlist={playlist}/>)}
      </ul>
    )
};

export default Results;
