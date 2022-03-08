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
          transition: 0.3s;
          border-radius: 5px;
          overflow: hidden;
          background: white;
          margin-bottom: 15px;
          height: 150px;
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
          width: 100%;
          margin-bottom: -6px;
        }
      `}</style>
    </div>
  )
}
  