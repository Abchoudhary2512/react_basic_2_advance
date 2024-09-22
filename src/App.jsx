import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videos from "./data/data";
function App() {
  return (
    <>
      <div>Videos</div>
      {videos.map((video, index) => (
        <Video
          key={index}
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
          verified={video.verified}
          id={video.id}
        ></Video>
      ))}
      <PlayButton></PlayButton>
    </>
  );
}

export default App;
