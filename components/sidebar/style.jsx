import styled from "styled-components";


export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  width: 150px;
  background: ${({ theme }) => theme.colors.dark};
`;

export const Brand = styled.h3``;
export const BrandLink = styled.a`
  text-decoration: none;
  color: #fff;
`;

export const SidebarList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SidebarItem = styled.li`
  color: #fff;
  padding: var(--spacing);
`;