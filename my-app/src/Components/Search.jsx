import React from 'react';

const Search = ({searchText, setSearchText, searchSong}) => {
  return(
    <form>
      <input
      value={searchText}
      type="text"
      placeholder="enter a song name"
      onChange={e => (setSearchText(e.target.value))} />
      <input
      type="button"
      value="Search song!"
      onClick={e => {e.preventDefault(); searchSong(searchText); console.log('searchText: ', searchText)}} />
    </form>
  )
}

export default Search;