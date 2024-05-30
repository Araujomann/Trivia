import axios from "axios";

export const triviaFetch = axios.create({
  baseURL: "https://the-trivia-api.com",
});
