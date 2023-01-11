
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home"
import Nav from "./Nav";

import {useState,useContext} from "react"


function App() {
    // const[auth,setAuth]=useState({})
  
      return (
        <div>
        
           <BrowserRouter>
             {/* <AuthContext.Provider value={{auth,setAuth}}> */}
                    <Nav/>
      <main>
         
      
        <div className="album py-5 bg-light">
          <div className="container">
             <div className="row">
      <Routes>
       <Route path="/" exact element={<Home/>}/>
      </Routes>
     
             </div>
         
          </div>
        </div>
    
      </main>
  
      {/* </AuthContext.Provider> */}
      </BrowserRouter>
      
      </div>
      );
    }
    
    export default App;
