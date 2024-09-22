import Video from "./components/Video";
import data from "./data/data";
function App() {
  
  return (
    <>
      <div>Videos</div>
      {data.map((video, index) => (
        <Video
          key={index}  
          title={video.title}  
          channel={video.channel}
          views={video.views}
          time={video.time}
          verified={video.verified}
          id={video.id}
        />
      ))}
    </>
  );
}

export default App;
