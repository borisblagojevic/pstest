import {useState} from "react";
import useDebounce from "./useDebounce.tsx";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    useDebounce(searchTerm, 500);

    return <div className="relative mb-6">
        <input
            type="text"
            placeholder="Search posts..."
            className="w-[40vw] px-5 py-3 rounded-lg border-2 border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-transparent transition-all duration-200 text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-950 w-5 h-5"
             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
        </svg>
    </div>
}

export default SearchBar;