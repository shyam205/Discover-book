import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

export default function Banner({handleSearch, handleClickSearch, handleSelect}) {
    const [search, setSearch] = useState('');
    const [selectedOption, setSelectedOption] = useState("");

    const options = ["Boot Title", "Author"];

    const onInputChange = (e) => {
        setSearch(e.target.value);
    }

    const handleClick = () => {
        handleSearch(search)
        handleClickSearch(search)
    }

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        handleSelect(event.target.value)
    };

    return (
        <div>
            <Navbar />
            <div>
                {/* Search Bar */}
                <div className="flex flex-col items-center space-x-2">
                    <p className="mt-40 text-4xl text-white">Find your books here</p>
                    <p className="mt-2 text-xl text-white">Welcome! discover some amazing books.</p>
                    <br></br>
                    <div className="flex flex-col sm:flex-row gap-y-3 sm:gap-y-0 space-x-2 items-center justify-center w-[100%]">
                    <select
                            id="dropdown"
                            value={selectedOption}
                            onChange={handleChange}
                            className="w-[250px] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled>
                                Select Book Title or Author
                            </option>
                            {options.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            placeholder="Search Book by Title or by Author"
                            className="px-3 py-1 rounded-md border border-gray-300 text-black w-[90%] max-w-96 h-[40px]"
                            onChange={onInputChange}
                            disabled={!!selectedOption ? false : true}
                        />
                        <button disabled={(!!selectedOption && !!search) ? false : true} className="flex justify-center items-center bg-white hover:border-white rounded-md transition duration-300 w-[40px] h-[40px]" style={{ cursor: (!!selectedOption && !!search) ? 'pointer' : 'not-allowed' }} onClick={handleClick}>
                        <svg fill="#000000" height="23px" width="23px" version="1.1" id="Capa_1" viewBox="0 0 480.4 480.4">
                            <g>
                                <g>
                                    <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6    s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2    S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7    S381.9,104.65,381.9,203.25z"/>
                                </g>
                            </g>
                        </svg>
                        </button>
                    </div>
                </div> 
            </div>
        </div>
    )
}
