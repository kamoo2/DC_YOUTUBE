import axios from "axios";

class Youtube {
  constructor(key) {
    this.client = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key },
    });
  }

  async mostPopular() {
    const response = await this.client.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    console.log(response);
    return response.data.items;
  }

  async search(query) {
    const response = await this.client.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: query,
      },
    });
    console.log(response);
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
