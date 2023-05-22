import Image from "next/image";
import { Box, Container,Flex, Text } from '@chakra-ui/react'
import Detail from "./detail";
import classes from "./styles/cartinside.module.css";
import DeleteButton from "./deleteButton";
import { useAtom } from "jotai";
import { cartAtom } from "@/atom";

type Props = {
  page?:string
}

const Inside = (props:Props) => {
  const {page} = props
  const [cart, setCart] = useAtom(cartAtom);
  


  return (
    <Box  maxWidth="800px" w="50%">
      {cart.map((c, i) => (
        <Container key={i} className={classes.container} w="100%">
          <Image src={`${process.env.NEXT_PUBLIC_API_URL}${c.img}`}  alt="商品画像" width={120} height={120} />
          <Container className={classes.text}>
            <Detail merchandise={c} page={page}/>
            <Flex className={classes.prices} >
              <Text>￥{(c.price * c.quantity).toLocaleString()}</Text>
              {page === "cart" ? <DeleteButton name={c.name}/> :<></>} 
            </Flex>
          </Container>
        </Container>
      ))}
    </Box>
  );
};
export default Inside;
