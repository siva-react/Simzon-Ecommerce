import React from 'react'
import { MenuBox } from '@modules/ProductView/Partials/style'
import { BiSolidRightArrow } from "react-icons/bi";
import { THEME } from '@theme/index';
import { subMenu } from '@assets/commonData/Data';

const ProductSubMenu = ({active,update}) => {
    return (
        <MenuBox>
            <h3>Products Menu</h3>

            <ul className='menu'>
                {
                    subMenu?.map((item)=>(
                        <li key={item?.key} className={item?.key == active && 'active'} onClick={()=>update(item?.key)}>
                            <BiSolidRightArrow color={THEME.primary_color}/>
                            <span>{item?.name}</span>
                        </li>
                    ))
                }
            </ul>
        </MenuBox>
    )
}

export default ProductSubMenu
