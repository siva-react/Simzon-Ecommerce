import React, { useState } from 'react'
import {
    HeaderContainer,
    NavContainer,
    NavItem,
    SideNavHolder,
    SideNavLink,
    Toggle
} from '@layout/WebLayout/Partials/styled'
import { Container } from '@theme/Styled'
import Flex from '@components/others/Flex'
import { images } from '@assets/images'
import { NavLink } from 'react-router-dom'
import { navItems, sideNav } from '@router/config/routes'
import { CustomModalDrawer } from '@components/common'

const Header = () => {

    const [active, setActive] = useState(1)
    const [sideNavActive, setSideNavActive] = useState(false)

    const showSideNavModal = () => {
        setSideNavActive(true);
    };
    const hideSideNavModal = () => {
        setSideNavActive(false);
    };

    console.log(active,'active');

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

                    <Toggle onClick={() => setSideNavActive(prev => !prev)}>
                        <img src={images.MENU} title='menuicon' alt='menuicon' />
                        {/* <SvgIcons.MENU/> */}
                    </Toggle>

                    <ul className='topNavHolder'>
                        <a href="#">  
                        <li className={`topNav ${active == 5 ? 'active' : ''}`}  onClick={()=>setActive(5)}>
                            <span>Join</span>
                        </li>
                        </a>
                        <a href="#">
                             <li className={`topNav ${active == 6 ? 'active' : ''}`}  onClick={()=>setActive(6)}>
                                <span>Sign In</span>
                            </li>
                        </a>
                        <a href="#">
                             <li className={`topNav ${active == 7 ? 'active' : ''}`}  onClick={()=>setActive(7)}>
                                <span>Shopping Bag &nbsp;&nbsp;(0) &nbsp;</span>
                                <img src={images.SHOPPINGBAG} title='shopping Bag' alt='shopping Bag' />
                            </li>
                        </a>
                    </ul>
                </Flex>
            </Container>

            <NavContainer active={sideNavActive}>
                <Container>
                    <ul className='nav'>
                        {
                            navItems.map((item) => (
                                <li className='lists' key={item.key} onClick={() => setActive(item.key)}>
                                    <NavLink to={item.path} style={{ textDecoration: 'none' }}>
                                        <NavItem className={active == item.key && 'active'}>{item.name}</NavItem>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </Container>
            </NavContainer>

            <CustomModalDrawer
                title={''}
                open={sideNavActive}
                onClose={hideSideNavModal}
            >
                <SideNavHolder>
                    <ul className='side__navmenu'>
                    {
                        sideNav.map((item) => (
                            <li className='lists' key={item.key} onClick={() => {
                                setActive(item.key);
                                hideSideNavModal();
                            }}>
                                <SideNavLink to={item.path} style={{ textDecoration: 'none' }} className={active == item.key && 'sideactive'}>
                                    <span>{item.name}</span>
                                </SideNavLink>
                            </li>
                        ))
                    }
                    </ul>
                </SideNavHolder>
            </CustomModalDrawer>
        </HeaderContainer >
    )
}

export default Header