import axios from "axios";
import { createContext, useEffect, useState } from "react";

const Contextservice = createContext("");
const ContextApp = ({ children }) => {
  const [latestNews, setlatestNews] = useState([]);
  const [trendingCourse, setrendingCourse] = useState([]);
  const [upComingCourse, setupComingCourse] = useState([]);
  const [availableCourse, setavailableCourse] = useState([]);

  const GetlatestNews = async () => {
    const response = await axios.get(
      "http://techvictus.com:4000/news/latestNews"
    );
    setlatestNews(response.data.data);
  };
  const GetTrendingCourse = async () => {
    const response = await axios.get(
      "http://techvictus.com:4000/course/trendingCourse"
    );
    setrendingCourse(response.data.data);
  };
  const GetupComingCourse = async () => {
    const response = await axios.get(
      "http://techvictus.com:4000/course/upComingCourse"
    );
    setupComingCourse(response.data.data);
  };
  const GetavailableCourse = async () => {
    const response = await axios.get(
      "http://techvictus.com:4000/course/availableCourse"
    );
    setavailableCourse(response.data.data);
  };

  useEffect(() => {
    GetlatestNews();
    GetTrendingCourse();
    GetupComingCourse();
    GetavailableCourse();
  }, []);
  return (
    <Contextservice.Provider
      value={{ latestNews, trendingCourse, upComingCourse, availableCourse }}
    >
      {children}
    </Contextservice.Provider>
  );
};

export default ContextApp;
export { Contextservice };
