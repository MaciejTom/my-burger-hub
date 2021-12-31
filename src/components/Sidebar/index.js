import React from "react"
//Styles
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./Sidebar.styles"
//Hooks
import { useMenuQuery } from '../../hooks/UseMenuQuery'

const Sidebar = ({ isOpen, toggle }) => {
  
  const { wpMenu } = useMenuQuery();
  const menuNodes = wpMenu.menuItems.nodes 

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu menuLength={menuNodes.length}>
        {menuNodes.map(node => 
          <SidebarLink key={node.id} to={node.url}>{node.label}</SidebarLink>
        )}
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/menu">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar
