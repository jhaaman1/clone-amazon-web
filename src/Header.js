import React from "react";
import "./Header.css";
import "./index.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./Context/StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user){
      auth.signOut()
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      </Link>
     
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon"/>
      </div>

    
      <div className="header_nav">
      <Link to={!user && '/login'}>
        <div className="header-option" onClick={handleAuthentication} >
          <span className="header-option-line1">{user? `${user.email}` : 'Hello Guest'}</span>
          <span className="header-option-line2"> {user? 'Sign Out' : 'Sign In'} </span>
        </div>
      </Link>
        <div className="header-option">
          <span className="header-option-line1">Returns  </span>
          <span className="header-option-line2">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option-line1">Your </span>
          <span className="header-option-line2">Prime</span>
        </div>

          <Link to="/checkout">
            <div className="header_optionBasket">
            <ShoppingBasketIcon/>
            <span className="header_optionLineTwo header_basketCount" >{basket?.length}</span>
            </div>
          </Link>
        
        
      </div>
    </div>
  );
}

export default Header;
