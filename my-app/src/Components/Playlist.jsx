import React, {useState} from 'react';

const Playlist = () => {

  const [count, setCount] = useState(0);

  return (
    <p>
      You clicked the button {count} times!
      <button onClick={() => setCount(count + 1)}>
        Clickity
      </button>
    </p>
  )

}

export default Playlist;