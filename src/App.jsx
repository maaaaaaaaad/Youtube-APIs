import React, { Component } from "react";
import "./components/css/App.css";
import VideoList from "./components/VideoList";
import "./components/css/App.css";

class App extends Component {
  state = {
    videos: [],
  };

  componentDidMount = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=26&key='';
    )
      .then((response) => response.json())
      .then((result) => {
        const items = result.items;
        this.setState({ videos: items });
      })
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <>
        <ul className="ul">
          {this.state.videos.map((item) => (
            <VideoList
              key={item.id}
              itemKind={item.kind}
              itemEtag={item.etag}
              itemTitle={item.snippet.title}
              itemThumbnails={item.snippet.thumbnails.default.url}
              itemChannelTitle={item.snippet.channelTitle}
            ></VideoList>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
