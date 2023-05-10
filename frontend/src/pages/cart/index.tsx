import { Header } from "components/Header";
import {  Container, Flex, Heading } from '@chakra-ui/react'
import homeCss from "../../styles/Home.module.css";
import classes from "../cart/cart.module.css";
import Inside from "../../../components/Cart/inside";
import Total from "components/Cart/total";

const Cart = () => {
  return (
    <>
      <Header />
      <Container className={`${homeCss.header_margin} ${classes.container}`} w="95%" pt="96px" maxWidth="1280px">
        <Heading as="h2"  mb="48px">ショッピングカート</Heading> 
        <Flex w="100%" justifyContent="space-around">
         <Inside page="cart" />
         <Total />
        </Flex>
      </Container>
    </>
  );
};
export default Cart;
