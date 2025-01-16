import { useEffect, useState } from 'react'
import './App.css'
import { useCallback } from 'react';
import CharacterCard from './components/CharacterCard';
import SearchBar from './components/SearchBar';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const handleSearch = async (query) => {
    setQuery(query);
    setPage(1); // Reset to the first page when a new search is initiated
    fetchCharacterData(query, 1); // Fetch characters for the first page
  };

  const fetchCharacterData = async (query = null, countPerPage = 5) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character ?name=${query??null}&page=${page}`);
      console.log("response at fetchCharacterData func", response);
      setData(response.data.results);
      setIsLoading(false);
      setTotalPages(response.data.info.pages);
    }
    catch (error) {
      console.error("Error at fetchCharacterData func", error);
      setError("Error fetching character data");
      setIsLoading(false);
    }
  }

  const handleNextPage = () => {
    if (page < totalPages) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchCharacterData(query, nextPage);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      const prevPage = page - 1;
      setPage(prevPage);
      fetchCharacterData(query, prevPage);
    }
  };


  useEffect(() => { 
    fetchCharacterData(query, page);
  }, [query, page]);

  return (
    <div className="App bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto p-4">
        <SearchBar onSearch={handleSearch} />
        {isLoading && <p className="text-center text-blue-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={page <= 1}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-lg">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={page >= totalPages}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
