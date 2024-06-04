import React, { useState } from 'react'
import SearchHeader from '@modules/ProductView/Partials/SearchHeader'
import { Container } from '@theme/Styled'
import { CustomRow } from '@components/others'
import { Col } from 'antd'
import { ProductHolder } from '@modules/ProductView/Partials/style'
import ProductSubMenu from '@modules/ProductView/Partials/ProductSubMenu'
import ProductWrapper from '@modules/ProductView/Partials/ProductWrapper'

const ProductViewContainer = () => {

  const [activeSubMenu, setActiveSubMenu] = useState(1)

  const UpdateSubMenu =(arg)=>{
    setActiveSubMenu(arg)
  }
  
  return (
    <>
        <SearchHeader/>
        <ProductHolder>
          <Container>
            <CustomRow space={[12,12]}>
              <Col span={0} md={8} lg={6}>
                <ProductSubMenu active={activeSubMenu} update={UpdateSubMenu}/>
              </Col>
              <Col span={24} md={16} lg={18}>
                <ProductWrapper/>
              </Col>
            </CustomRow>
          </Container>
        </ProductHolder>
    </>
  )
}

export default ProductViewContainer
