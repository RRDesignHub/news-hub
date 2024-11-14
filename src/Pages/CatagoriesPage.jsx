import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

export const CatagoriesPage = () => {
  const { data: news } = useLoaderData();
  
  return (
    <>
      <div className="space-y-8">
        {
          news.map(singleNews=><NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
        }
      </div>
    </>
  )
};
