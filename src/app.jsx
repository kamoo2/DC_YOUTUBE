import { useCallback, useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
import Header from "./components/header/header";
import VideoDetail from "./components/video_detail/video_detail";
function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = useCallback((video) => {
    setSelectedVideo(video);
  }, []);

  const search = useCallback(
    async (query) => {
      const videos = await youtube.search(query);
      setVideos(videos);
      setSelectedVideo(null);
    },
    [youtube]
  );

  useEffect(() => {
    async function fetchData() {
      const videos = await youtube.mostPopular();
      setIsLoaded(true);
      setVideos(videos);
    }
    fetchData();
  }, [youtube]);

  return (
    <div className={styles.app}>
      {!isLoaded ? (
        <div>Loading ...</div>
      ) : (
        <>
          <Header onSearch={search} />
          <section className={styles.content}>
            {selectedVideo && (
              <div className={styles.detail}>
                <VideoDetail video={selectedVideo} />
              </div>
            )}
            <div className={styles.list}>
              <VideoList
                videos={videos}
                onVideoClick={selectVideo}
                display={selectedVideo ? "list" : "grid"}
              />
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default App;
