import React from 'react';
import styled from 'styled-components';

const SidebarLink = styled.div`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const SidebarMenu = ({ item }) => {
    return (
        <>
            <SidebarLink>
                <div>
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
            </SidebarLink>
        </>
    )
}

export default SidebarMenu