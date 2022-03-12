export default function CurCard(props) {
  return (
    <div className="card">
      {props.posts[props.currentSlide].title}

      {props.posts[props.currentSlide].contents}
      <style jsx>{`
        .card {
          background: white;
          height: 55vh;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
          border-radius: 5px;
        }
      `}</style>
    </div>
  )
}
