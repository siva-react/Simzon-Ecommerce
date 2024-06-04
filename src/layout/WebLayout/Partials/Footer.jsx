import React, { Fragment } from 'react'
import {
    FooterBG,
    FooterContainer,
    FooterBottom,
    FooterContentHolder,
    Line,
    FooterPageLink,
} from '@layout/WebLayout/Partials/styled'
import { Container } from '@theme/Styled'
import { CustomRow, Flex } from '@components/others'
import { Col } from 'antd'
import { images } from '@assets/images'
import { NavLink } from 'react-router-dom'
import { THEME } from '@theme/index'
import { footerPages, socialData } from '@assets/commonData/Data'

const Footer = () => {
    return (
        <Fragment>
            <FooterBG />
            <FooterContainer>
                <Container>
                    <CustomRow space={[12, 24]}>
                        <Col span={24} lg={8}>
                            <Flex gap={'10px'} spacebetween={'true'} H_100={'true'}>
                                <FooterContentHolder>
                                    <h2>ABOUT</h2>
                                    <NavLink to={'/'}>
                                        <img src={images.LOGO} alt="simsonlogo" title='simsonlogo' />
                                    </NavLink>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptates impedit eos tempora est quibusdam nisi animi vitae aliquam quisquam sunt a, iusto corporis eligendi nobis. Accusamus repudiandae id nam.</p>
                                </FooterContentHolder>
                                <Line />
                            </Flex>
                        </Col>

                        <Col span={24} lg={8}>
                            <Flex gap={'10px'} spacebetween={'true'} H_100={'true'}>
                                <FooterContentHolder>
                                    <div style={{margin:'0 20px'}}>
                                    <h2>Follow Us</h2>
                                    <ul>
                                        {
                                            socialData.map((item)=>(
                                                <li key={item.key}>
                                                    <a href={item?.link} target='_blank'>
                                                    <div className='social__holder'>
                                                    <img src={item?.img} alt={item.title} title={item.title} />
                                                    </div>
                                                    <span>{item.name}</span>
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    </div>
                                </FooterContentHolder>
                                <Line />
                            </Flex>
                        </Col>
                        
                        <Col span={24} lg={8}>
                            <Flex gap={'10px'} spacebetween={'true'} H_100={'true'}>
                                <FooterContentHolder>
                                    <div style={{margin:'0 20px'}}>
                                    <h2>Contact Info</h2>
                                    <ul>
                                        <li>
                                            <h6>Phone : 94898&nbsp;88031, 73392&nbsp;07565</h6>
                                        </li>
                                        <li>
                                            <h6>Email : <a href="mailto:info(at)fashionpress.com">info(at)fashionpress.com</a></h6>
                                            </li>
                                    </ul>
                                    </div>
                                </FooterContentHolder>
                            </Flex>
                        </Col>
                    </CustomRow>
                </Container>
            </FooterContainer>
            <FooterBottom>
                <Container>
                    <div className="footerWrapper">
                        <div className="footermenu">
                            {
                                footerPages.map((item)=>(
                                    <FooterPageLink to={item.path} key={item.key}>
                                        {item.name}
                                    </FooterPageLink>
                                ))
                            }
                        </div>
                        <div className="copy">
                            <h6>@ {new Date().getFullYear()} All Rights Reserved : </h6>
                            <a href="https://www.ideaux.in/">IdeauxTech Pvt Ltd</a>
                        </div>
                    </div>
                </Container>
            </FooterBottom>
        </Fragment>
    )
}

export default Footer
