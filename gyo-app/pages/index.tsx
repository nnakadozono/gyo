import { Typography, Container } from "@mui/material";
import React from "react";
import TodoList from "../components/TodoList";
import Head from "next/head";

const IndexPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Gyo - One-line log</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Container
        maxWidth="sm"
        style={{
          backgroundImage: "url('/background.png')",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Gyo
        </Typography>
        <TodoList />
      </Container>
    </>
  );
};

export default IndexPage;
