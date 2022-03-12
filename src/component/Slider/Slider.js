import { useEffect, useRef } from "react";
import Card from "../Card/Card";

export default function Slider(props) {
  const slideRef = useRef(null);

  const nextSlide = () => {
    props.currentSlide >= props.total ? 
      props.setCurrentSlide(0) : props.setCurrentSlide(props.currentSlide + 1);
  };
  const prevSlide = () => {
    props.currentSlide === props.total ?
      props.setCurrentSlide(TOTAL_SLIDES) : props.setCurrentSlide(props.currentSlide - 1);
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${props.currentSlide}00%)`;
    // 백틱을 사용하여 슬라이드 이동하는 애니메이션 생성
  }, [props.currentSlide]);


  return (
    <div className="container">
      <div className="slider-container" ref={slideRef}>
        {props.posts.map((post, idx) =>
          <Card
            key={idx} 
            title={post.title}
            thumbnail={post.thumbnail}
          />
        )}
      </div>
      <button className="slider-button" onClick={prevSlide}
      >Previous Slide</button>
      <button className="slider-button" onClick={nextSlide}
      >Next Slide</button>
      <style jsx>{`
        .container {
          width: 100%;
          overflow: hidden;
        }
        .slider-button {
          all: unset;
          border: 1px solid coral;
          padding: 0.5em 2em;
          color: coral;
          border-radius: 10px;
        }
        .slider-container {
          width: 100%;
          display: flex;
        }
      `}</style>
    </div>
  )
}
  