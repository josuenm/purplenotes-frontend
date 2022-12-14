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
  email: string;
  password: string;
}

interface InputProps {
  register: UseFormRegisterReturn;
  error?: {
    message?: string;
  };
}

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email")
      .required("The field is required"),
    password: yup.string().required("The field is required"),
  })
  .required();

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

const Login: NextPage = () => {
  const { Login } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => Login(data);

  return (
    <>
      <Head>
        <title>Login | Purple Notes</title>
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
            <Email register={{ ...register("email") }} error={errors?.email} />
            <Password
              register={{ ...register("password") }}
              error={errors?.password}
            />

            <Button colorScheme="violet" type="submit">
              Login
            </Button>

            <NextLink href="/register">
              <Button colorScheme="violet" variant="outline">
                Register
              </Button>
            </NextLink>
          </Flex>
        </Center>
      </Container>
    </>
  );
};

export default Login;
