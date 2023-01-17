import ev_menu from "../images/ev_menu.webp"
import ev_menu2 from "../images/ev_menu2.webp"
import ev_menu3 from "../images/ev_menu3.webp"
import ev_menu4 from "../images/ev_menu4.webp"
import ev_menu5 from "../images/ev_menu5.webp"

function East() {
    return  (
    <>
        <h3 className='list'>MENU</h3>
        <div className="menu_image">
            <img src={ev_menu2} alt="#" style={{width:"39em"}}/>
            <img src={ev_menu3} alt="#" style={{width:"39em"}}/>
            <img src={ev_menu4} alt="#" style={{width:"39em"}}/>
            <img src={ev_menu5} alt="#" style={{width:"39em"}}/>
        </div>

     </>
    
    )
        
}
export default East ;