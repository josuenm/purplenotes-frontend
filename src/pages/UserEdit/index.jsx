import { useState } from "react";
import { Container, SimpleBox } from "./styles";
import { UserServices } from "../../services/users";
import { login, selectUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

export function UserEdit() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState([
    {
      basics: false,
      password: false,
    },
  ]);

  const [updated, setUpdated] = useState([
    {
      basics: false,
      password: false,
      basicsSubmit: false,
      passwordSubmit: false,
    },
  ]);

  const [errors, setErrors] = useState([
    {
      basics: false,
      password: false,
      samePassword: false,
    },
  ]);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const updateBasics = async () => {
    // Change everything to default to check
    setUpdated((prev) => [{ ...prev, basicsSubmit: false }]);
    setErrors((prev) => [{ ...prev, basics: false }]);
    setIsOpen((prev) => [{ ...prev, basics: false }]);

    try {
      const res = await UserServices.updateBasics({ name: name, email: email });
      dispatch(login(res.data));
      setName(res.data.name);
      setEmail(res.data.email);

      // Enable updated message
      setIsOpen((prev) => [{ ...prev, basics: true }]);
      setUpdated((prev) => [...prev, { basics: true, basicsSubmit: true }]);

      const basicsUpdated = () => {
        // Remove updated message after 5 seconds
        setTimeout(() => {
          setUpdated((prev) => [...prev, { basics: false }]);
          setIsOpen((prev) => [{ ...prev, basics: false }]);
        }, 5000);
      };
      clearTimeout(basicsUpdated);
      basicsUpdated();
    } catch (e) {
      console.log(e);
      // Enable error message
      setIsOpen((prev) => [{ ...prev, basics: true }]);
      setErrors((prev) => [{ ...prev, basics: true }]);
      setUpdated((prev) => [{ ...prev, basicsSubmit: true }]);
    }
  };

  const updatePassword = async () => {
    // Change everything to default to check
    setUpdated((prev) => [{ ...prev, passwordSubmit: false }]);
    setIsOpen((prev) => [{ ...prev, password: false }]);
    setErrors((prev) => [{ ...prev, password: false, samePassword: false }]);

    if (password === passwordConfirmation) {
      try {
        await UserServices.updatePassword({ password: password });
        setPassword("");
        setPasswordConfirmation("");

        // Enable updated message
        setIsOpen((prev) => [{ ...prev, password: true }]);
        setUpdated((prev) => [
          ...prev,
          { password: true, passwordSubmit: true },
        ]);

        const passwordUpdated = () => {
          setInterval(() => {
            setUpdated((prev) => [...prev, { password: false }]);
            setIsOpen((prev) => [{ ...prev, password: false }]);
          }, 5000);
        };
        clearInterval(passwordUpdated);
        passwordUpdated();
      } catch (e) {
        // Enable error message
        setIsOpen((prev) => [{ ...prev, password: true }]);
        setUpdated((prev) => [...prev, { passwordSubmit: true }]);
        setErrors((prev) => [{ ...prev, password: true }]);
      }
    } else {
      // Enable error message
      setIsOpen((prev) => [{ ...prev, password: true }]);
      setErrors((prev) => [{ ...prev, samePassword: true }]);
      setUpdated((prev) => [...prev, { passwordSubmit: true }]);
    }
  };

  const deleteAcc = async () => {
    try {
      const res = await UserServices.deleteAccount();
      res && navigate("/", { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  const nameChange = ({ target }) => {
    target.value !== user.name &&
      setUpdated((prev) => [{ ...prev, basicsSubmit: true }]);
    setName(target.value);
  };

  const emailChange = ({ target }) => {
    target.value !== user.email &&
      setUpdated((prev) => [{ ...prev, basicsSubmit: true }]);
    setEmail(target.value);
  };

  return (
    <Container>
      <div className="userEdit__organizedSet">
        <h2 className="userEdit__title">Personal Information</h2>
        <SimpleBox>
          <div className="userEdit__input">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={name}
              onKeyPress={(e) => e.key === "Enter" && updateBasics()}
              onChange={nameChange}
            />
          </div>
          <div className="userEdit__input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onKeyPress={(e) => e.key === "Enter" && updateBasics()}
              onChange={emailChange}
            />
          </div>
          <div className="userEdit__submit">
            <button
              onClick={updateBasics}
              className={!updated[0].basicsSubmit ? "disabled" : ""}
            >
              Update
            </button>
          </div>

          {isOpen[0].basics && (
            <div
              className={
                errors[0].basics ? "userEdit__error" : "userEdit__success"
              }
              data-active={
                !updated[0].basics | !errors[0].basics ? true : false
              }
            >
              {errors[0].basics
                ? "Update failed, try again"
                : "Updated successfully!"}
            </div>
          )}
        </SimpleBox>
      </div>

      <div className="userEdit__organizedSet">
        <h2 className="userEdit__title">Password</h2>
        <SimpleBox>
          <div className="userEdit__input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onKeyPress={(e) => e.key === "Enter" && updatePassword()}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <div className="userEdit__input">
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <input
              type="password"
              id="passwordConfirmation"
              value={passwordConfirmation}
              onKeyPress={(e) => e.key === "Enter" && updatePassword()}
              onChange={({ target }) => setPasswordConfirmation(target.value)}
            />
          </div>
          <div className="userEdit__submit">
            <button
              onClick={updatePassword}
              className={
                password | (passwordConfirmation === "") ? "disabled" : ""
              }
            >
              Update Password
            </button>
          </div>

          {isOpen[0].password && (
            <div
              className={
                errors[0].password | errors[0].samePassword
                  ? "userEdit__error"
                  : "userEdit__success"
              }
              data-active={!updated[0].password ? true : false}
            >
              {errors[0].samePassword && "Passwords are not the same"}
              {errors[0].password & !errors[0].samePassword
                ? "Update failed, try again"
                : ""}
              {!errors[0].password & !errors[0].samePassword
                ? "Updated successfully!"
                : ""}
            </div>
          )}
        </SimpleBox>
      </div>

      <div className="userEdit__deleteButton">
        <button onClick={deleteAcc}>Delete Account</button>
      </div>
    </Container>
  );
}
