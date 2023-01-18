// import {Link} from 'react-router-dom'
import {React ,useRef} from 'react'
import '../components/css/App.css'
import { Link } from "react-scroll";


function Nav(){
    return(
        <>
     
      <nav className=" navbar navbar-expand-lg  fixed-top navbar-dark bg-dark   ">
   
<div className="container-fluid">
 <a  className="brand "  href='#'> <Link className=" logo" to={"/"}>Sushi </Link></a>
    <div className='list-center '>
<ul className="navbar-nav pl-md-5 ml-auto">
<li className="item">
<a className="nav-link active" href='#' >
<Link to="info" spy={true} smooth={true} offset={1} duration={100}>INFO</Link>
</a>
</li>
<li className="item">
<a className="nav-link"  href='#'>
  <Link to="menu" spy={true} smooth={true}  duration={100}>MENU</Link>
</a>
</li>

<li className="item">
<a className="nav-link" href='#' >
  {/* <Link className=" link"to={"#"}>GALLERY </Link> */}
  <Link to="about" spy={true} smooth={true}  duration={100}>ABOUT</Link>
  </a>
</li>
<li className="item">
<a className="nav-link" href='#'>
  {/* <Link className=" link"to={"#"}>PRESS</Link> */}
  <Link to="press" spy={true} smooth={true} offset={0.5} duration={100}>PRESS</Link>
  </a>
</li>
</ul>
</div>
<div className="navbar-nav ml-auto">
<h4 className='nav-right'>ORDER ONLINE</h4>
</div>
</div>

</nav>

        </>
    )
}
export default Nav;