import Image from "next/image";
import { Box, Container,Flex, Text } from '@chakra-ui/react'
import Detail from "./detail";
import classes from "./styles/cartinside.module.css";
import DeleteButton from "./deleteButton";

const Inside = () => {
  const merchandise = [
    {
      img: "/matu.jpg",
      name: "松村沙友理",
      price: 4650,
      color: "black",
      zaiko: true,
      quantity: 1,
    },
    {
      img: "/matu.jpg",
      name: "菅原幸彦",
      price: 450,
      color: "black",
      zaiko: true,
      quantity: 50,
    },
  ];
  return (
    <Box>
      {merchandise.map((m, i) => (
        <Container className={classes.container}>
          <Image src={m.img} alt="商品画像" width={120} height={120} />
          <Container className={classes.text}>
            <Detail merchandise={m} />
            <Flex className={classes.prices} >
              <Text>￥{(m.price * m.quantity).toLocaleString()}</Text>
              <DeleteButton />
            </Flex>
          </Container>
        </Container>
      ))}
    </Box>
  );
};
export default Inside;
