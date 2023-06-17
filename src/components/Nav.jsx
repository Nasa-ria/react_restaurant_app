// import {Link} from 'react-router-dom'
import {React ,useRef,useEffect} from 'react'
import '../components/css/App.css'
import { Link } from "react-scroll";


function Nav(){
   const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return(
        <>
     
      <nav className=" navbar navbar-expand-lg  fixed-top navbar-dark bg-dark   ">
   
<div className="container-fluid">

   <Link className=" logo" to={"/"}>Sushi </Link>

 
    <div className='list-center '>
<ul className="navbar-nav pl-md-5 ml-auto">
<li className="item">
<a className="nav-link active" href='#' >
<Link to="info" smooth={true} duration={500}>INFO</Link>
</a>
</li>





<li className="item">
<a className="nav-link active"  href='#'>
  <Link to="menu" smooth={true} duration={500}>MENU</Link>
</a>
</li>

<li className="item">
<a className="nav-link active" href='#' >

  <Link to="about" smooth={true} duration={500} >ABOUT</Link>
  </a>
</li>
<li className="item">
<a className="nav-link active" href='#'>
  <Link to="press" smooth={true} duration={500} >PRESS</Link>
  </a>
</li>
<li>
</li>
</ul>
</div>
<div className="navbar-nav ">



 
</div>
</div>

</nav>

        </>
    )
}
export default Nav;