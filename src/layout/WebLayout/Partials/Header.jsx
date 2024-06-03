import React, { useState } from 'react'
import { HeaderContainer, NavContainer, NavItem } from '@layout/WebLayout/Partials/styled'
import { Container } from '@theme/Styled'
import Flex from '@components/others/Flex'
import { images } from '@assets/images'
import { NavLink } from 'react-router-dom'
import { THEME } from '@theme/index'
import { navItems } from '@router/config/routes'

const Header = () => {

    const [active, setActive] = useState(1)

    return (
        <HeaderContainer>
            <Container>
                <Flex aligncenter={'true'} spacebetween={'true'}>
                    <div className="logo">
                        <NavLink to={'/'}>
                            <img src={images?.LOGO} alt="simsonlogo" title='simsonlogo' />
                        </NavLink>
                    </div>
                    {/* <div className="topNav" style={{background:'red'}}>
                        fff
                    </div> */}

                    <ul className='topNavHolder'>
                        <a href="#">  <li className='topNav'>
                            <span>Join</span>
                        </li>
                        </a>
                        <a href="#">
                            <li className='topNav'>
                                <span>Sign In</span>
                            </li>
                        </a>
                        <a href="#">
                            <li className='topNav'>
                                <span>Shopping Bag &nbsp;&nbsp;(0) &nbsp;</span>
                                <img src={images.SHOPPINGBAG} title='shopping Bag' alt='shopping Bag' />
                            </li>
                        </a>
                    </ul>
                </Flex>
            </Container>

            <NavContainer>
                <Container>
                    <ul className='nav'>
                        {
                            navItems.map((item) => (
                                <li className='lists' key={item.key} onClick={()=>setActive(item.key)}>
                                    <NavLink to={item.path}>
                                        <NavItem className={active == item.key && 'active'}>{item.name}</NavItem>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </Container>
            </NavContainer>
        </HeaderContainer >
    )
}

export default Header