import React from 'react'
import Banner from './Banner'

function HeroSection({handleSearch, handleClickSearch, handleSelect}) {
  return (
    <div>
        <Banner handleSearch={handleSearch} handleClickSearch={handleClickSearch} handleSelect={handleSelect} />
    </div>
  )
}

export default HeroSection