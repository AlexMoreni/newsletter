import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 15vh;
  font-family: var(--font-title);
  color: var(--color-white);
  background-color: var(--color-black);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50px;
`;

export const TitleFooter = styled.h1`
  font-family: var(--font-title);
  font-size: 5.2rem;
  color: var(--color-white);
  text-transform: uppercase;
`;

export const Copy = styled.p`
  font-family: var(--font-title);
  font-size: 1.7rem;
  color: var(--color-white);
`;
