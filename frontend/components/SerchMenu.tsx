import { Box, Checkbox, Text } from "@chakra-ui/react";

const SerchMenu = () => {
    return (
        <Box w="200px" bg="red" h="calc(100vh - 100px)" >
            <Text>通信形式</Text>
            <Checkbox display="block">有線</Checkbox>
            <Checkbox display="block">ワイヤレス</Checkbox>
        </Box>
    );
}

export default SerchMenu;