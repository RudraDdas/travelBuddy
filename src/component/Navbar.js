import React,{useState} from 'react'
import './Navbar.css'

function Navbar() {

    const [CheckMenubar,setCheckMenubar] = useState(true);

    const menu_bar =()=>{
        setCheckMenubar(!CheckMenubar);
    }

    return (
        <div className={CheckMenubar ? 'navbar' : 'navbar_on'}>
            <div className="heading">
                <h3><i class="fab fa-pagelines"></i>  JungleView</h3>
                {CheckMenubar  ? <i  onClick={menu_bar} class="fas fa-bars"></i> : <i  onClick={menu_bar} class="fas fa-times"></i>}
            </div>
            <div className="list-items">
            
                <ul>
                    <li>Home</li>
                    <li>Contact us</li>
                    <li>Visit</li>
                    <li>Follow us</li>
                </ul>
            </div>
            <div className="social_media">
            <i class="fab fa-facebook-square"></i><i class="fab fa-instagram"></i><i class="fab fa-youtube"></i><i class="fab fa-twitter"></i>
            </div>
            
        </div>
    )
}

export default Navbar
