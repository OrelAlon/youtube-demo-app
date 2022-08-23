import axios from "axios";

const KEY = "AIzaSyBesGSTccxlWOfHCoAwp12sL2QvHjbXTZg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
