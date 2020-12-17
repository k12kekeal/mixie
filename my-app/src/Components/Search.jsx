import React from 'react';
import Results from './Results.jsx'

const Search = ({searchText, setSearchText, searchSong}) => {
  return(
    <>
    <form>
      <input
      value={searchText}
      type="text"
      placeholder="enter a song name"
      onChange={e => (setSearchText(e.target.value))} />
      <input
      type="button"
      value="Search song!"
      onClick={e => {searchSong(searchText)}} />
    </form>
    <Results />
    </>
  )
}

export default Search;