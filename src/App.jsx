import React, { Component } from "react";
import "./components/css/App.css";
import VideoList from "./components/VideoList";
import "./components/css/App.css";
import Search from "./components/Search";

class App extends Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    this.props.youtube
      .mostPopular() //
      .then((result) => this.setState({ videos: result }));
  }

  enter = (text) => {
    this.props.youtube
      .search(text) //
      .then((result) => this.setState({ videos: result }));
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
