import Navbar from "../components/Navbar.jsx";

import {
  Container,
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
  ContainerNews,
  ContainerNewsLeft,
  ContainerNewsLeftTitle,
  NewsLeftTitle,
  NewsLeftRow,
  ContainerNewsLeftRender,
  CardTextNewsLeft,
  CardTextNewsLeftTitle,
  CardTextNewsLeftText,
  ButtonViewMore,
  ContainerNewsRight,
  ContainerNewsRightTitle,
  NewsRightTitle,
  NewsRightButton,
  ContainerNewsRightRender,
  CardTextNewsRight,
  CardTextNewsRightTitle,
  CardTextNewsRightText,
} from "./Home.style";

const Home = () => {
  return (
    <Container>
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
                  The new Netflix show “Cunk on Earth” looks like an ambitious
                  BBC documentary. Until its fictional host, created by Charlie
                  Brooker, starts to ask some deeply silly questions.
                </NewsHeaderLeftSeccondText>
              </div>
              <img src="/rectangle-24.png" alt="" />
            </NewsHeaderLeftSeccond>
          </ContainerNewsHeaderLeft>
          <ContainerNewsHeaderRight>
            <NewsHeaderRightFirst>
              <NewsHeaderRightFirstText>
                Secretary of State Antony J. Blinken on Friday canceled a
                weekend trip to Beijing after a Chinese spy balloon was sighted
                above the Rocky Mountain state of Montana, igniting a Pentagon
                said posed no threat to the United States.
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
                  The Stopping Home Office Work’s Unproductive Problems (SHOW
                  UP, get it?) Act of 2023 passed the Republican-majority US
                  House of Representatives on a close-to-party-line vote l...
                </NewsHeaderRightSeccondText>
              </div>
            </NewsHeaderRightSeccond>
          </ContainerNewsHeaderRight>
        </ContainerNewsHeader>
      </Header>
      <ContainerNews className="Container-geral">
        <ContainerNewsLeft className="Container-Left">
          <ContainerNewsLeftTitle className="Container-title-left">
            <NewsLeftTitle>Latest News</NewsLeftTitle>
            <NewsLeftRow></NewsLeftRow>
          </ContainerNewsLeftTitle>
          <ContainerNewsLeftRender className="Container-News">
            <div className="Card-imgs">
              <img src="/frame-7.png" alt="" />
            </div>
            <div className="Card-imgs">
              <img src="/frame-7.png" alt="" />
            </div>
            <CardTextNewsLeft className="Card-Text">
              <CardTextNewsLeftTitle>
                More Airports to Use Greener ‘Glide’ Approach to Landing
              </CardTextNewsLeftTitle>
              <CardTextNewsLeftText>
                Eleven more U.S. airports plan to adopt a new way of landing
                planes that reduces both emissions and noise — all by having
                incoming planes turn off their engines and glide down to the
                tarmac like a paraglider. The Federal Aviation Administration
                announced Monday that planes heading to Orlando, Fla.; Kansas
                City, Mo.; Omaha, Neb.; Nebraska's Offutt Air Force Base; Reno,
                Nev.; and six airports in South Florida soon would make idle
                descents to...
              </CardTextNewsLeftText>
            </CardTextNewsLeft>
            <CardTextNewsLeft className="Card-Text">
              <CardTextNewsLeftTitle>
                More Airports to Use Greener ‘Glide’ Approach to Landing
              </CardTextNewsLeftTitle>
              <CardTextNewsLeftText>
                Eleven more U.S. airports plan to adopt a new way of landing
                planes that reduces both emissions and noise — all by having
                incoming planes turn off their engines and glide down to the
                tarmac like a paraglider. The Federal Aviation Administration
                announced Monday that planes heading to Orlando, Fla.; Kansas
                City, Mo.; Omaha, Neb.; Nebraska's Offutt Air Force Base; Reno,
                Nev.; and six airports in South Florida soon would make idle
                descents to...
              </CardTextNewsLeftText>
            </CardTextNewsLeft>
            <div className="Card-imgs">
              <img src="/frame-7.png" alt="" />
            </div>
            <div className="Card-imgs">
              <img src="/frame-7.png" alt="" />
            </div>
          </ContainerNewsLeftRender>
          <ButtonViewMore>Ver mais</ButtonViewMore>
        </ContainerNewsLeft>
        <ContainerNewsRight>
          <ContainerNewsRightTitle>
            <NewsRightTitle>Manchetes populares</NewsRightTitle>
            <NewsRightButton>Ver mais</NewsRightButton>
          </ContainerNewsRightTitle>
          <ContainerNewsRightRender>
            <CardTextNewsRight>
              <img src="/rectangle-25.png" alt="" />
              <div>
                <CardTextNewsRightTitle>
                  LeBron James Keeps the World Watching
                </CardTextNewsRightTitle>
                <CardTextNewsRightText>
                  The Los Angeles Lakers star has embraced the often harsh
                  spotlight of celebrity to further his career and personal
                  goals. But he said it can be “challenging at times.”
                </CardTextNewsRightText>
              </div>
            </CardTextNewsRight>
            <CardTextNewsRight>
              <img src="/rectangle-25.png" alt="" />
              <div>
                <CardTextNewsRightTitle>
                  LeBron James Keeps the World Watching
                </CardTextNewsRightTitle>
                <CardTextNewsRightText>
                  The Los Angeles Lakers star has embraced the often harsh
                  spotlight of celebrity to further his career and personal
                  goals. But he said it can be “challenging at times.”
                </CardTextNewsRightText>
              </div>
            </CardTextNewsRight>
            <CardTextNewsRight>
              <img src="/rectangle-25.png" alt="" />
              <div>
                <CardTextNewsRightTitle>
                  LeBron James Keeps the World Watching
                </CardTextNewsRightTitle>
                <CardTextNewsRightText>
                  The Los Angeles Lakers star has embraced the often harsh
                  spotlight of celebrity to further his career and personal
                  goals. But he said it can be “challenging at times.”
                </CardTextNewsRightText>
              </div>
            </CardTextNewsRight>
            <CardTextNewsRight>
              <img src="/rectangle-25.png" alt="" />
              <div>
                <CardTextNewsRightTitle>
                  LeBron James Keeps the World Watching
                </CardTextNewsRightTitle>
                <CardTextNewsRightText>
                  The Los Angeles Lakers star has embraced the often harsh
                  spotlight of celebrity to further his career and personal
                  goals. But he said it can be “challenging at times.”
                </CardTextNewsRightText>
              </div>
            </CardTextNewsRight>
            <CardTextNewsRight>
              <img src="/rectangle-25.png" alt="" />
              <div>
                <CardTextNewsRightTitle>
                  LeBron James Keeps the World Watching
                </CardTextNewsRightTitle>
                <CardTextNewsRightText>
                  The Los Angeles Lakers star has embraced the often harsh
                  spotlight of celebrity to further his career and personal
                  goals. But he said it can be “challenging at times.”
                </CardTextNewsRightText>
              </div>
            </CardTextNewsRight>
            <CardTextNewsRight>
              <img src="/rectangle-25.png" alt="" />
              <div>
                <CardTextNewsRightTitle>
                  LeBron James Keeps the World Watching
                </CardTextNewsRightTitle>
                <CardTextNewsRightText>
                  The Los Angeles Lakers star has embraced the often harsh
                  spotlight of celebrity to further his career and personal
                  goals. But he said it can be “challenging at times.”
                </CardTextNewsRightText>
              </div>
            </CardTextNewsRight>
            <CardTextNewsRight>
              <img src="/rectangle-25.png" alt="" />
              <div>
                <CardTextNewsRightTitle>
                  LeBron James Keeps the World Watching
                </CardTextNewsRightTitle>
                <CardTextNewsRightText>
                  The Los Angeles Lakers star has embraced the often harsh
                  spotlight of celebrity to further his career and personal
                  goals. But he said it can be “challenging at times.”
                </CardTextNewsRightText>
              </div>
            </CardTextNewsRight>
            <CardTextNewsRight>
              <img src="/rectangle-25.png" alt="" />
              <div>
                <CardTextNewsRightTitle>
                  LeBron James Keeps the World Watching
                </CardTextNewsRightTitle>
                <CardTextNewsRightText>
                  The Los Angeles Lakers star has embraced the often harsh
                  spotlight of celebrity to further his career and personal
                  goals. But he said it can be “challenging at times.”
                </CardTextNewsRightText>
              </div>
            </CardTextNewsRight>
          </ContainerNewsRightRender>
        </ContainerNewsRight>
      </ContainerNews>
    </Container>
  );
};

export default Home;
