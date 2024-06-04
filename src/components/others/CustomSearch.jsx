import React from 'react'
import { SearchBarHolder } from '@components/others/Style'
import { Input } from 'antd'
import { images } from '@assets/images'

const CustomSearch = () => {
  return (
    <SearchBarHolder>
        <input className="input">
        </input>
        <div className="search">
            <img src={images.SEARCH} alt='searchicon' title='searchicon'/>
        </div>
    </SearchBarHolder>
  )
}

export default CustomSearch
