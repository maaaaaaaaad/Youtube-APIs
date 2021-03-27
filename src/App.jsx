import React, { Component } from "react";
import "./components/css/App.css";
import VideoList from "./components/VideoList";
import "./components/css/App.css";
import Search from "./components/Search";

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

  enter = (text) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=${text}&type=video&key=AIzaSyAXoOeGeRjHNNe8F-UttAM1JkUBLOVRxxU`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => this.setState({ videos: items }))
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <>
        <Search userEnter={this.enter}></Search>
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
