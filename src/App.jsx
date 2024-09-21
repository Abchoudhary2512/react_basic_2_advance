import Video from "./components/Video";

function App() {
  return (
    <>
      <Video
        title="video1"
        channel="reactjs"
        views="20K"
        time="20 years ago "
        verified={true}
      />
      <Video
        title="video2"
        channel="nodejs"
        views="100K"
        time="10 years ago"
        verified={false}
      />
    </>
  );
}

export default App;
