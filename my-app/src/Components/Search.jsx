import React from 'react';

const Search = ({searchText, setSearchText, setPlaylist, playlist}) => {
  return(
    <form>
      <input value={searchText} type="text" placeholder="enter a song name" onChange={e => (setSearchText(e.target.value))}></input>
      <input type="submit" value="Add song!" onSubmit={e => (setPlaylist(...playlist, searchText))}></input>
    </form>
  )
}

export default Search;

/*
handleSearch
*/