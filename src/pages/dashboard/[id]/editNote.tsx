import { Center, Container, Heading } from "@chakra-ui/react";
import { NotesContext } from "@contexts/NotesContext";
import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import Router, { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
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

import Head from "next/head";
import { parseCookies } from "nookies";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "purplenotes.token": token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const Dashboard: NextPage = () => {
  const [value, setValue] = useState("");

  const { UpdateNote, notes } = useContext(NotesContext);
  const { query } = useRouter();

  const findById = useCallback(() => {
    const currentNote = notes.find((note) => note._id === query.id);

    if (!currentNote) {
      Router.push("/dashboard");
      return;
    }
    setValue(currentNote.body);
  }, [notes, query.id]);

  const timeout = useRef<NodeJS.Timeout>();

  function updateNote(value: string) {
    setValue(value);

    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      UpdateNote(query.id as string, {
        title: value.replace(/<(.|\n)*?>/gi, "").slice(0, 20),
        body: value,
      });
    }, 2000);
  }

  useEffect(() => {
    findById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Edit Note | Purple Notes</title>
      </Head>
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
          <Heading fontSize={21} color="gray.600" textAlign="center">
            The note is automatically saved
          </Heading>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={updateNote}
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
