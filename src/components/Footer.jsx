

function Footer(){
    return(
        <>
     
     {/* <footer class="footer fixed-bottom bg-dark "> */}
     <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-5  fixed-bottom bg-dark">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        {/* <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg> */}
      </a>
      <span class="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
    {/* <i class="bi bi-facebook" style="font-size:20px; color :gainsboro;"></i> */}
      <li class="ms-3"><i class="bi bi-instagram"></i></li>
      <li class="ms-3"><i class="bi bi-instagram"></i></li>
    </ul>
  </footer>
 </div>
    {/* </footer> */} 


        </>
    )
}
export default Footer;