import {Link} from 'react-router-dom'
import {React ,useRef} from 'react'
import '../components/css/App.css'


function Nav(){

    const info_section = useRef(null);

    const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
      });
    };
    return(
        <>
     
      <nav className=" navbar navbar-expand-lg  fixed-top navbar-dark bg-dark   ">
   
<div className="container-fluid">
 <a  className="brand "  href='#'> <Link className=" logo" to={"/"}>Sushi </Link></a>
{/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button> */}
    <div className='list-center '>
<ul className="navbar-nav pl-md-5 ml-auto">
<li className="item" onClick={() => scrollDown(info_section)}>
<a className="nav-link active" href='#' ><Link  className=" link"to={"#"}>INFO </Link></a>
</li>
<li className="item">
<a className="nav-link"  href='#'><Link  className=" link"to={"#"}>MENU </Link></a>
</li>

<li className="item">
<a className="nav-link" href='#' ><Link className=" link"to={"#"}>GALLERY </Link></a>
</li>
<li className="item">
<a className="nav-link" href='#'><Link className=" link"to={"#"}>PRESS</Link></a>
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