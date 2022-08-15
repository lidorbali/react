import "./App.css";
import MyNavbar from "./mynavbar";
import MainContent from  "./mainContent"
import Footer from "./footer";
function App() {
  return (
    <div className="App">
      <MyNavbar />
      <header className="App-header">
      <MainContent/>
    
      </header> 
       <Footer/>
    </div>
  );
}

export default App;
