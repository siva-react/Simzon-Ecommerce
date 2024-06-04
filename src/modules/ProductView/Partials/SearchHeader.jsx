import React from 'react'
import { SearchHolder } from '@modules/ProductView/Partials/style'
import { Container } from '@theme/Styled'
import { CustomSearch } from '@components/others'

const SearchHeader = () => {
    return (
        <SearchHolder>
            <Container>
                <div className="wrapper">
                    <h4>Search Product</h4>
                    <CustomSearch />
                </div>
            </Container>
        </SearchHolder>
    )
}

export default SearchHeader
