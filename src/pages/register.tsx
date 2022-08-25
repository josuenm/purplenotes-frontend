import {
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { UserContext } from "@contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import { parseCookies } from "nookies";
import { useContext } from "react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import * as yup from "yup";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "purplenotes.token": token } = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

interface IFormInputs {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface InputProps {
  register: UseFormRegisterReturn;
  error?: {
    message?: string;
  };
}

const schema = yup
  .object({
    name: yup.string().required("The field is required"),
    email: yup
      .string()
      .email("Invalid email")
      .required("The field is required"),
    password: yup.string().required("The field is required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("The field is required"),
  })
  .required();

const Name = ({ register, error }: InputProps) => {
  return (
    <FormControl as="fieldset" isInvalid={!!error}>
      <FormLabel>Name:</FormLabel>
      <Input
        type="text"
        {...register}
        bgColor="violet.50"
        placeholder="Type your name..."
        _placeholder={{ fontSize: 14 }}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

const Email = ({ register, error }: InputProps) => {
  return (
    <FormControl as="fieldset" isInvalid={!!error}>
      <FormLabel>Email:</FormLabel>
      <Input
        type="email"
        {...register}
        bgColor="violet.50"
        placeholder="Type your email..."
        _placeholder={{ fontSize: 14 }}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

const Password = ({ register, error }: InputProps) => {
  return (
    <FormControl as="fieldset" isInvalid={!!error}>
      <FormLabel>Password:</FormLabel>
      <Input
        type="password"
        {...register}
        bgColor="violet.50"
        placeholder="Type your password..."
        _placeholder={{ fontSize: 14 }}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

const PasswordConfirmation = ({ register, error }: InputProps) => {
  return (
    <FormControl as="fieldset" isInvalid={!!error}>
      <FormLabel>Password confirmation:</FormLabel>
      <Input
        type="password"
        {...register}
        bgColor="violet.50"
        placeholder="Type your password again..."
        _placeholder={{ fontSize: 14 }}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

const Login: NextPage = () => {
  const { Register } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = ({ name, email, password }: IFormInputs) =>
    Register({ name, email, password });
  return (
    <>
      <Head>
        <title>Register | Purple Notes</title>
      </Head>
      <Container
        display="flex"
        flexDirection={["column", "column", "row"]}
        justifyContent={["center", "center", "space-between"]}
        alignItems={["flex-start", "flex-start", "center"]}
        gap={5}
        h="100vh"
      >
        <Center w="full" display="flex" justifyContent="center">
          <Flex
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            direction="column"
            gap={5}
            shadow="2xl"
            p={[5, 5, 10]}
            bgColor="white"
            borderRadius="xl"
            w={["full", "full", "50%"]}
            minWidth={[0, 0, 400]}
          >
            <Name register={{ ...register("name") }} error={errors?.name} />
            <Email register={{ ...register("email") }} error={errors?.email} />
            <Password
              register={{ ...register("password") }}
              error={errors?.password}
            />
            <PasswordConfirmation
              register={{ ...register("passwordConfirmation") }}
              error={errors?.passwordConfirmation}
            />

            <Button colorScheme="violet" type="submit">
              Register
            </Button>

            <NextLink href="/login">
              <Button colorScheme="violet" variant="outline">
                Login
              </Button>
            </NextLink>
          </Flex>
        </Center>
      </Container>
    </>
  );
};

export default Login;
