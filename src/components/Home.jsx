import '../components/css/App.css'
import map from "../images/map.webp"
import chef from "../images/chef.png"
import soho from "../images/Soho.webp"
import Raku from "../images/Raku.webp"
import Toronto from "../images/Toronto.webp"

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
        {/* <img className="back-image"src={Raku} alt="#" /> */}
           <p className='info_heading'>INFO </p>
            <p className='info_supheading'><em>please check the Yelp or Google listings for any holiday closures</em> </p>
           <div>
            <img className="image_info"src={map} alt="#" />
           </div>
           {/* <div>
            <img className="image_info"src={soho} alt="#" />
           </div> */}
           {/* <div>
            <img className="image_info"src={Toronto} alt="#" />
           </div>   */}
        </div>
        
        </>
             )
         }
         export default Home;