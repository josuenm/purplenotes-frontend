import {
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { UserContext } from "@contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { NextPage } from "next";
import { useContext, useMemo } from "react";
import { useForm } from "react-hook-form";
import HeaderWithBackButton from "src/components/HeaderWithBackButton";

import * as yup from "yup";

interface IFormBasicInfo {
  name: string;
  email: string;
}

interface IFormNewPassword {
  password: string;
  passwordConfirmation: string;
}

const basicInfoSchema = yup
  .object({
    name: yup.string().required("The field is required"),
    email: yup
      .string()
      .email("Invalid email")
      .required("The field is required"),
  })
  .required();

const newPasswordSchema = yup
  .object({
    password: yup.string().required("The field is required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("The field is required"),
  })
  .required();

const NewPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormNewPassword>({
    resolver: yupResolver(newPasswordSchema),
  });
  const onSubmit = (data: IFormNewPassword) => console.log(data);

  return (
    <Flex
      w={["full", "full", "50%"]}
      minWidth={[0, 0, 400]}
      direction="column"
      gap={5}
      bgColor="white"
      p={[5, 12, 16]}
      borderRadius="xl"
    >
      <Heading fontSize={24} textAlign="center">
        New Password
      </Heading>

      <FormControl as="fieldset">
        <FormLabel>Password:</FormLabel>
        <Input
          type="password"
          {...register("password")}
          bgColor="violet.50"
          placeholder="Type your password..."
          _placeholder={{ fontSize: 14 }}
        />
      </FormControl>
      <FormControl as="fieldset">
        <FormLabel>Password confirmation:</FormLabel>
        <Input
          type="password"
          {...register("passwordConfirmation")}
          bgColor="violet.50"
          placeholder="Type your password confirmation..."
          _placeholder={{ fontSize: 14 }}
        />
      </FormControl>

      <Button colorScheme="violet" type="submit">
        Save
      </Button>
    </Flex>
  );
};

const BasicInfo = () => {
  const { UpdateBasics, user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormBasicInfo>({
    defaultValues: useMemo(() => {
      if (typeof window !== "undefined") {
        let localUser = JSON.parse(
          localStorage.getItem("purplenotes.user") as string
        );
        return localUser;
      }
    }, []),
    resolver: yupResolver(basicInfoSchema),
  });
  const onSubmit = (data: IFormBasicInfo) => {
    UpdateBasics(data);
  };

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      w={["full", "full", "50%"]}
      minWidth={[0, 0, 400]}
      direction="column"
      gap={5}
      bgColor="white"
      p={[5, 12, 16]}
      borderRadius="xl"
    >
      <Heading fontSize={24} textAlign="center">
        Basic information
      </Heading>

      <FormControl as="fieldset">
        <FormLabel>Name:</FormLabel>
        <Input
          type="text"
          {...register("name")}
          bgColor="violet.50"
          placeholder="Type your name..."
          _placeholder={{ fontSize: 14 }}
        />
      </FormControl>
      <FormControl as="fieldset">
        <FormLabel>Email:</FormLabel>
        <Input
          type="text"
          {...register("email")}
          bgColor="violet.50"
          placeholder="Type your email..."
          _placeholder={{ fontSize: 14 }}
        />
      </FormControl>

      <Button colorScheme="violet" type="submit">
        Save
      </Button>
    </Flex>
  );
};

const DeleteAccount = () => {
  return <Button colorScheme="red">Delete account</Button>;
};

const UserEdit: NextPage = () => {
  return (
    <>
      <HeaderWithBackButton returnTo="/dashboard" />
      <Container py={20}>
        <Center minH="100vh">
          <Flex w="full" align="center" direction="column" gap={12}>
            <BasicInfo />
            <NewPassword />
            <DeleteAccount />
          </Flex>
        </Center>
      </Container>
    </>
  );
};

export default UserEdit;
