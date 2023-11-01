import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--color-beige-white);
`;

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
  position: relative;
`;

export const NewsHeaderLeftFirstTitle = styled.h1`
  max-width: 500px;
  color: var(--color-white);
  font-family: var(--font-title);
  font-size: 2.4rem;
  font-weight: bold;
  position: absolute;
  bottom: 50px;
  left: 50px;
`;

export const NewsHeaderLeftFirstImg = styled.img`
  width: 600px;
  height: 365px;
`;

export const NewsHeaderLeftSeccond = styled.div`
  max-width: 100%;
  background-color: var(--color-white);
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

export const NewsHeaderLeftSeccondImg = styled.img`
  width: 106px;
  height: 60px;
  object-fit: cover;
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

export const NewsHeaderRightFirstImg = styled.img`
  width: 326px;
  height: 240px;
`;

export const NewsHeaderRightSeccond = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-white);
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

export const NewsHeaderRightSeccondImg = styled.img`
  width: 172px;
  height: 185px;
  object-fit: cover;
`;

export const ContainerNews = styled.section`
  max-width: 100%;
  display: flex;
  padding: 40vh 5rem 0 5rem;
  gap: 10px;
`;

export const ContainerNewsLeft = styled.section`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerNewsLeftTitle = styled.h1`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NewsLeftTitle = styled.h1`
  color: var(--color-light-black);
  font-family: var(--font-title);
  font-size: 3.3rem;
  margin-left: 20px;
`;

export const NewsLeftRow = styled.div`
  width: 70%;
  height: 0px;
  border: 2px solid var(--color-black);
`;

export const ContainerNewsLeftRender = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const CardImgNewsLeft = styled.div`
  position: relative;
`;

export const CardImgNewsLeftImg = styled.img`
  width: 390px;
  height: 340px;
  object-fit: cover;
`;

export const CardImgNewsLeftTitle = styled.h1`
  max-width: 350px;
  font-family: var(--font-title);
  font-size: 1.9rem;
  font-weight: bold;
  color: var(--color-white);
  position: absolute;
  bottom: 25px;
  left: 10px;
`;

export const CardTextNewsLeft = styled.div`
  width: 390px;
  height: 340px;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 15px;
`;

export const CardTextNewsLeftTitle = styled.h2`
  font-family: var(--font-title);
  font-size: 2rem;
  font-style: italic;
  color: #000;
  margin-top: 14px;
`;

export const CardTextNewsLeftText = styled.p`
  font-family: var(--font-text);
  font-size: 1.6rem;
  color: #04594d;
`;

export const ButtonViewMore = styled.button`
  font-family: var(--font-title);
  font-size: 2rem;
  color: var(--color-white);
  text-align: center;
  padding: 12px 26px;
  background: #04594d;
  cursor: pointer;
  border: none;
  margin-top: 40px;
`;

export const ContainerNewsRight = styled.aside`
  max-width: 30%;
  max-height: 180vh;
  background-color: #fff;
  padding: 10px;
`;

export const ContainerNewsRightTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NewsRightTitle = styled.h1`
  font-family: var(--font-title);
  font-size: 2rem;
  color: var(--color-light-black);
`;

export const NewsRightButton = styled.button`
  width: 85px;
  height: 25px;
  border-radius: 2.768px;
  background: #1a1a1a;
  color: var(--color-white);
  cursor: pointer;
`;

export const ContainerNewsRightRender = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 30px;
`;

export const CardTextNewsRight = styled.div`
  width: 100%;
  background-color: var(--color-white);
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-light-black);
  display: flex;
  gap: 10px;
`;

export const CardTextNewsRightTitle = styled.h2`
  font-family: var(--font-title);
  font-size: 1.5rem;
  color: var(--color-light-black);
  margin: 10px 0;
`;

export const CardTextNewsRightText = styled.p`
  font-family: var(--font-text);
  font-size: 1rem;
  color: #04594d;
`;

export const CardTextNewsRightImg = styled.img`
  width: 140px;
  max-height: 140px;
`;
