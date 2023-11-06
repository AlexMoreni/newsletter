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

const Home = ({ news, setHeadline, loadMoreItems, newsMore, isLoading }) => {
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
              <a href={news && news[0] && news[0].url} target="_blank">
                <NewsHeaderLeftFirstTitle>
                  {news &&
                    news[0] &&
                    (news[0].title
                      ? news[0].title
                      : news[0].description.split(" ").slice(0, 10).join(" "))}
                </NewsHeaderLeftFirstTitle>
                <NewsHeaderLeftFirstImg
                  src={news && news[0] && news[0].urlToImage}
                />
              </a>
            </NewsHeaderLeftFirst>
            <NewsHeaderLeftSeccond>
              <a href={news && news[1] && news[1].url} target="_blank">
                <NewsHeaderLeftSeccondTitle>
                  {news &&
                    news[1] &&
                    (news[1].title
                      ? news[1].title
                      : news[1].description.split(" ").slice(0, 10).join(" "))}
                </NewsHeaderLeftSeccondTitle>
                <NewsHeaderLeftSeccondText>
                  {news && news[1] && news[1].description}
                </NewsHeaderLeftSeccondText>
              </a>
              <NewsHeaderLeftSeccondImg
                src={news && news[1] && news[1].urlToImage}
                alt=""
              />
            </NewsHeaderLeftSeccond>
          </ContainerNewsHeaderLeft>
          <ContainerNewsHeaderRight>
            <a href={news && news[2] && news[2].url} target="_blank">
              <NewsHeaderRightFirst>
                <NewsHeaderRightFirstText>
                  {news && news[2] && news[2].content}
                </NewsHeaderRightFirstText>
                <NewsHeaderRightFirstImg
                  src={news && news[2] && news[2].urlToImage}
                />
              </NewsHeaderRightFirst>
            </a>
            <a href={news && news[3] && news[3].url} target="_blank">
              <NewsHeaderRightSeccond>
                <NewsHeaderRightSeccondImg
                  src={news && news[3] && news[3].urlToImage}
                />
                <div>
                  <NewsHeaderRightSeccondTitle>
                    {news &&
                      news[3] &&
                      (news[3].title
                        ? news[3].title
                        : news[3].description
                            .split(" ")
                            .slice(0, 10)
                            .join(" "))}
                  </NewsHeaderRightSeccondTitle>
                  <NewsHeaderRightSeccondText>
                    {news && news[3] && news[3].content}
                  </NewsHeaderRightSeccondText>
                </div>
              </NewsHeaderRightSeccond>
            </a>
          </ContainerNewsHeaderRight>
        </ContainerNewsHeader>
      </Header>
      {isLoading && <div className="loader"></div>}
      <ContainerNews>
        <ContainerNewsLeft>
          <ContainerNewsLeftTitle>
            <NewsLeftTitle>Latest News</NewsLeftTitle>
            <NewsLeftRow></NewsLeftRow>
          </ContainerNewsLeftTitle>
          <ContainerNewsLeftRender>
            <a href={news && news[4] && news[4].url} target="_blank">
              <CardImgNewsLeft>
                <CardImgNewsLeftImg
                  src={news && news[4] && news[4].urlToImage}
                  alt=""
                />
                <CardImgNewsLeftTitle>
                  {news && news[4] && news[4].description}
                </CardImgNewsLeftTitle>
              </CardImgNewsLeft>
            </a>
            <a href={news && news[5] && news[5].url} target="_blank">
              <CardImgNewsLeft>
                <CardImgNewsLeftImg
                  src={news && news[5] && news[5].urlToImage}
                  alt=""
                />
                <CardImgNewsLeftTitle>
                  {news && news[5] && news[5].description}
                </CardImgNewsLeftTitle>
              </CardImgNewsLeft>
            </a>
            <a href={news && news[6] && news[6].url} target="_blank">
              <CardTextNewsLeft>
                <CardTextNewsLeftTitle>
                  {news &&
                    news[6] &&
                    (news[6].title
                      ? news[6].title
                      : news[6].description.split(" ").slice(0, 10).join(" "))}
                </CardTextNewsLeftTitle>
                <CardTextNewsLeftText>
                  {news && news[6] && news[6].content}
                </CardTextNewsLeftText>
              </CardTextNewsLeft>
            </a>
            <a href={news && news[7] && news[7].url} target="_blank">
              <CardTextNewsLeft>
                <CardTextNewsLeftTitle>
                  {news &&
                    news[7] &&
                    (news[7].title
                      ? news[7].title
                      : news[7].description.split(" ").slice(0, 10).join(" "))}
                </CardTextNewsLeftTitle>
                <CardTextNewsLeftText>
                  {news && news[7] && news[7].content}
                </CardTextNewsLeftText>
              </CardTextNewsLeft>
            </a>
            <a href={news && news[8] && news[8].url} target="_blank">
              <CardImgNewsLeft>
                <CardImgNewsLeftImg
                  src={news && news[8] && news[8].urlToImage}
                  alt=""
                />
                <CardImgNewsLeftTitle>
                  {news && news[8] && news[8].description}
                </CardImgNewsLeftTitle>
              </CardImgNewsLeft>
            </a>
            <a href={news && news[9] && news[9].url} target="_blank">
              <CardImgNewsLeft>
                <CardImgNewsLeftImg
                  src={news && news[9] && news[9].urlToImage}
                  alt=""
                />
                <CardImgNewsLeftTitle>
                  {news && news[9] && news[9].description}
                </CardImgNewsLeftTitle>
              </CardImgNewsLeft>
            </a>
            {newsMore &&
              newsMore.map((newNews, index) => (
                <>
                  {index % 2 === 0 ? (
                    <a href={newNews.url} target="_blank" key={newNews.id}>
                      <CardTextNewsLeft>
                        <CardTextNewsLeftTitle>
                          {newNews.title
                            ? newNews.title
                            : newNews.description
                                .split(" ")
                                .slice(0, 10)
                                .join(" ")}
                        </CardTextNewsLeftTitle>
                        <CardTextNewsLeftText>
                          {newNews.content}
                        </CardTextNewsLeftText>
                      </CardTextNewsLeft>
                    </a>
                  ) : (
                    <a href={newNews.url} target="_blank" key={newNews.id}>
                      <CardImgNewsLeft>
                        <CardImgNewsLeftImg src={newNews.urlToImage} alt="" />
                        <CardImgNewsLeftTitle>
                          {newNews.description}
                        </CardImgNewsLeftTitle>
                      </CardImgNewsLeft>
                    </a>
                  )}
                </>
              ))}
          </ContainerNewsLeftRender>
          <ButtonViewMore
            onClick={() => {
              loadMoreItems();
            }}
          >
            Ver mais
          </ButtonViewMore>
        </ContainerNewsLeft>
        <ContainerNewsRight>
          <ContainerNewsRightTitle>
            <NewsRightTitle>Manchetes populares</NewsRightTitle>
            <NewsRightButton>Ver mais</NewsRightButton>
          </ContainerNewsRightTitle>
          <ContainerNewsRightRender>
            <a href={news && news[10] && news[10].url} target="_blank">
              <CardTextNewsRight>
                <CardTextNewsRightImg
                  src={news && news[10] && news[10].urlToImage}
                />
                <div>
                  <CardTextNewsRightTitle>
                    {news &&
                      news[10] &&
                      (news[10].title
                        ? news[10].title
                        : news[10].description
                            .split(" ")
                            .slice(0, 10)
                            .join(" "))}
                  </CardTextNewsRightTitle>
                  <CardTextNewsRightText>
                    {news && news[10] && news[10].description}
                  </CardTextNewsRightText>
                </div>
              </CardTextNewsRight>
            </a>
            <a href={news && news[11] && news[11].url} target="_blank">
              <CardTextNewsRight>
                <CardTextNewsRightImg
                  src={news && news[11] && news[11].urlToImage}
                />
                <div>
                  <CardTextNewsRightTitle>
                    {news &&
                      news[11] &&
                      (news[11].title
                        ? news[11].title
                        : news[11].description
                            .split(" ")
                            .slice(0, 10)
                            .join(" "))}
                  </CardTextNewsRightTitle>
                  <CardTextNewsRightText>
                    {news && news[11] && news[11].description}
                  </CardTextNewsRightText>
                </div>
              </CardTextNewsRight>
            </a>
            <a href={news && news[12] && news[12].url} target="_blank">
              <CardTextNewsRight>
                <CardTextNewsRightImg
                  src={news && news[12] && news[12].urlToImage}
                />
                <div>
                  <CardTextNewsRightTitle>
                    {news &&
                      news[12] &&
                      (news[12].title
                        ? news[12].title
                        : news[12].description
                            .split(" ")
                            .slice(0, 10)
                            .join(" "))}
                  </CardTextNewsRightTitle>
                  <CardTextNewsRightText>
                    {news && news[12] && news[12].description}
                  </CardTextNewsRightText>
                </div>
              </CardTextNewsRight>
            </a>
            <a href={news && news[13] && news[13].url} target="_blank">
              <CardTextNewsRight>
                <CardTextNewsRightImg
                  src={news && news[13] && news[13].urlToImage}
                />
                <div>
                  <CardTextNewsRightTitle>
                    {news &&
                      news[13] &&
                      (news[13].title
                        ? news[13].title
                        : news[13].description
                            .split(" ")
                            .slice(0, 10)
                            .join(" "))}
                  </CardTextNewsRightTitle>
                  <CardTextNewsRightText>
                    {news && news[13] && news[13].description}
                  </CardTextNewsRightText>
                </div>
              </CardTextNewsRight>
            </a>
            <a href={news && news[14] && news[14].url} target="_blank">
              <CardTextNewsRight>
                <CardTextNewsRightImg
                  src={news && news[14] && news[14].urlToImage}
                />
                <div>
                  <CardTextNewsRightTitle>
                    {news &&
                      news[14] &&
                      (news[14].title
                        ? news[14].title
                        : news[14].description
                            .split(" ")
                            .slice(0, 10)
                            .join(" "))}
                  </CardTextNewsRightTitle>
                  <CardTextNewsRightText>
                    {news && news[14] && news[14].description}
                  </CardTextNewsRightText>
                </div>
              </CardTextNewsRight>
            </a>
            <a href={news && news[15] && news[15].url} target="_blank">
              <CardTextNewsRight>
                <CardTextNewsRightImg
                  src={news && news[15] && news[15].urlToImage}
                />
                <div>
                  <CardTextNewsRightTitle>
                    {news &&
                      news[15] &&
                      (news[15].title
                        ? news[15].title
                        : news[15].description
                            .split(" ")
                            .slice(0, 10)
                            .join(" "))}
                  </CardTextNewsRightTitle>
                  <CardTextNewsRightText>
                    {news && news[15] && news[15].description}
                  </CardTextNewsRightText>
                </div>
              </CardTextNewsRight>
            </a>
            <a href={news && news[16] && news[16].url} target="_blank">
              <CardTextNewsRight>
                <CardTextNewsRightImg
                  src={news && news[16] && news[16].urlToImage}
                />
                <div>
                  <CardTextNewsRightTitle>
                    {news &&
                      news[16] &&
                      (news[16].title
                        ? news[16].title
                        : news[16].description
                            .split(" ")
                            .slice(0, 10)
                            .join(" "))}
                  </CardTextNewsRightTitle>
                  <CardTextNewsRightText>
                    {news && news[16] && news[16].description}
                  </CardTextNewsRightText>
                </div>
              </CardTextNewsRight>
            </a>
            <a href={news && news[17] && news[17].url} target="_blank">
              <CardTextNewsRight>
                <CardTextNewsRightImg
                  src={news && news[17] && news[17].urlToImage}
                />
                <div>
                  <CardTextNewsRightTitle>
                    {news &&
                      news[17] &&
                      (news[17].title
                        ? news[17].title
                        : news[17].description
                            .split(" ")
                            .slice(0, 10)
                            .join(" "))}
                  </CardTextNewsRightTitle>
                  <CardTextNewsRightText>
                    {news && news[17] && news[17].description}
                  </CardTextNewsRightText>
                </div>
              </CardTextNewsRight>
            </a>
          </ContainerNewsRightRender>
        </ContainerNewsRight>
      </ContainerNews>
      <Footer />
    </Container>
  );
};

export default Home;
