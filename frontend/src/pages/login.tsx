import { Box, Heading, Stack } from "@chakra-ui/react";
import { Header } from "components/Header";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <Header></Header>
      <Box mt="100px">
        <Heading>ログイン</Heading>
        <Stack></Stack>
        <Link href="/resister">新規登録</Link>
      </Box>
    </>
  );
};

export default Login;
