import { Box, Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { validationSchema } from "./validation";

interface LoginForm  {
    email:string,
    kanjiSei:string
}

const InputForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({mode:"onChange",resolver:zodResolver(validationSchema)});

  const onSubmit = (data:LoginForm) => {
    console.log(data)
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="email" {...register("email")} />
        <Text color="red">{errors.email?.message as React.ReactNode}</Text>
        <Flex>
          <Box>
            <FormLabel htmlFor="kanjiSei">姓</FormLabel>
            <Input id="kanjiSei" type="text" {...register("kanjiSei")} />
          </Box>
          <Box>
            <FormLabel htmlFor="kanjiMei">名</FormLabel>
            <Input id="kanjiMei" type="text" />
          </Box>
        </Flex>
        <Flex>
          <Box>
            <FormLabel htmlFor="kanaSei">セイ（カナ）</FormLabel>
            <Input id="kanaSei" type="text" />
          </Box>
          <Box>
            <FormLabel htmlFor="kanaMei">メイ（カナ）</FormLabel>
            <Input id="kanaMei" type="text" />
          </Box>
        </Flex>

        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="email" />
        <Button type="submit">購入へ進む</Button>
      </form>
    </Box>
  );
};

export default InputForm;
