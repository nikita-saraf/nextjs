import axios from "axios";

export const getNews = (keyword: string) => {
  axios
    .get(
      `http://api.mediastack.com/v1/news?access_key=${process.env.NEXT_PUBLIC_MEDIASTACK_API_KEY}&keywords=${keyword}&sources=en`
    )
    .then((response) => {
      console.log(response);
    });
};
