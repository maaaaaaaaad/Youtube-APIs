import axios from "axios";

class YoutubeAxios {
  constructor(key) {
    this.youtubeAx = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: key },
    });
  }

  async mostPopular() {
    const res = await this.youtubeAx.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 50,
      },
    });
    return res.data.items;
  }

  async search(text) {
    const res = await this.youtubeAx.get("search", {
      params: {
        part: "snippet",
        type: "video",
        maxResults: 50,
        q: text,
      },
    });
    return res.data.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default YoutubeAxios;
