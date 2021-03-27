import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import YoutubeAxios from "./service/youtube-axios";

const youtubeAx = new YoutubeAxios(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtubeAx} />
  </React.StrictMode>,
  document.getElementById("root")
);
