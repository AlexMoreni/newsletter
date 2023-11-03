import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home.jsx";

import "./App.css";

function App() {
  const [news, setNews] = useState([]);
  const [headline, setHeadline] = useState("");
  const [newsMore, setNewsMore] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const apiKey = "ba80d61933a54e5faed3b2ef691a8864";
    let apiUrl = "";

    const getDate = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();

      return `${year}-${month}-${day}`;
    };

    if (headline) {
      apiUrl = `https://newsapi.org/v2/everything?domains=globo.com,uol.com.br&q=${headline}&from=${new Date(
        new Date().setDate(new Date().getDate() - 10)
      )
        .toLocaleDateString()
        .split("/")
        .reverse()
        .join("-")}&to=${getDate()}&sortBy=popularity&apiKey=${apiKey}`;
    } else {
      apiUrl = `https://newsapi.org/v2/everything?domains=globo.com,uol.com.br&sortBy=popularity&from=${new Date(
        new Date().setDate(new Date().getDate() - 10)
      )
        .toLocaleDateString()
        .split("/")
        .reverse()
        .join("-")}&to=${getDate()}&apiKey=${apiKey}`;
    }

    axios
      .get(apiUrl)
      .then((response) => {
        setNews(response.data.articles.slice(0, 18));
      })
      .catch((err) => {
        console.log(`Erro ao buscar noticias: ${err}`);
      });
  }, [headline]);

  const loadMoreItems = async () => {
    if (isLoading) return;

    setIsLoading(true);

    const apiKey = "ba80d61933a54e5faed3b2ef691a8864";
    let apiUrl = `https://newsapi.org/v2/everything?domains=globo.com,uol.com.br&sortBy=popularity&from=2023-10-31&to=2023-10-31&apiKey=${apiKey}`;

    const getDate = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();

      return `${year}-${month}-${day}`;
    };

    if (headline) {
      apiUrl = `https://newsapi.org/v2/everything?domains=globo.com,uol.com.br&q=${headline}&from=${new Date(
        new Date().setDate(new Date().getDate() - 10)
      )
        .toLocaleDateString()
        .split("/")
        .reverse()
        .join("-")}&to=${getDate()}&sortBy=popularity&apiKey=${apiKey}`;
    } else {
      apiUrl = `https://newsapi.org/v2/everything?domains=globo.com,uol.com.br&sortBy=popularity&from=${new Date(
        new Date().setDate(new Date().getDate() - 10)
      )
        .toLocaleDateString()
        .split("/")
        .reverse()
        .join("-")}&to=${getDate()}&apiKey=${apiKey}`;
    }

    axios
      .get(apiUrl)
      .then((response) => {
        setNewsMore((prevNews) => [
          ...prevNews,
          ...response.data.articles.slice(
            news.length + newsMore.length,
            news.length + newsMore.length + 6
          ),
        ]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(`Erro ao buscar noticias: ${err}`);
      });
  };

  useEffect(() => {
    console.log();

    console.log(
      new Date(new Date().setDate(new Date().getDate() - 5))
        .toLocaleDateString()
        .split("/")
        .reverse()
        .join("-")
    );

    console.log(news);
    console.log(newsMore);
  }, [news, newsMore]);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              news={news}
              setHeadline={setHeadline}
              loadMoreItems={loadMoreItems}
              newsMore={newsMore}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
