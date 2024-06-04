import React from 'react'
import { Drawer as AntdDrawer } from 'antd';
import styled from 'styled-components';
import { THEME } from '@theme/index';
import { IoArrowBackSharp, IoCloseSharp } from "react-icons/io5";

const CustomModalDrawer = ({
    title,
    placement,
    onClose,
    open,
    width,
    backIcon,
    children
}) => {
    return (
        <StyledModalDrawer
            // maskStyle={{ background: 'transparent' }}
            title={title}
            placement={placement || 'right'}
            onClose={onClose}
            open={open}
            width={width || 300}
            closeIcon={backIcon ? <IoArrowBackSharp /> : <IoCloseSharp color='#fff' size={22}/>}
        >
            {children}
        </StyledModalDrawer>
    )
}

export default CustomModalDrawer



const StyledModalDrawer = styled(AntdDrawer)`
    &.ant-drawer-content{
        background:${THEME.black};
    }
    .ant-drawer-header{
        border-bottom:0;
    }

    & .ant-drawer-title{
        font-size:16px;
        text-transform:capitalize;
        color:${THEME.black};
        padding: 10px;
    }

    & .ant-modal-body{
        margin-top:20px;
    }
`;

//  --------- > Usage

// const [drawerModalOpen, setDrawerModalOpen] = useState(false);
// const showDrawerModal = () => {
//     setDrawerModalOpen(true);
// };
// const onDrawerModalClose = () => {
//     setDrawerModalOpen(false);
// };
{/* <CustomModalDrawer
title={'Modal Drawer'}
open={drawerModalOpen}
onClose={onDrawerModalClose}
width={500}
backIcon={'true'}
content={
<>
    <h1>dghdhd</h1>
    <h1>dghdhd</h1>
</>
}
/> */}