import { Fragment,useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../../assets/reactlogo.svg";
import './navigation.styles.scss';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import {signOutUser} from '../../utils/firebase/firebase.utils'

const Navigation = () => {
  const {currentUser}=useContext(UserContext);
  const {isCartOpen}=useContext(CartContext);

return(
<Fragment>
    <div className="navigation">
       
       <Link className="logo-container" to='/'>   
          <ReactLogo className="logo"/>
        </Link>
 
       <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
            SHOP
            </Link> 
            {
              currentUser?(
                <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>)
                :
               ( <Link className="nav-link" to='/auth'>
                SIGNIN
                </Link> 
              )
            }
            <CartIcon />
    </div>
    {isCartOpen && <CartDropdown />}
    </div>
    <Outlet />    
    </Fragment>

);

}


export default Navigation;