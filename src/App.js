import "./App.css";
import MyNavbar from "./mynavbar";
import MainContent from  "./mainContent"
import Footer from "./footer";
import { useState } from "react";


function App() {
 const [Counter, setCounter] = useState(1)
 const [str, setstr] = useState("")
  return (
    <div className="App">
      <MyNavbar />
      <header className="App-header">
      
      <button onClick={()=>setCounter(Counter+1)}>{Counter}</button>
      
      <button onClick={()=>setstr(str+"d")}>{str}</button>
  
      <MainContent/>
    
      </header> 
       <Footer/>
    </div>
  );
}

export default App;
