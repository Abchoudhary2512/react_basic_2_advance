import "./Video.css";

function Video({ title, id, channel, views, time, verified }) {
  //   let topic = "react";
  //     let ans = "temporary";

  let channelJSX;

  //   if (verified) {
  //     channelJSX = <div className="channel">{channel} ✔️</div>;
  //   } else {
  //     channelJSX = <div className="channel">{channel}</div>;
  //   }

  return (
    <>
      <div className="pic">
        <img src={`https://picsum.photos/id/${id}/200/300`} alt="" />
      </div>

      <div className="title">{title}</div>
      <div className="channel">
        {channel} {verified && "✔️"}
      </div>
      <div className="views">
        {views}
        views <span>. </span>
        {time}
      </div>
    </>
  );
}

export default Video;
