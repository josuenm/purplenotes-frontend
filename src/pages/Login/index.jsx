import { Link } from "react-router-dom";
import { Container, OtherOption } from "./styles";
import { Head } from "../../components/Head";

import { AccessModal } from "../../components/Form/AccessModal";
import { Input } from "../../components/Form/Inputs";
import { Set } from "../../components/Form/Set";
import { ErrorMessage } from "../../components/Form/ErrorMessage";
import { Label } from "../../components/Form/Label";
import { Submit } from "../../components/Form/Submit";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Passoword is required"),
  })
  .required();

export function Login() {
  const { Login } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    Login(data);
  };

  return (
    <Container>
      <Head title="Login | JavaScript Notes" description="" />

      <AccessModal>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Set>
            <Label title="E-mail:" htmlFor="email" />
            <Input
              type="email"
              htmlFor="email"
              placeholder="Type your password"
              register={{ ...register("email") }}
            />
            {errors.email && <ErrorMessage title={errors.email.message} />}
          </Set>

          <Set>
            <Label title="Password:" htmlFor="password" />
            <Input
              type="password"
              htmlFor="password"
              placeholder="Type your password"
              register={{ ...register("password") }}
            />
            {errors.password && (
              <ErrorMessage title={errors.password.message} />
            )}
          </Set>

          <Set>
            <Submit title="Login" isDisabled={false} />
          </Set>
          <OtherOption>
            Doesn't have an account? <Link to="/register">Register</Link>
          </OtherOption>
        </form>
      </AccessModal>
    </Container>
  );
}
