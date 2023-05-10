import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";

const data = {
    img:"/matu.jpg",
    name:"XRD102 松村沙友理モデル",
    price:1200
}

const MerchanBox = () => {
    return (
        <Box>
            <Image src={data.img} width={100} height={100} alt="a"></Image>
            <Text>{data.name}</Text>
            <Text>￥{data.price}</Text>
            <Button>カートに追加</Button>
        </Box>
    );
}

export default MerchanBox;