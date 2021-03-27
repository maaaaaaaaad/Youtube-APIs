import React, { Component } from "react";
import "./components/css/App.css";
import VideoList from "./components/VideoList";
import "./components/css/App.css";
import Search from "./components/Search";
import View from "./components/View";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
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

  videoClick = (data) => {
    this.setState({ selectedVideo: data });
  };

  render() {
    return (
      <>
        <Search userEnter={this.enter}></Search>
        {this.state.selectedVideo && (
          <View video={this.state.selectedVideo}></View>
        )}
        <ul className="ul">
          {this.state.videos.map((item) => (
            <VideoList
              key={item.id}
              item={item}
              itemKind={item.kind}
              itemEtag={item.etag}
              itemSnippet={item.snippet}
              itemTitle={item.snippet.title}
              itemThumbnails={item.snippet.thumbnails.default.url}
              itemChannelTitle={item.snippet.channelTitle}
              onClick={this.videoClick}
            ></VideoList>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
