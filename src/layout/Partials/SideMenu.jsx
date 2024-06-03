import { Divider, Menu } from "antd";
import { useLocation, useNavigate } from 'react-router-dom';
import { Fragment, useEffect, useState } from "react";
import { adminItems, adminKeys } from "@layout/Partials/DynamicSubmenu/Admin";
import { clientItems, clientKeys } from "@layout/Partials/DynamicSubmenu/Client";
import { AvImg } from "@assets/images";
import { MenuHolder, MenuImageProfile, Profile } from "@layout/Partials/Style";
import { useSelector } from "react-redux";
import { selectCurrentUserRole } from "@modules/Auth/authSlice";
import { userRolesConfig } from "@router/config/roles";


export const SideMenu = ({ collapsed }) => {
    
    const [openKeys, setOpenKeys] = useState([]);
    const [activeTab, setActiveTab] = useState('')
    
    // ==========  Dynamic Items & Keys
    const [dynamicKeys, setDynamicKeys] = useState([])
    const [items, setItems] = useState([])
    
    const navigate = useNavigate();
    const route = useLocation()
    const role = userRolesConfig.ADMIN;

    useEffect(() => {
        if (role === userRolesConfig.ADMIN) {
            setDynamicKeys(adminKeys)
            setItems(adminItems(collapsed))
        } else if (role === userRolesConfig.USER) {
            setDynamicKeys(clientKeys)
            setItems(clientItems(collapsed))
        }
    }, [collapsed])


    useEffect(() => {
        const pathname = route.pathname;
        const parts = pathname.split('/');
        const lastPart = parts[1];
        setActiveTab(lastPart)
        const storedOpenKeys = JSON.parse(localStorage.getItem('openKeys'));
        if (storedOpenKeys) {
            setOpenKeys(storedOpenKeys);
        }
    }, [route])

    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (dynamicKeys.indexOf(latestOpenKey) === -1) {
            localStorage.setItem('openKeys', JSON.stringify(keys));
            setOpenKeys(keys);
        } else {
            localStorage.setItem('openKeys', JSON.stringify(latestOpenKey ? [latestOpenKey] : []));
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };



    const onClick = ({ key }) => {
        if (key === null) {
        }
        else {
            navigate(`${key}/`)
        }
    }

    return (
        <Fragment>
            <Profile>  {/* Remove When there is no Profile Img*/}
                <div>
                    <MenuImageProfile className={collapsed ? 'active' : ''}>
                        <img src={AvImg} alt="Profile" />
                    </MenuImageProfile>
                    {!collapsed && (
                        <>
                            <p style={{ fontSize: "16px", color: "#545454" }}>Rolex</p>
                            <p style={{ fontSize: "11px", color: "#545454" }}>admin</p>
                        </>
                    )}
                </div>
            </Profile>
            <div style={{ margin: "auto", width: "82%" }}>
                <Divider style={{ background: "rgb(232 232 232 / 11%)" }} />
            </div>
            <MenuHolder>
                <Menu
                    onClick={onClick}
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    selectedKeys={[activeTab]}
                    mode="inline"
                    items={items}
                />
            </MenuHolder>
        </Fragment>
    )
}

