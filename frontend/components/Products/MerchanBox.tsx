import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";



const MerchanBox = (props) => {
    const {name ,img,price} = props
    return (
        <Box w="26%" minW="240px" bg="grey" h="280px">
            <Image src={`${process.env.NEXT_PUBLIC_API_URL}${img}`} width={100} height={100} alt="a"></Image>
            <Text>{name}</Text>
            <Text>￥{price}</Text>
            <Button>カートに追加</Button>
        </Box>
    );
}

export default MerchanBox;