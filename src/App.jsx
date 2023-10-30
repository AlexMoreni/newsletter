import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home.jsx";

import "./App.css";

function App() {
  const [news, setNews] = useState([]);
  const [headline, setHeadline] = useState("");

  useEffect(() => {
    const apiKey = "ba80d61933a54e5faed3b2ef691a8864";
    let apiUrl = "";

    if (headline) {
      apiUrl = `https://newsapi.org/v2/everything?domains=globo.com,uol.com.br&q=${headline}&sortBy=popularity&apiKey=${apiKey}`;
    } else {
      apiUrl = `https://newsapi.org/v2/everything?domains=globo.com,uol.com.br&sortBy=popularity&apiKey=${apiKey}`;
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

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home news={news} setHeadline={setHeadline} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
