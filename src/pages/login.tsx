import {
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface IFormInputs {
  email: string;
  password: string;
}

interface InputProps {
  register: any;
  error: any;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const Email = ({ register, error }: InputProps) => {
  return (
    <FormControl>
      <FormLabel>Email</FormLabel>
      <Input type="email" {...register} bgColor="violet.50" />
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};

const Password = ({ register, error }: InputProps) => {
  return (
    <FormControl>
      <FormLabel>Password</FormLabel>
      <Input type="password" {...register} bgColor="violet.50" />
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);
  return (
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
          direction="column"
          gap={5}
          shadow="2xl"
          p={[5, 5, 10]}
          borderRadius="3xl"
        >
          <Email register={{ ...register("email") }} error={errors?.email} />
          <Password
            register={{ ...register("password") }}
            error={errors?.password}
          />

          <Button
            bgColor="violet.600"
            color="white"
            _hover={{
              bgColor: "violet.400",
            }}
          >
            Login
          </Button>
        </Flex>
      </Center>
    </Container>
  );
};

export default Login;