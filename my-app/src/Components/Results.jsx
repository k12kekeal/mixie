import Result from "./Result.jsx";

const Results = ({ results }) => {
    return (
      <ul>
        {results.map((result, i) => <Result result={result} key={i}/>)}
      </ul>
    )
};

export default Results;
