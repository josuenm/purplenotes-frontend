import { useContext, useMemo, useState } from "react";
import { Set } from "../../components/Form/Set";
import { Input } from "../../components/Form/Inputs";
import { Label } from "../../components/Form/Label";
import { Submit } from "../../components/Form/Submit";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Container,
  SimpleBox,
  Box,
  DeleteButtonContainer,
  DeleteButton,
  Title,
} from "./styles";
import { ErrorMessage } from "../../components/Form/ErrorMessage";
import { UserContext } from "../../contexts/userContext";

const basicInfoSchema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required"),
  })
  .required();

const passwordSchema = yup
  .object({
    password: yup.string().required("Password is required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must be the same")
      .required("Password confirmation is required"),
  })
  .required();

const BasicInfoBox = () => {
  const { user, UpdateBasicInfo } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: useMemo(() => {
      const localUser = JSON.parse(localStorage.getItem("jsnotes.user"));
      return {
        name: localUser.name,
        email: localUser.email,
      };
    }),
    resolver: yupResolver(basicInfoSchema),
  });
  const onSubmit = (data) => {
    UpdateBasicInfo(data);
  };

  return (
    <Box>
      <Title>Personal Information</Title>
      <SimpleBox onSubmit={handleSubmit(onSubmit)}>
        <Set>
          <Label title="Name:" htmlFor="name" />
          <Input register={{ ...register("name") }} htmlFOr="name" />
          {errors.name && <ErrorMessage title={errors.name.message} />}
        </Set>

        <Set>
          <Label title="Email:" htmlFor="email" />
          <Input register={{ ...register("email") }} htmlFor="email" />
          {errors.email && <ErrorMessage title={errors.email.message} />}
        </Set>
        <Set>
          <Submit title="Update" />
        </Set>
      </SimpleBox>
    </Box>
  );
};

const PasswordBox = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordSchema),
  });
  const onSubmit = (data) => {};

  return (
    <Box>
      <Title>Password</Title>
      <SimpleBox onSubmit={handleSubmit(onSubmit)}>
        <Set>
          <Label title="New password:" htmlFor="password" />
          <Input register={{ ...register("password") }} htmlFor="password" />
          {errors.password && <ErrorMessage title={errors.password.message} />}
        </Set>
        <Set>
          <Label
            title="New password confirmation:"
            htmlFor="passwordConfirmation"
          />
          <Input
            register={{ ...register("passwordConfirmation") }}
            htmlFor="passwordConfirmation"
          />
          {errors.passwordConfirmation && (
            <ErrorMessage title={errors.passwordConfirmation.message} />
          )}
        </Set>

        <Set>
          <Submit title="Update" />
        </Set>
      </SimpleBox>
    </Box>
  );
};

const DeleteButtonBox = () => {
  return (
    <Box>
      <DeleteButtonContainer>
        <DeleteButton>Delete Account</DeleteButton>
      </DeleteButtonContainer>
    </Box>
  );
};

export function UserEdit() {
  return (
    <Container>
      <BasicInfoBox />
      <PasswordBox />
      <DeleteButtonBox />
    </Container>
  );
}
