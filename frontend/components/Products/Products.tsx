import { Box, Flex, Heading } from "@chakra-ui/react";
import { Header } from "components/Header";
import SqueezeMenu from "components/SqueezeMenu";
import MerchandiseBox from "./MerchandiseBox";
import { useState } from "react";




const Products = (props: any) => {
  const { merchandise } = props;
  
  return (
    <Box>
      <Header />
      <Heading textAlign="center" mb="48px" mt="140px">
        ゲーミングマウス
      </Heading>
      <Flex maxW="1280px" margin="0 auto" justifyContent="space-between">
        <SqueezeMenu  />
        <Flex
          bg="red"
          justifyContent="flex-start"
          flexWrap="wrap"
          columnGap="9.6%"
          rowGap="60px"
          flexBasis="70%"
        >
          {merchandise.map((m: any, i: number) => (
            <MerchandiseBox
              key={i}
              name={m.attributes.merchandiseName}
              price={m.attributes.price}
              img={m.attributes.Image.data.attributes.url}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Products;
