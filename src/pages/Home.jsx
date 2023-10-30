import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

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
  NewsHeaderLeftFirstTitle,
  NewsHeaderLeftFirstImg,
  NewsHeaderLeftSeccond,
  NewsHeaderLeftSeccondTitle,
  NewsHeaderLeftSeccondText,
  NewsHeaderLeftSeccondImg,
  NewsHeaderRightFirst,
  NewsHeaderRightFirstText,
  NewsHeaderRightFirstImg,
  NewsHeaderRightSeccond,
  NewsHeaderRightSeccondTitle,
  NewsHeaderRightSeccondText,
  NewsHeaderRightSeccondImg,
  ContainerNews,
  ContainerNewsLeft,
  ContainerNewsLeftTitle,
  NewsLeftTitle,
  NewsLeftRow,
  ContainerNewsLeftRender,
  CardImgNewsLeft,
  CardImgNewsLeftImg,
  CardImgNewsLeftTitle,
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
  CardTextNewsRightImg,
} from "./Home.style";

const Home = ({ news, setHeadline }) => {
  const handleHeadline = (e) => {
    e.preventDefault();

    setHeadline(e.target[0].value);
  };

  return (
    <Container>
      <Header>
        <ContainerSearch>
          <TitleHeader>
            <a href="">Newsletter</a>
          </TitleHeader>
          <form onSubmit={handleHeadline}>
            <InputSearch
              type="text"
              placeholder="Procurar por manchetes"
              name="headline"
            />
            <ButtonSearch>Buscar</ButtonSearch>
          </form>
        </ContainerSearch>
        <Navbar setHeadline={setHeadline} />
        <ContainerNewsHeader>
          <ContainerNewsHeaderLeft>
            <NewsHeaderLeftFirst>
              <NewsHeaderLeftFirstTitle>
                {news && news[0] && news[0].title}
              </NewsHeaderLeftFirstTitle>
              <NewsHeaderLeftFirstImg
                src={news && news[0] && news[0].urlToImage}
              />
            </NewsHeaderLeftFirst>
            <NewsHeaderLeftSeccond>
              <div>
                <NewsHeaderLeftSeccondTitle>
                  {news && news[1] && news[1].title}
                </NewsHeaderLeftSeccondTitle>
                <NewsHeaderLeftSeccondText>
                  {news && news[1] && news[1].description}
                </NewsHeaderLeftSeccondText>
              </div>
              <NewsHeaderLeftSeccondImg
                src={news && news[1] && news[1].urlToImage}
                alt=""
              />
            </NewsHeaderLeftSeccond>
          </ContainerNewsHeaderLeft>
          <ContainerNewsHeaderRight>
            <NewsHeaderRightFirst>
              <NewsHeaderRightFirstText>
                {news && news[2] && news[2].content}
              </NewsHeaderRightFirstText>
              <NewsHeaderRightFirstImg
                src={news && news[2] && news[2].urlToImage}
              />
            </NewsHeaderRightFirst>
            <NewsHeaderRightSeccond>
              <NewsHeaderRightSeccondImg
                src={news && news[3] && news[3].urlToImage}
              />
              <div>
                <NewsHeaderRightSeccondTitle>
                  {news && news[3] && news[3].title}
                </NewsHeaderRightSeccondTitle>
                <NewsHeaderRightSeccondText>
                  {news && news[3] && news[3].content}
                </NewsHeaderRightSeccondText>
              </div>
            </NewsHeaderRightSeccond>
          </ContainerNewsHeaderRight>
        </ContainerNewsHeader>
      </Header>
      <ContainerNews>
        <ContainerNewsLeft>
          <ContainerNewsLeftTitle>
            <NewsLeftTitle>Latest News</NewsLeftTitle>
            <NewsLeftRow></NewsLeftRow>
          </ContainerNewsLeftTitle>
          <ContainerNewsLeftRender>
            <CardImgNewsLeft>
              <CardImgNewsLeftImg
                src={news && news[4] && news[4].urlToImage}
                alt=""
              />
              <CardImgNewsLeftTitle>
                {news && news[4] && news[4].description}
              </CardImgNewsLeftTitle>
            </CardImgNewsLeft>
            <CardImgNewsLeft>
              <CardImgNewsLeftImg
                src={news && news[5] && news[5].urlToImage}
                alt=""
              />
              <CardImgNewsLeftTitle>
                {news && news[5] && news[5].description}
              </CardImgNewsLeftTitle>
            </CardImgNewsLeft>
            <CardTextNewsLeft>
              <CardTextNewsLeftTitle>
                {news && news[6] && news[6].title}
              </CardTextNewsLeftTitle>
              <CardTextNewsLeftText>
                {news && news[6] && news[6].content}
              </CardTextNewsLeftText>
            </CardTextNewsLeft>
            <CardTextNewsLeft>
              <CardTextNewsLeftTitle>
                {news && news[7] && news[7].title}
              </CardTextNewsLeftTitle>
              <CardTextNewsLeftText>
                {news && news[7] && news[7].content}
              </CardTextNewsLeftText>
            </CardTextNewsLeft>
            <CardImgNewsLeft>
              <CardImgNewsLeftImg
                src={news && news[8] && news[8].urlToImage}
                alt=""
              />
              <CardImgNewsLeftTitle>
                {news && news[8] && news[8].description}
              </CardImgNewsLeftTitle>
            </CardImgNewsLeft>
            <CardImgNewsLeft>
              <CardImgNewsLeftImg
                src={news && news[9] && news[9].urlToImage}
                alt=""
              />
              <CardImgNewsLeftTitle>
                {news && news[9] && news[9].description}
              </CardImgNewsLeftTitle>
            </CardImgNewsLeft>
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
              <CardTextNewsRightImg
                src={news && news[10] && news[10].urlToImage}
              />
              <div>
                <CardTextNewsRightTitle>
                  {news && news[10] && news[10].title}
                </CardTextNewsRightTitle>
                <CardTextNewsRightText>
                  {news && news[10] && news[10].description}
                </CardTextNewsRightText>
              </div>
            </CardTextNewsRight>
            <CardTextNewsRight>
              <CardTextNewsRightImg
                src={news && news[11] && news[11].urlToImage}
              />
              <div>
                <CardTextNewsRightTitle>
                  {news && news[11] && news[11].title}
                </CardTextNewsRightTitle>
                <CardTextNewsRightText>
                  {news && news[11] && news[11].description}
                </CardTextNewsRightText>
              </div>
            </CardTextNewsRight>
            <CardTextNewsRight>
              <CardTextNewsRightImg
                src={news && news[12] && news[12].urlToImage}
              />
              <div>
                <CardTextNewsRightTitle>
                  {news && news[12] && news[12].title}
                </CardTextNewsRightTitle>
                <CardTextNewsRightText>
                  {news && news[12] && news[12].description}
                </CardTextNewsRightText>
              </div>
            </CardTextNewsRight>
            <CardTextNewsRight>
              <CardTextNewsRightImg
                src={news && news[13] && news[13].urlToImage}
              />
              <div>
                <CardTextNewsRightTitle>
                  {news && news[13] && news[13].title}
                </CardTextNewsRightTitle>
                <CardTextNewsRightText>
                  {news && news[13] && news[13].description}
                </CardTextNewsRightText>
              </div>
            </CardTextNewsRight>
            <CardTextNewsRight>
              <CardTextNewsRightImg
                src={news && news[14] && news[14].urlToImage}
              />
              <div>
                <CardTextNewsRightTitle>
                  {news && news[14] && news[14].title}
                </CardTextNewsRightTitle>
                <CardTextNewsRightText>
                  {news && news[14] && news[14].description}
                </CardTextNewsRightText>
              </div>
            </CardTextNewsRight>
            <CardTextNewsRight>
              <CardTextNewsRightImg
                src={news && news[15] && news[15].urlToImage}
              />
              <div>
                <CardTextNewsRightTitle>
                  {news && news[15] && news[15].title}
                </CardTextNewsRightTitle>
                <CardTextNewsRightText>
                  {news && news[15] && news[15].description}
                </CardTextNewsRightText>
              </div>
            </CardTextNewsRight>
            <CardTextNewsRight>
              <CardTextNewsRightImg
                src={news && news[16] && news[16].urlToImage}
              />
              <div>
                <CardTextNewsRightTitle>
                  {news && news[16] && news[16].title}
                </CardTextNewsRightTitle>
                <CardTextNewsRightText>
                  {news && news[16] && news[16].description}
                </CardTextNewsRightText>
              </div>
            </CardTextNewsRight>
            <CardTextNewsRight>
              <CardTextNewsRightImg
                src={news && news[17] && news[17].urlToImage}
              />
              <div>
                <CardTextNewsRightTitle>
                  {news && news[17] && news[17].title}
                </CardTextNewsRightTitle>
                <CardTextNewsRightText>
                  {news && news[17] && news[17].description}
                </CardTextNewsRightText>
              </div>
            </CardTextNewsRight>
          </ContainerNewsRightRender>
        </ContainerNewsRight>
      </ContainerNews>
      <Footer />
    </Container>
  );
};

export default Home;
