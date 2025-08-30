
import './App.css';
import Video from "./components/Video"


function App() {
  return (
    <div className="app"> 
      <div className="app__videos"> 
        <Video 
        url ="https://res.cloudinary.com/dxkxvfo2o/video/upload/
v1608169738/video1_cvrjfm.mp4" 
    channel ="kemsguy " 
    description ="Home PC Setup"
    song ="Chill Vibes"
    likes ={100}
    shares ={50}
    messages ={25}
/> 
             <Video 
        url ="https://res.cloudinary.com/dxkxvfo2o/video/upload/
v1608169738/video1_cvrjfm.mp4" 
    channel ="kemsguy " 
    description ="Home PC Setup"
    song ="Chill Vibes"
    likes ={100}
    shares ={50}
    messages ={25}
/> 
      </div>
    </div>
  );
}


export default App;

