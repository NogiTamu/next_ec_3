import { Header } from "components/Header";
import { Box, Flex } from '@chakra-ui/react'
import homeCss from "../../styles/Home.module.css";
import Inside from "../../../components/Cart/inside";
import Total from "components/Cart/total";

const Cart = () => {
  return (
    <>
      <Header />
      <Box className={homeCss.header_margin}>
        <h2>ショッピングカート</h2> 
        <Flex>
         <Inside></Inside>
          <Total />
        </Flex>
        
      </Box>
    </>
  );
};
export default Cart;
