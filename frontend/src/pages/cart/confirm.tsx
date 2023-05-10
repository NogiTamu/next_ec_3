import { Flex } from "@chakra-ui/react";
import Inside from "components/Cart/inside";
import InputForm from "components/Form/InputForm";
import { Header } from "components/Header";

const confirm = () => {
    return (
        <>
         <Header />
         <Flex mt="100px" maxWidth="1280px">
            <Inside />
            <InputForm />
         </Flex>
        </>
    );
}

export default confirm;