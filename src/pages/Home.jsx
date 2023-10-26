import Navbar from "../components/Navbar.jsx";

import {
  Header,
  ContainerSearch,
  TitleHeader,
  InputSearch,
  ButtonSearch,
  ContainerNewsHeader,
  ContainerNewsHeaderLeft,
  ContainerNewsHeaderRight,
  NewsHeaderLeftFirst,
  NewsHeaderLeftSeccond,
  NewsHeaderLeftSeccondTitle,
  NewsHeaderLeftSeccondText,
  NewsHeaderRightFirst,
  NewsHeaderRightFirstText,
  NewsHeaderRightSeccond,
  NewsHeaderRightSeccondTitle,
  NewsHeaderRightSeccondText,
} from "./Home.style";

const Home = () => {
  return (
    <Header>
      <ContainerSearch>
        <TitleHeader>Newsletter</TitleHeader>
        <form>
          <InputSearch type="text" placeholder="Procurar por manchetes" />
          <ButtonSearch>Buscar</ButtonSearch>
        </form>
      </ContainerSearch>
      <Navbar />
      <ContainerNewsHeader>
        <ContainerNewsHeaderLeft>
          <NewsHeaderLeftFirst className="Primeira noticia">
            <img src="/frame-14.png" alt="" />
          </NewsHeaderLeftFirst>
          <NewsHeaderLeftSeccond className="Segunda noticia">
            <div>
              <NewsHeaderLeftSeccondTitle>
                Philomena Cunk Is Weird Enough to Take on the World
              </NewsHeaderLeftSeccondTitle>
              <NewsHeaderLeftSeccondText>
                The new Netflix show “Cunk on Earth” looks like an ambitious BBC
                documentary. Until its fictional host, created by Charlie
                Brooker, starts to ask some deeply silly questions.
              </NewsHeaderLeftSeccondText>
            </div>
            <img src="/rectangle-24.png" alt="" />
          </NewsHeaderLeftSeccond>
        </ContainerNewsHeaderLeft>
        <ContainerNewsHeaderRight>
          <NewsHeaderRightFirst>
            <NewsHeaderRightFirstText>
              Secretary of State Antony J. Blinken on Friday canceled a weekend
              trip to Beijing after a Chinese spy balloon was sighted above the
              Rocky Mountain state of Montana, igniting a Pentagon said posed no
              threat to the United States.
            </NewsHeaderRightFirstText>
            <img src="/rectangle-19.png" alt="" />
          </NewsHeaderRightFirst>
          <NewsHeaderRightSeccond>
            <img src="/rectangle-21.png" alt="" />
            <div>
              <NewsHeaderRightSeccondTitle>
                More Airports to Use Greener ‘Glide’ Approach to Landing
              </NewsHeaderRightSeccondTitle>
              <NewsHeaderRightSeccondText>
                The Stopping Home Office Work’s Unproductive Problems (SHOW UP,
                get it?) Act of 2023 passed the Republican-majority US House of
                Representatives on a close-to-party-line vote l...
              </NewsHeaderRightSeccondText>
            </div>
          </NewsHeaderRightSeccond>
        </ContainerNewsHeaderRight>
      </ContainerNewsHeader>
    </Header>
  );
};

export default Home;
