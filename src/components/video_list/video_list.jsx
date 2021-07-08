import React, { Component } from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";
export default class VideoList extends Component {
  render() {
    const { videos } = this.props;
    return (
      <ul className={styles.videos}>
        {videos.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </ul>
    );
  }
}
