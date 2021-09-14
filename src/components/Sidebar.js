import React, { useState } from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { categories } from '../data';
import SidebarMenu from './SidebarMenu';
import { IconContext } from 'react-icons/lib';

const NavIcon = styled.div`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 25px;
  cursor: pointer
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: 'lightblue' }}>
          <NavIcon>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {categories.map((item) => {
              return <SidebarMenu item={item} key={item.id} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
