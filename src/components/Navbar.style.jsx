import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  background-color: var(--color-light-black);
  display: flex;
  align-items: center;
  gap: 30px;

  @media (min-width: 768px) and (max-width: 991px) {
    gap: 5px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    text-align: center;
    gap: 15px;
  }
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

  @media (max-width: 480px) {
    display: none;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    text-align: center;
    font-size: 1.6rem;
    margin: 0 auto;
  }
`;
