import { AccessModal, Input, Submit } from "../../components/AccessModal";
import { Container } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Head } from "../../components/Head";
import { UserServices } from "../../services/users";
import { Navigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  async function tryConnection(e) {
    e.preventDefault();

    setIsDisabled(false);

    try {
      await UserServices.register({
        name: name,
        email: email,
        password: password,
      });

      dispatch(
        register({
          registered: true,
          email: email,
        })
      );

      navigate("/login", { replace: true });
    } catch (err) {
      setIsDisabled(false);
      setError(err);
    }
  }

  return (
    <Container>
      <Head title="Register | JavaScript Notes" description="" />

      <AccessModal>
        <form onSubmit={tryConnection}>
          <Input type="name" value={name} change={setName} label="Name" />
          <Input type="email" value={email} change={setEmail} label="E-mail" />
          <Input
            type="password"
            value={password}
            change={setPassword}
            label="Password"
            password={true}
          />

          {error && <p className="error">Email or password invalid</p>}

          <Submit value="Register" isDisabled={isDisabled} />
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </AccessModal>
    </Container>
  );
}
