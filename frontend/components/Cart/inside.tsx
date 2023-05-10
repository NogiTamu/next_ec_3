import Image from "next/image";
import { Box, Container,Flex, Text } from '@chakra-ui/react'
import Detail from "./detail";
import classes from "./styles/cartinside.module.css";
import DeleteButton from "./deleteButton";

type Props = {
  page?:string
}

const Inside = (props:Props) => {
  const {page} = props
  
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
    <Box  maxWidth="800px" w="50%">
      {merchandise.map((m, i) => (
        <Container className={classes.container} w="100%">
          <Image src={m.img} alt="商品画像" width={120} height={120} />
          <Container className={classes.text}>
            <Detail merchandise={m} page={page}/>
            <Flex className={classes.prices} >
              <Text>￥{(m.price * m.quantity).toLocaleString()}</Text>
              {page === "cart" ? <DeleteButton /> :<></>} 
            </Flex>
          </Container>
        </Container>
      ))}
    </Box>
  );
};
export default Inside;
