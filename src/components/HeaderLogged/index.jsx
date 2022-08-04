import { Link, useNavigate } from "react-router-dom";
import { Container, MobileMenu, SidebarButton } from "./styles";
import Logo from "../../assets/images/logo-white.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { UserServices } from "../../services/users";

export function HeaderLogged() {
  const [isDropDown, setIsDropDown] = useState(false);
  const sidebarState = useSelector(selectSidebar);
  const navigate = useNavigate();

  function dropDown({ target }) {
    if (target.dataset.close) setIsDropDown(!isDropDown);
  }

  function isCloseSidebar() {
    sidebarState ? dispatch(closeSidebar()) : dispatch(openSidebar());
  }

  function loggoutUser() {
    UserServices.loggout();
    dispatch(loggout);
    navigate("/login", { replace: true });
  }

  return (
    <Container>
      {window.location.pathname !== "/users/edit" && (
        <SidebarButton
          onClick={isCloseSidebar}
          className={sidebarState ? "active" : ""}
        >
          <div className="stick firstStick"></div>
          <div className="stick secondStick"></div>
          <div className=" stick thirdStick"></div>
        </SidebarButton>
      )}

      <Link to="/notes">
        <img src={Logo} alt="" className="header__logo" />
      </Link>

      <button
        className="header__user"
        onClick={() => setIsDropDown(!isDropDown)}
      >
        {user.name}
        <ArrowDropDownIcon className="header__userDropDown" />
      </button>

      <MobileMenu
        data-active={isDropDown}
        onClick={() => setIsDropDown(!isDropDown)}
      >
        <div className="stick first-stick"></div>
        <div className="stick second-stick"></div>
        <div className="stick third-stick"></div>
      </MobileMenu>

      {isDropDown && (
        <div
          className="header__dropDownContainer"
          data-close
          onClick={dropDown}
        >
          <div className="header__dropDownContent">
            <Link
              to="/users/edit"
              className="header__dropDownContent__option"
              data-close
              onClick={dropDown}
            >
              User Edit
            </Link>
            <button
              onClick={loggoutUser}
              className="header__dropDownContent__option"
            >
              LogOut
            </button>
          </div>
        </div>
      )}
    </Container>
  );
}
