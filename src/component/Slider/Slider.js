import { useEffect, useRef } from "react";
import Card from "../Card/Card";

export default function Slider(props) {
  const slideRef = useRef(null);

  const nextSlide = () => {
    props.currentSlide >= props.total ? 
      props.setCurrentSlide(0) : props.setCurrentSlide(props.currentSlide + 1);
  };
  const prevSlide = () => {
    props.currentSlide <= 0 ?
      props.setCurrentSlide(props.total) : props.setCurrentSlide(props.currentSlide - 1);
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${props.currentSlide}00%)`;
    // 백틱을 사용하여 슬라이드 이동하는 애니메이션 생성
  }, [props.currentSlide]);

  return (
    <div className="container">
      <button className="slider-prev-button" onClick={prevSlide}
      >{"<"}</button>  
      <div className="slider-container" ref={slideRef}>
        {props.posts.map((post, idx) =>
          <Card
            key={idx} 
            title={post.title}
            thumbnail={post.thumbnail}
          />
        )}
      </div>
      <button className="slider-next-button" onClick={nextSlide}
      >{">"}</button>
      <div className="slider-index">{props.currentSlide + 1} / {props.total + 1}</div>
      <style jsx>{`
        .container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        .slider-prev-button {
          position: absolute;
          top: 80px;
          left: 0px;
          z-index: 99999;
        }
        .slider-next-button {
          position: absolute;
          top: 80px;
          right: 0px;
          z-index: 99999;
        }
        .slider-container {
          width: 100%;
          display: flex;
        }
        .slider-index {
          position: absolute;
          bottom: 10px;
          right: 50%;
          z-index: 99999;
        }
      `}</style>
    </div>
  )
}
  