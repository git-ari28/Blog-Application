import Blogwrite from "./components/Blogwrite.js"
import Showblogs from "./components/Showblogs.js";
import Homepage from "./components/pages/Homepage.js";
import {Routes,Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <>
      <Routes>
       <Route path="/" element={<Homepage/>}/>
        <Route path="/addblogs" element={<Blogwrite/>}/>
        <Route path="/myblogs" element={<Showblogs/>}/>
     
      </Routes>
      </>
    
  );
}

export default App;
