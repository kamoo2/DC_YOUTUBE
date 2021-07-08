import { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";
import "./app.css";
import Header from "./components/header/header";
function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const search = async (query) => {
    const videos = await youtube.search(query);
    setVideos(videos);
  };

  // useEffect에 아무것도 넣어주지 않는다면 props나 state가 없데이트 될 때마다 무조건 반복적으로 호출
  // 만약 특정 변수가 update 됬을때만 호출하고 싶다면 []안에 변수를 넣어주고 처음 컴포넌트가 마운트 됬을 때 한번만 호출하기 위해서는 []
  useEffect(() => {
    async function fetchData() {
      const videos = await youtube.mostPopular();
      setIsLoaded(true);
      setVideos(videos);
    }
    fetchData();
  }, []);

  return (
    <div className="Wrapper">
      {!isLoaded ? (
        <div>Loading ...</div>
      ) : (
        <>
          <Header onSearch={search} />
          <VideoList videos={videos} />
        </>
      )}
    </div>
  );
}

export default App;
