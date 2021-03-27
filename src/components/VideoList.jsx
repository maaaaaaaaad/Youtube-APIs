import React, { Component } from "react";
import styles from "./css/VideoList.module.css";

class VideoList extends Component {
  click = () => {
    this.props.onClick(this.props.item);
  };
  render() {
    const { itemTitle, itemThumbnails, itemChannelTitle } = this.props;
    return (
      <li className={styles.list}>
        <div className={styles.container} onClick={this.click}>
          <img
            className={styles.thumbnail}
            src={itemThumbnails}
            alt="smallThunbnails"
          />
          <div className={styles.division}>
            <p className={styles.channel}>{itemChannelTitle}</p>
            <p className={styles.title}>{itemTitle}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoList;
