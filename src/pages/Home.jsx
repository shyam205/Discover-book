import React from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const [option, setOption] = useState('Title')

    const handleSearch = (search) => {
        //setInputSearch(search)
    }
    const handleClickSearch = (search) => {
        navigate(`/search/${search}?q=${option}`)
    }

    const handleSelect = (op) => {
        setOption(op)
    }
    return (
        <div>
            <div>
            <div className="bg-cover bg-center relative" style={{ height: '100vh', backgroundImage: "url('/banner.jpg')" }}>
                <HeroSection handleSearch={(p) => handleSearch(p)} handleClickSearch={(t) => handleClickSearch(t)} handleSelect={(s) => handleSelect(s)} />
                <div className="absolute -bottom-[100px] left-0 w-full leading-[0]">
                    <svg
                    className="relative block w-[100%]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    >
                    <path
                        fill="#ffffff"
                        fill-opacity="1"
                        d="M0,224L48,208C96,192,192,160,288,133.3C384,107,480,85,576,80C672,75,768,85,864,96C960,107,1056,117,1152,128C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                    </svg>
                </div>
                </div>
            </div>
            
            
            <div className="mt-[100px]">
                <Footer />
            </div>
        </div>
    )
}

export default Home