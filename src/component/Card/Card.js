export default function Card(props) {
  return (
    <div className="card">
      <div className="left">
        <img src={props.thumbnail} />
      </div>
      <div className="right">
        {props.title}
      </div>
      <style jsx>{`
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
          border-radius: 5px;
          overflow: hidden;
          background: white;
          margin: 15px 0px 15px 0px;
          width: 100%; height: 150px;
          flex-shrink: 0; //flex item 크기 안줄어들고 원래 크기로 유지
        }
        .card > div {
          object-fit: cover;
        }
        .left {
          float: left;
          width: 40%;
        }
        .right {
          float: right;
          width: 60%;
          padding: 5px;
        }
        img {
          width: 100%; height: 150px;
        }
      `}</style>
    </div>
  )
}
  