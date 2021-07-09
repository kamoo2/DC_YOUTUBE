import React, { PureComponent } from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";
export default class VideoList extends PureComponent {
  render() {
    const { videos, onVideoClick, display } = this.props;
    return (
      <ul className={styles.videos}>
        {videos.map((video) => (
          <VideoItem
            key={video.id}
            video={video}
            onVideoClick={onVideoClick}
            display={display}
          />
        ))}
      </ul>
    );
  }
}
