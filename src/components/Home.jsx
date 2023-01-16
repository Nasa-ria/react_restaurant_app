import '../components/css/App.css'
import map from "../images/map.webp"
import chef from "../images/chef.png"
import soho from "../images/Soho.webp"
import Raku from "../images/Raku.webp"
import Toronto from "../images/Toronto.webp"
import yelp from "../images/Yelp.webp"
import Eater from "../images/Eater.avif"
import NBC4 from "../images/NBC4.webp"
import Dumpling from "../images/Dumpling.webp";



function Home(){
    return(
        <>
        <div className='about'>
            <h4 className="heading" >ABOUT</h4>
            <div className="flex">
            <img className="man-image"src={chef} alt="#" />
                <p className='paragraph'><span className='title'>NORIHIRO ISHIZUKA</span> <br/>
                <br/>
             Chef Norihiro Ishizuka’s culinary journey began at the age<br/> of 
             thirteen working at Kappo and udon restaurants to support his <br/>mother and
              four other siblings. With over sixty years of culinary<br/> experience and several
               accomplished restaurants under his belt, <br/>he brings to fruition his udon noodle 
               concept: Raku. <br/>
                    <br/>
            In an homage to his home cooking, Ishizuka crafts a menu <br/>
            centered around this iconic noodle long served as a classic <br/>
            comfort food in Japan. Voluminous bowls of chewy silky noodles <br/>are
             served in Ishizuka’s signature dashi soup. In addition to an <br/>extensive udon 
             offering, Ishizuka also showcases an appetizer <br/>menu offering some of Japan’s 
             most classic small bites. Offering<br/> a contemporary and minimalist dining space paired with 
             warm <br/>service, he seeks to create happy memories for customers <br/>through his food.</p>
            </div>

        </div>

         <div className='info_section'>
            <p className='info_heading'>INFO </p>
            <p className='info_supheading'><em>please check the Yelp or Google listings for any holiday closures</em> </p>
           
           <div className='info_details'>
           <p className="info_image"> <img src={map} alt="#" style={{width:"39em",marginLeft:"14em", marginTop:"3em"}} /></p>
           <p className='info_address'><span className='topic'>EAST VILLAGE</span> <br/>342 E 6th St, Accra, GH, 10003<br/>(212) 228-1324<br/>eastvillage@suushi.com<br/><span className='change'>JOIN THE WAITLIST</span><br/>
               <br/>
                Mon <span className='time'>Closed</span><br/>
                Tue <span className='time'>12 - 9:30 pm</span><br/>
                Wed <span className='time'>12 - 9:30 pm</span><br/>
                Thu <span className='time'>12 - 9:30 pm</span> <br/>
                Fri <span className='time'>12 - 9:30 pm</span> <br/>
                Sat <span className='time'>12 - 9:30 pm</span><br/>
                Sun <span className='time'>12 - 9:30 pm</span> 
            </p>
           </div>
           <div className='info_details'>
            <img className="image_info"src={soho} alt="#"  style={{width:"39em",marginLeft:"14em", marginTop:"2em"}} />
            <p className='info_address'><span className='topic'>NORTH VILLAGE</span> <br/>342 E 6th St, Accra, GH, 10003<br/>(212) 228-1324<br/>eastvillage@suushi.com<br/><span className='change'>RESERVATIONS</span><br/>
               <br/>
                Mon <span className='time'>Closed</span><br/>
                Tue <span className='time'>12 - 9:30 pm</span><br/>
                Wed <span className='time'>12 - 9:30 pm</span><br/>
                Thu <span className='time'>12 - 9:30 pm</span> <br/>
                Fri <span className='time'>12 - 9:30 pm</span> <br/>
                Sat <span className='time'>12 - 9:30 pm</span><br/>
                Sun <span className='time'>12 - 9:30 pm</span> 
            </p>
           </div>
           <div className='info_details'>
            <img className="image_info"src={Toronto} alt="#"  style={{width:"39em",marginLeft:"14em", marginTop:"2em"}}/>
            <p className='info_address'><span className='topic'>WEST VILLAGE</span> <br/>342 E 6th St, Accra, GH, 10003<br/>(212) 228-1324<br/>eastvillage@suushi.com<br/><span className='change'>OPEN</span><br/>
               <br/>
                Mon <span className='time'>Closed</span><br/>
                Tue <span className='time'>12 - 9:30 pm</span><br/>
                Wed <span className='time'>12 - 9:30 pm</span><br/>
                Thu <span className='time'>12 - 9:30 pm</span> <br/>
                Fri <span className='time'>12 - 9:30 pm</span> <br/>
                Sat <span className='time'>12 - 9:30 pm</span><br/>
                Sun <span className='time'>12 - 9:30 pm</span> 
            </p>
           </div>  
        </div>

        <div className='press'>
            <h3 className='press_topic'>PRESS</h3>
            <div className='press_notes'>
            <p className='press_info'>"30 Restaurants That Are Worth <br/> <span className='break'>The Wait In NYC"</span>
             <br/><span><img src ={yelp} alt="logo"   style={{width:"5em",marginLeft:"4em"}}/></span></p>

           <p className='press_info'>"You can't go wrong on the Raku <br/>menu, but you should start with <br/>one of the simpler udons on a first <br/><span className='break'>visit."</span> 
             <br/><span><img src ={Eater} alt="logo"   style={{width:"5em",marginLeft:"4em"}}/></span></p>

             <p className='press_info'>"You got to come hungry to eat  <br/> <span className='break'>these udons!"</span> 
             <br/><span><img src ={NBC4} alt="logo"   style={{width:"4em",marginLeft:"4em"}}/></span></p>

             <p className='press_info'>"The texture of the noodles is far <br/> superior, bouncier, and chewier." 
             <br/><span><img src ={Dumpling } alt="logo"   style={{width:"3em",marginLeft:"4em"}}/></span></p>
        </div>
        </div>
 
     



        </>
             )
         }
         export default Home;