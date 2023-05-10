import { Box, Flex } from "@chakra-ui/react";
import { Header } from "components/Header";
import MerchanBox from "components/Products/MerchanBox";
import SerchMenu from "components/SerchMenu";

const Mouse = () => {
    return (
        <Box>
            <Header />
            <Flex mt="100px">
                <SerchMenu />
                <MerchanBox />
            </Flex>
        </Box>
    );
}

export default Mouse;