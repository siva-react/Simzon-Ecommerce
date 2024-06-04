import { productList } from '@assets/commonData/Data'
import { CustomRow } from '@components/others'
import { Col } from 'antd'
import React from 'react'
import { CardHolder, ContentHolder } from '@modules/ProductView/Partials/style'
import { imageURL } from '@request/request'
import { FormatAmount } from '@hooks/FormatedAmount'

const ProductWrapper = () => {
    return (
        <CustomRow space={[12, 12]}>
            {
                productList?.map((item) => (
                    <Col span={24} sm={12} md={12} lg={8} xxl={6}>
                        <CardHolder key={item?.id}>
                            <div className='imgHolder'>
                                <div className='topline'></div>
                                <div className='bottomline'></div>
                                <img src={`${imageURL}${item?.varientImages[0]?.productVarientImageUrl}`} className='card__img' alt={item?.productName} title={item?.productName} />
                            </div>
                            <ContentHolder>
                                <div className='title'>
                                    <h3>{item?.productName}</h3>
                                </div>
                                <div className="btnHolder">
                                    <span className="rate">
                                        &#8377; {FormatAmount(item?.totalAmount)}
                                    </span>
                                    <div className='btn'>
                                        GET&nbsp;IT
                                    </div>
                                </div>
                            </ContentHolder>
                        </CardHolder>
                    </Col>
                ))
            }
        </CustomRow>
    )
}

export default ProductWrapper
