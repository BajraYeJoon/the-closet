import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import "./navigation.styles.jsx";

import { ReactComponent as Clogo } from "../../../assets/Capture.svg";
import { UserContext } from "../../../context/user.context";
import { CartContext } from "../../../context/cart.content";

import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import {
  NavigationContainer,
  LogoContainer,
  NavigationLinks,
  NavLink,
} from "./navigation.styles.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Clogo className="logo" />
        </LogoContainer>
        <NavigationLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink as="span" to="/auth">
              SIGN IN
            </NavLink>
          )}

          <CartIcon />
        </NavigationLinks>

        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
