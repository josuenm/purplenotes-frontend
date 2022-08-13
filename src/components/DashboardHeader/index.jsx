import {
  Container,
  DropDown,
  DropDownBackground,
  DropDownContainer,
  DropDownItem,
  Logo,
  UserButton,
  UserButtonContainer,
} from "./styles";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LogoImage from "../../assets/images/logo-white.png";

export const DashboardHeader = () => {
  const { user, Exit } = useContext(UserContext);
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const navigation = useNavigate();

  return (
    <Container>
      <Logo src={LogoImage} alt="Logo" />
      <UserButtonContainer>
        <UserButton onClick={() => setIsDropDownActive(!isDropDownActive)}>
          {user ? user.name.substring(0, 9) + "" : ""}
          <DropDown src="/drop-down.svg" alt="Drop down" />
        </UserButton>

        <AnimatePresence>
          <motion.div
            key={isDropDownActive}
            initial={{ opacity: 0 }}
            animate={
              isDropDownActive
                ? { opacity: 1 }
                : { opacity: 0, display: "none" }
            }
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <DropDownBackground
              onClick={() => setIsDropDownActive(!isDropDownActive)}
            />
            <DropDownContainer>
              <DropDownItem onClick={() => navigation("/dashboard/user/edit")}>
                User edit
              </DropDownItem>
              <DropDownItem onClick={Exit}>Exit</DropDownItem>
            </DropDownContainer>
          </motion.div>
        </AnimatePresence>
      </UserButtonContainer>
    </Container>
  );
};
