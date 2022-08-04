import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AccessModal, Input, Submit } from "../../components/AccessModal";
import { Container } from "./styles";
import { UserServices } from "../../services/users";
import { Head } from "../../components/Head";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const navigate = useNavigate();

  async function tryConnection(e) {
    e.preventDefault();

    setIsDisabled(true);

    try {
      const response = await UserServices.login({
        email: email,
        password: password,
      });
      dispatch(login(response.user));

      navigate("/notes", { replace: true });
    } catch (err) {
      setIsDisabled(false);
      setError(err);
    }
  }

  return (
    <Container>
      <Head title="Login | JavaScript Notes" description="" />

      <AccessModal>
        <form onSubmit={tryConnection}>
          <Input type="email" value={email} change={setEmail} label="E-mail" />

          <Input
            type="password"
            value={password}
            change={setPassword}
            label="Password"
            password={true}
          />

          {error && <p className="error">Email or password invalid</p>}

          <Submit value="Login" isDisabled={isDisabled} />
        </form>
        <p>
          Doesn't have an account? <Link to="/register">Register</Link>
        </p>
      </AccessModal>
    </Container>
  );
}
