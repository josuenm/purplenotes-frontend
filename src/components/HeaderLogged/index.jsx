import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, MobileMenu, SidebarButton } from "./styles";
import Logo from "../../assets/images/logo-white.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useContext, useState } from "react";
import { UserServices } from "../../services/axios/users";
import { UserContext } from "../../contexts/userContext";
import { GlobalToolsContext } from "../../contexts/globalToolsContext";

export function HeaderLogged() {
  const { handleSidebar, sidebarIsOpen } = useContext(GlobalToolsContext);

  const [isDropDown, setIsDropDown] = useState(false);

  const { user } = useContext(UserContext);
  const { pathname } = useLocation();

  function dropDown({ target }) {
    if (target.dataset.close) setIsDropDown(!isDropDown);
  }

  function handleSidebarButton() {
    handleSidebar(!sidebarIsOpen);
  }

  function loggoutUser() {}

  return (
    <Container>
      {pathname !== "/users/edit" && (
        <SidebarButton
          onClick={handleSidebarButton}
          className={sidebarIsOpen ? "active" : ""}
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
