import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
  
  const { wp, wpMenu } = useMenuQuery();
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
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar
