import { Center, Container, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import HeaderWithBackButton from "src/components/HeaderWithBackButton";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "blockquote", "link"],
    [{ list: "ordered" }, { list: "bullet" }],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "blockquote",
  "list",
  "bullet",
  "link",
];

const Dashboard: NextPage = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <HeaderWithBackButton returnTo="/dashboard" />
      <Container>
        <Center
          display="flex"
          flexDirection="column"
          gap={12}
          w={["full", "full", "2xl"]}
          mx="auto"
          minH="100vh"
        >
          <Heading fontSize={21} color="gray.600">
            The note is automatically saved
          </Heading>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            modules={modules}
            formats={formats}
            style={{ width: "100%" }}
          />
        </Center>
      </Container>
    </>
  );
};

export default Dashboard;
