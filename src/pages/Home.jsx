import React from "react";
import Main from "../components/main/Main";
import Row from "../components/row/Row";
import requests from "../requests/request";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId="1" title="Up Coming" fetchUrl={requests.requestUpcoming} />
      <Row rowId="2" title="Popular" fetchUrl={requests.requestPopular} />
      <Row rowId="3" title="Trending" fetchUrl={requests.requestTrending} />
      <Row rowId="4" title="Horror" fetchUrl={requests.requestHorror} />
      <Row rowId="5" title="Top rated" fetchUrl={requests.requestToprated} />
    </>
  );
};

export default Home;
