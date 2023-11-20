// LocationSearch.js
import React, { useState, useEffect } from 'react';
import { IoLocationOutline } from "react-icons/io5";

const LocationSearch = ({isSticky,searchText,setSearchText}) => {
 
  const [keysAtLevel1, setKeysAtLevel1] = useState([]);
  const [keysAtLevel2, setKeysAtLevel2] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedKey1, setSelectedKey1] = useState('');
  const [selectedKey2, setSelectedKey2] = useState('');
  const [initialResult,setInitialResult] = useState([]);

  useEffect(() => {
    // Fetch keys when the component mounts
    fetchKeys();
  }, []);

  const fetchKeys = () => {
    // Fetch keys from the server using the /getAllKeys route
    fetch(`http://localhost:3000/Restaurants/getAllKeys`)
      .then(response => response.json())
      .then(data => {
        const { keysAtLevel1, keysAtLevel2 } = data;
        setKeysAtLevel1(keysAtLevel1);
        setKeysAtLevel2(keysAtLevel2);
      })
      .catch(error => {
        console.error('Error fetching keys:', error);
      });
  };

  useEffect(() => {
    // Display all key1s with their corresponding key2s initially
    const initialResults = keysAtLevel1.map(key1 => ({
      key1,
      key2s: keysAtLevel2[key1],
    }));
    setInitialResult(initialResults);
  }, [keysAtLevel1, keysAtLevel2]);

  useEffect(() => {
    if (searchText.length === 0) {
      // If searchText is empty, display all key1s with their corresponding key2s
      const initialResults = keysAtLevel1.map(key1 => ({
        key1,
        key2s: keysAtLevel2[key1],
      }));
      setInitialResult(initialResults);
      return;
    }

    // Filter results based on the search text
    const filteredResults = filterResults(searchText);
    setSearchResults(filteredResults);
  }, [searchText, keysAtLevel1, keysAtLevel2]);


const filterResults = (searchText) => {
    searchText = searchText.toLowerCase();
    return keysAtLevel1.reduce((filteredResults, key1) => {
      const matchingKey2s = keysAtLevel2[key1].filter(key2 =>
        key2.toLowerCase().includes(searchText)
      );
  
      if (matchingKey2s.length > 0) {
        // Include key1 and matching key2s in the results
        filteredResults.push({
          key1,
          key2s: matchingKey2s,
        });
      }
  
      return filteredResults;
    }, []);
  };
  

  const handleResultClick = (key1, key2) => {
    // Store selected key1 and key2
    setSelectedKey1(key1);
    setSelectedKey2(key2);
    setSearchText(`${key1} - ${key2}`); // Set searchText to display the selected keys in the input
    setSearchResults([]); // Clear search results
  };

  return (
    <div  className="relative">
        <IoLocationOutline className={`inline text-4xl ${searchText.length==0 || isSticky ? 'text-gray-400':'text-white'} mb-2`}/>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setSearchResults(initialResult)}
        placeholder="Set Your Location"
        className={`${
            isSticky ? ' text-gray-500' : ' text-white'
          }  p-2 rounded w-80 h-12 focus:outline-none bg-transparent`}
      />
      <div className={`z-10  w-full max-h-[36rem] overflow-auto  bg-white border rounded shadow-lg ${searchResults.length==0? 'invisible' : 'absolute'}`}>
        {searchResults.map((result, index) => (
          <div key={index} className="p-2 ">
            <div className="font-bold text-gray-500">{result.key1.toUpperCase()}</div>
            <div className="flex flex-col">
              {result.key2s.map((key2, subIndex) => (
                <div
                  key={subIndex}
                  className="cursor-pointer hover:bg-gray-100 p-1 text-gray-400"
                  onClick={() => handleResultClick(result.key1, key2)}
                >
                  {key2}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSearch;
