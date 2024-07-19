import axios from "axios";

export async function fetchArticles(query, page) {
  const ACCESS_KEY = "7IEV49mwrkOt8WoroWADJtXhloHtYVV6N-r4CiwKmhY";

  axios.defaults.baseURL = "https://api.unsplash.com";
  axios.defaults.headers.common["Authorization"] = `Client-ID ${ACCESS_KEY}`;

  const response = await axios.get("/search/photos", {
    params: {
      query,
      per_page: 12,
      page,
      orientation: "landscape",
    },
  });

  return response.data;
}
