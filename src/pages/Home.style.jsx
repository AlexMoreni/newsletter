import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 60vh;
  background-color: var(--color-black);
  padding: 5rem;
`;

export const ContainerSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;
`;

export const TitleHeader = styled.h1`
  font-family: var(--font-title);
  font-size: 5.2rem;
  color: var(--color-white);
  text-transform: uppercase;
`;

export const InputSearch = styled.input`
  width: 636.529px;
  height: 40.129px;
  font-family: var(--font-text);
  font-size: 3rem;
  color: var(--color-white);
  background-color: var(--color-green);
  border: none;
  padding-left: 10px;
`;

export const ButtonSearch = styled.button`
  width: 116.236px;
  height: 40.129px;
  font-family: var(--font-text);
  font-size: 3rem;
  color: var(--color-white);
  background-color: var(--color-brow);
  cursor: pointer;
`;

export const ContainerNewsHeader = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
`;

export const ContainerNewsHeaderLeft = styled.div`
  max-width: 55%;
`;

export const ContainerNewsHeaderRight = styled.div`
  max-width: 45%;
`;

export const NewsHeaderLeftFirst = styled.div`
  max-width: 100%;
  background-color: var(--color-white);
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NewsHeaderLeftSeccond = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

export const NewsHeaderLeftSeccondTitle = styled.h3`
  color: #000;
  font-family: var(--font-title);
  font-size: 1.5rem;
`;

export const NewsHeaderLeftSeccondText = styled.p`
  font-family: var(--font-text);
  font-size: 1rem;
  color: var(--color-green);
`;

export const NewsHeaderRightFirst = styled.div`
  max-width: 100%;
  display: flex;
  background-color: var(--color-light-black);
  padding: 2rem;
  gap: 20px;
`;

export const NewsHeaderRightFirstText = styled.p`
  font-family: var(--font-text);
  font-size: 1.6rem;
  color: var(--color-white);
`;

export const NewsHeaderRightSeccond = styled.div`
  display: flex;
  align-items: center;
`;

export const NewsHeaderRightSeccondTitle = styled.h3`
  font-family: var(--font-title);
  font-size: 2rem;
  color: #000;
  padding: 2rem;
`;

export const NewsHeaderRightSeccondText = styled.h3`
  font-family: var(--font-title);
  font-size: 1.6rem;
  color: var(--color-green);
  padding: 0 2rem;
`;
