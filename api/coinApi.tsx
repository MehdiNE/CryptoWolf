import axios from "axios";

//trending
const coinsApi = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

export const getTrendingCoins = async () =>
  await coinsApi.get(
    "/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"
  );

//news
const options = {
  method: "GET",
  url: "https://bing-news-search1.p.rapidapi.com/news/search",
  params: {
    q: "cryptocurrency ",
    count: "30",
    freshness: "Week",
    textFormat: "Raw",
    safeSearch: "Off",
  },
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": "a216f6034amshd37cd14b9231cc3p164abbjsn7b5a7e67c304",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
};

export const getCryptoNews = async (asaegeg: string) =>
  axios.request({
    method: "GET",
    url: `https://bing-news-search1.p.rapidapi.com/news/search?q=${asaegeg}`,
    params: {
      count: "30",
      freshness: "Week",
      textFormat: "Raw",
      safeSearch: "Off",
    },
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "76b0ca4940msh1e5f2ed01b6f7eep13e076jsn7cf4680d0162",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  });
