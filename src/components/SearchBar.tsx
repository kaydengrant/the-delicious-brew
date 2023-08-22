import React, { useState } from 'react';
import Link from 'next/link';

import { Search } from '../utils';
import { client } from '../../sanity/lib/client';

type SearchProps = {
  searchResults: any[];
  setSearchResults: React.Dispatch<React.SetStateAction<any[]>>;
  setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
};

type ResultsProps = {
  searchResults: any[];
  setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchBar: React.FC<SearchProps> = ({
  searchResults,
  setSearchResults,
  setShowSearchBar,
}) => {
  const [input, setInput] = useState('');

  const getSanityData = async (value: string) => {
    const dataQuery = '*[_type == "product" && name < "' + value + '"]';
    const data = await client.fetch(dataQuery);
    const results = data.filter((item: any) => {
      return (
        value && item && item.name && item.name.toLowerCase().includes(value)
      );
    });

    setSearchResults(results);
  };

  const handleChange = (value: string) => {
    setInput(value);
    getSanityData(value);
  };

  return (
    <div className="flex flex-col items-center">
      <form
        id="form"
        role="search"
        className="flex flex-row justify-between items-center  bg-white border-2 border-black drop-shadow-md w-[300px] h-[44px] rounded-lg"
      >
        <div className="flex flex-row items-center px-2">
          <Search size={25} />
          <input
            type="search"
            id="query"
            placeholder="Search..."
            autoComplete="off"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            className="w-full h-full bg-transparent outline-0 px-2"
          />
        </div>
        <button className="h-full bg-black px-2 text-white">Search</button>
      </form>
      <SearchBarResults
        searchResults={searchResults}
        setShowSearchBar={setShowSearchBar}
      />
    </div>
  );
};

const SearchBarResults: React.FC<ResultsProps> = ({
  searchResults,
  setShowSearchBar,
}) => {
  return (
    <div className="relative flex flex-col w-full mt-2">
      <div className="absolute flex flex-col w-full bg-white drop-shadow-lg max-h-[300px] scrollbar overflow-y-auto overflow-x-clip rounded-lg">
        <ol className="flex flex-col gap-2 w-full">
          {searchResults.map((item) => (
            <li
              key={item._id}
              className="m-0 w-full h-full hover:bg-gray p-2"
              onClick={() => setShowSearchBar(false)}
            >
              <Link
                href={`/shop/products/${item.category[0]}/${item._id}?productName=${item.name}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchBar;
