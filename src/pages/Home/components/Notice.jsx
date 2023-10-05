import React, { useContext } from "react";
import NewsCard from "./NewsCard";
import { Contextservice } from "../../../context/ContextApp";

const Notice = () => {
  const { latestNews } = useContext(Contextservice);
  return (
    <section className=" body-font">
      <div className="container px-2 py-10 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">Latest News</h2>
        <div className="flex flex-wrap justify-center -m-4">
          {latestNews &&
            latestNews.map((x) => <NewsCard news={x} key={x.id} />)}
        </div>
      </div>
    </section>
  );
};

export default Notice;
