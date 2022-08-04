import { Container } from "./styles";
import { Link } from "react-router-dom";
import { Head } from "../../components/Head";

import { AccessModal } from "../../components/Form/AccessModal";
import { Input } from "../../components/Form/Inputs";
import { Submit } from "../../components/Form/Submit";
import { Set } from "../../components/Form/Set";
import { Label } from "../../components/Form/Label";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "../../components/Form/ErrorMessage";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <Head title="Register | JavaScript Notes" description="" />

      <AccessModal>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Set>
            <Label title="Name:" htmlFor="name" />
            <Input
              type="text"
              htmlFor="name"
              placeholder="Type your name"
              register={{ ...register("name") }}
            />
            {errors.name && <ErrorMessage title={errors.name.message} />}
          </Set>

          <Set>
            <Label title="E-mail:" htmlFor="email" />
            <Input
              type="email"
              htmlFor="email"
              placeholder="Type your email"
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
            <Submit value="Register" />
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Set>
        </form>
      </AccessModal>
    </Container>
  );
}
