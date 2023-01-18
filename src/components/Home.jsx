import {Link} from 'react-router-dom'
import{React,useRef }from 'react'
import '../components/css/App.css'
import map from "../images/map.webp"
import chef from "../images/chef.png"
import soho from "../images/Soho.webp"
import Toronto from "../images/Toronto.webp"
import yelp from "../images/Yelp.webp"
import Eater from "../images/Eater.avif"
import NBC4 from "../images/NBC4.webp"
import Dumpling from "../images/Dumpling.webp";




function Home(){
    // const info_section = useRef(null);

    return(
        <>

        <div className='sec1' >
        {/* <img className="image"src={photo} alt="#" /> */}
        <h3 className=' deco' >すし</h3>
        </div>

        <section className='about' id='about'>
            <h4 className="heading" >ABOUT</h4>
            <div className="flex">
            <img className="man-image"src={chef} alt="#" />
                <p className='paragraph'><span className='title'>NORIHIRO ISHIZUKA</span> <br/>
                <br/>
                    Chef Norihiro Ishizuka’s culinary journey began at the age<br/> of 
                    Contrary to popular belief, Lorem Ipsum is not simply random <br/>mother and
                    There are many variations of passages of Lorem Ipsum <br/>  passages, and more
                    Contrary to popular belief, Lorem, <br/>Richard McClintock, a Latin professor at Hampden
                    concept: Raku. <br/>
                    <br/>
                    It is a long established fact that a reader will be distracted by the <br/>
                    All the Lorem Ipsum generators on the Internet tend to repeat  <br/>
                    It uses a dictionary of over 200 Latin words, combined with a  <br/>are
                    The generated Lorem Ipsum is therefooffering, Ishizuka also showcases an appetizer re always free <br/>extensive udon 
                    Contrary to popular belief, Lorem Ipsum is  <br/>menu offering some of Japan’s 
                    most classic small bites. Offering<br/> a contemporary and minimalist dining space paired with 
                    warm <br/>service, he seeks to create happy memories for customers <br/>through his food.</p>
            </div>
        </section>
       

         <section className='info_section'  id="info">
            <p className='info_heading'>INFO </p>
            <p className='info_supheading'><em>please check the Yelp or Google listings for any holiday closures</em> </p>
           
           <div className='info_details'>
           <p className="info_image"> <img src={map} alt="#" style={{width:"39em",marginLeft:"14em", marginTop:"3em"}} /></p>
           <p className='info_address'><span className='topic'>EAST VILLAGE</span> <br/>342 E 6th St, Accra, GH, 10003<br/>(212) 228-1324<br/>eastvillage@suushi.com<br/><span className='change'>JOIN THE WAITLIST</span><br/>
               <br/>
                
            </p>
           </div>
           <div className='info_details'>
            <img className="image_info"src={soho} alt="#"  style={{width:"39em",marginLeft:"14em", marginTop:"2em"}} />
            <p className='info_address'><span className='topic'> NORTH VILLAGE</span> <br/>342 E 6th St, Accra, GH, 10003<br/>(212) 228-1324<br/>eastvillage@suushi.com<br/><span className='change'>RESERVATIONS</span><br/>
               <br/>
                
            </p>
           </div>
           <div className='info_details'>
            <img className="image_info"src={Toronto} alt="#"  style={{width:"39em",marginLeft:"14em", marginTop:"2em"}}/>
            <p className='info_address'><span className='topic'>WEST VILLAGE</span> <br/>342 E 6th St, Accra, GH, 10003<br/>(212) 228-1324<br/>eastvillage@suushi.com<br/><span className='change'>OPEN</span><br/>
               <br/>
               </p>
           </div> 
           
           <hr/>
           <div className='hours'>
            <h5 >WORKING HOURS</h5>
           <ul>
            <li>
            Mon  : Closed
            </li>
            <li> Tue - sun : 12 - 9:30 pm</li>
                
               
             
            </ul> 

           </div>
           
           </section>

                <section id='menu'>

            <div className='menu' >
                <h3 className='menu_topic'>MENU</h3>
            <ul className='menu_item'>
                <li>
                  <h3> <Link to={"/menu/east"}>East Village</Link> </h3>  
                </li>
                <li>
                    <h3><Link to={"/menu/east"}>WEST VILLAGE</Link>   </h3>
                </li>
                <li>
                    <h3><Link to={"/menu/east"}>NORTH VILLAGE</Link>   </h3>
                </li>
            </ul>
            </div>

            </section>

        <section className='press' id='press'>
            <h3 className='press_topic'>PRESS</h3>
            <div className='press_notes'>
            <p className='press_info'>"Lorem Ipsum has been the<br/> <span className='break'>industry's standard  "</span>
             <br/><span><img src ={yelp} alt="logo"   style={{width:"5em",marginLeft:"4em"}}/></span></p>

           <p className='press_info'>"It is a long established fact that a reader <br/>will be distracted by the readable <br/>content of a page when looking at its  <br/><span className='break'>layout"</span> 
             <br/><span><img src ={Eater} alt="logo"   style={{width:"5em",marginLeft:"4em"}}/></span></p>

             <p className='press_info'>" Lorem Ipsum as their default   <br/> <span className='break'>sometimes on purpose!"</span> 
             <br/><span><img src ={NBC4} alt="logo"   style={{width:"4em",marginLeft:"4em"}}/></span></p>

             <p className='press_info'>"The point of using Lorem Ipsum is  <br/> using 'Content here, content here'," 
             <br/><span><img src ={Dumpling } alt="logo"   style={{width:"4em",marginLeft:"4em"}}/></span></p>
        </div>
        </section >
        </>
             )
         }
         export default Home;