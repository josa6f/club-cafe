import mainLogo_image from '../assets/club_cafe.png'
import user_image from '../assets/user.png'
import cart_image from '../assets/cart.png'
import './styles/navbar.scss'
// import { Login } from '../pages/Login'

const images_navbar = [mainLogo_image, user_image, cart_image]

export function Navbar() {

  return (

    <div className="navbar">

      <div className="navbar__main-logo">

        <img src={images_navbar[0]} alt="" /> 
      
      </div>
      
      <div className = "navbar__sections">

        <p className = "sections__text">Shop</p>
        <p className = "sections__text">Subscription</p>
        <p className = "sections__text">About</p>
        <p className = "sections__text">FAQ</p>
      
      </div>

      <div className = "navbar__user-Login-cart">

        <div className = "user-Login-cart">
        
          <div className="user-Login-cart__Login">
            <img src={images_navbar[1]} alt="" />  
            Login         
          </div>
          
          <div className="user-Login-cart__cart">
            <img src={images_navbar[2]} alt="" />
          </div>
          
        </div>

      </div>

    </div>

  ) 

}