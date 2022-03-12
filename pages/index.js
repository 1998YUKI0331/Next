import { useState } from "react";
import axios from "axios";
import CurCard from "../src/component/Card/CurCard";
import Slider from "../src/component/Slider/Slider"

export default function Home({ posts }) {
  const TOTAL_SLIDES = Object.keys(posts).length - 1;
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div>
      <CurCard 
        posts={posts} 
        currentSlide={currentSlide}
      />
      <Slider
        posts={posts} 
        total={TOTAL_SLIDES}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  )
}

export async function getServerSideProps() { 
  const kakao = (keyword) => {
    return axios.create({
      baseURL: "https://dapi.kakao.com/v2/search/blog?target=title",
      headers: { Authorization: process.env.NEXT_PUBLIC_KAKAO_API_KEY },
      params: { query: keyword }
    });
  }

  const res = await kakao("하이").get();
  const posts = res.data.documents;
  return { props: { posts } }; 
} 
