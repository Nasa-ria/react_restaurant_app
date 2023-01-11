import {Link} from 'react-router-dom'
import React from 'react'
import '../components/css/App.css'

function Nav(){
    return(
        <>
      <nav className=" navbar navbar-expand-lg navbar-dark bg-dark  ">
<div className="container-fluid">
 <a  className="brand " > <Link className=" logo" to={"/"}>Sushi </Link></a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
    <div className='list-center'>
<ul className="navbar-nav pl-md-5 ml-auto">
<li className="item">
<a className="nav-link active" ><Link  className=" link"to={"#"}>INFO </Link></a>
</li>
<li className="item">
<a className="nav-link" ><Link  className=" link"to={"#"}>MENU </Link></a>
</li>

<li className="item">
<a className="nav-link" ><Link className=" link"to={"#"}>GALLERY </Link></a>
</li>
<li className="item">
<a className="nav-link" ><Link className=" link"to={"#"}>PRESS</Link></a>
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