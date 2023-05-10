import { Box, Flex, Heading } from "@chakra-ui/react";
import axios from "axios";
import { Header } from "components/Header";
import MerchanBox from "components/Products/MerchanBox";
import SerchMenu from "components/SerchMenu";

export async function getStaticProps() {
  const merchandiseData = (
    await axios.get("http://localhost:1337/api/merchandises?populate=*")
  ).data.data;

  return {
    props: {
      merchandise: merchandiseData,
    },
  };
}

const Mouse = (props: any) => {
  const { merchandise } = props;
  console.log(merchandise[0].attributes.Image.data.attributes.url);
  return (
    <Box>
      <Header />
      <Heading textAlign="center" mb="48px" mt="140px">
            ゲーミングマウス
      </Heading>
      <Flex maxW="1280px" margin="0 auto"  justifyContent="space-between" >
        <SerchMenu />
          <Flex
          bg="red"
            justifyContent="flex-start"
            flexWrap="wrap"
            columnGap="9.6%"
            rowGap="60px"
            flexBasis="70%" 
          >
            {merchandise.map((m) => (
              <MerchanBox
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

export default Mouse;
