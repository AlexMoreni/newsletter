import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  background-color: var(--color-light-black);
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const LinkText = styled.a`
  height: 100%;
  font-family: var(--font-title);
  font-size: 1.8rem;
  color: var(--color-white);
  padding: 10px 4px;
  &:hover {
    background-color: var(--color-green);
  }
`;
