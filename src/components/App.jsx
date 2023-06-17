
import{BrowserRouter, Routes, Route, HashRouter as Router} from "react-router-dom"
import Home from "./Home"
import Nav from "./Nav";
import East from "./East";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  
      return (
        <div>
        
           <BrowserRouter>
            
                    <Nav/>
      <main>
         
      
        {/* <header> */}

          
           <div>
             <Routes>
               <Route path="/" exact element={<Home/>}/>
               <Route path="/menu/east" element={<East/>}/>
              </Routes>
             </div>
         
          {/* </header> */}
       
    
      </main>
        <Footer/>
     
      </BrowserRouter>
      
      </div>
      );
    }
    
    export default App;
