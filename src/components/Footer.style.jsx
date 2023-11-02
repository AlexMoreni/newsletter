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

  @media (max-width: 480px) {
    gap: 40px;
    padding: 0em 10px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    gap: 30px;
    padding: 0em 15px;
  }
`;

export const TitleFooter = styled.h1`
  font-family: var(--font-title);
  font-size: 5.2rem;
  color: var(--color-white);
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 3.2rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 4rem;
  }
`;

export const Copy = styled.p`
  font-family: var(--font-title);
  font-size: 1.7rem;
  color: var(--color-white);

  @media (max-width: 480px) {
    text-align: center;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    text-align: center;
  }
`;
