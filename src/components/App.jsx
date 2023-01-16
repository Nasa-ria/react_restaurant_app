
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home"
import Nav from "./Nav";
import Footer from "./Footer";

// import {useState,useContext} from "react"


function App() {
    // const[auth,setAuth]=useState({})
  
      return (
        <div>
        
           <BrowserRouter>
             {/* <AuthContext.Provider value={{auth,setAuth}}> */}
                    <Nav/>
      <main>
         
      
        <div className="">

          
           <div>

             {/* <div className="row"> */}
             <Routes>
               <Route path="/" exact element={<Home/>}/>
              </Routes>
              
             </div>
         
          </div>
        {/* </div> */}
    
      </main>
        <Footer/>
      {/* </AuthContext.Provider> */}
      </BrowserRouter>
      
      </div>
      );
    }
    
    export default App;
