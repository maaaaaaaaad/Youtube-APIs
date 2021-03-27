import React, { Component } from "react";
import styles from "./css/View.module.css";

class View extends Component {
  render() {
    return (
      <section className={styles.viewer}>
        <iframe
          className={styles.iframe}
          title="This is a unique title"
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${this.props.video.id}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>
    );
  }
}

export default View;
