import { Title } from "../components/title";
import { getNews } from "./api/getNews";

getNews("tennis");

const NationalNews = () => {
  return <Title>National</Title>;
};

export default NationalNews;
