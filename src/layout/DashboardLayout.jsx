import React, { useLayoutEffect, useState } from 'react'
import { BodyContent, BodyLayout, HeaderNav, MainLayout, SideMenuLayout, TopHeader } from '@layout/Partials/Style'
import { Drawer, Layout } from 'antd'
import { Button } from '@components/form'
import { SideMenu } from '@layout/Partials/SideMenu'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { NavHeader } from '@layout/Partials/NavHeader'

const DashboardLayout = ({ children }) => {

    // const [collapse, setCollapse] = useState(false)
    const [collapsed, setCollapsed] = useState(false);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');

    const updateCollapse = () => {
        setCollapsed(!collapsed)
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onChange = (e) => {
        setPlacement(e.target.value);
    };

    return (
        <MainLayout>
            <Layout>
                <SideMenuLayout width={'280'} trigger={null} collapsible collapsed={collapsed}>
                        <HeaderNav>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                            />
                            <div>
                                {
                                    collapsed ? null :
                                        <h3 style={{ fontSize: '20px', marginLeft: '10px' }}>NAME</h3>
                                    // <p style={{ transition: '0.5s', overflow: 'hidden' }}>
                                    // <img src={Logo} />
                                    // </p>
                                }
                            </div>
                        </HeaderNav>
                    <SideMenu collapsed={collapsed} />
                </SideMenuLayout>

                <Drawer
                    title="NAME"
                    placement={placement}
                    closable={false}
                    onClose={onClose}
                    open={open}
                    key={placement}
                    width={250}
                >
                    <SideMenu collapsed={collapsed} />
                </Drawer>
                <BodyLayout>
                    <TopHeader>
                        <NavHeader updateCollapse={updateCollapse} showDrawer={showDrawer} />
                    </TopHeader>
                    <BodyContent>
                        {children}
                    </BodyContent>
                </BodyLayout>
            </Layout>
        </MainLayout>
    )
}

export default DashboardLayout
