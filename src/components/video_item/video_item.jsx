import React, { Component } from "react";
import styles from "./video_item.module.css";
export default class VideoItem extends Component {
  render() {
    const {
      video: { snippet },
    } = this.props;
    return (
      <li className={styles.container}>
        <div className={styles.video}>
          <img
            className={styles.thumbnail}
            src={snippet.thumbnails.medium.url}
            alt="thumbnail"
          />
          <div className={styles.metadata}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channelTitle}>{snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    );
  }
}
