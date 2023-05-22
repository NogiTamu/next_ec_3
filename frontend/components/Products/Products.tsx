import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Header } from "components/Header";
import SqueezeMenu from "components/SqueezeMenu";
import MerchandiseBox from "./MerchandiseBox";
import { useState } from "react";
import { useAtom } from "jotai";
import {
  merchandiseLists,
  selectedCategorie,
  squeezeMerchandise,
} from "@/atom";

const Products = () => {
  const [merchandiseList, setMerchandiseLists] = useAtom(merchandiseLists);
  const [squeezeMerchandises, setSqueezeMerchandises] =
    useAtom(squeezeMerchandise);
  const [selectedCategories, setSelectedCategories] =
    useAtom(selectedCategorie);

  let merchandises =
    selectedCategories.length !== 0 && squeezeMerchandises.length === 0
      ? ["ご指定の商品はございません"]
      : squeezeMerchandises.length !== 0
      ? squeezeMerchandises
      : merchandiseList;

  return (
    <Box>
      <Header />
      <Heading textAlign="center" mb="48px" mt="140px">
        ゲーミングマウス
      </Heading>
      <Flex maxW="1280px" margin="0 auto" justifyContent="space-between">
        <SqueezeMenu />
        <Flex
          justifyContent="flex-start"
          flexWrap="wrap"
          columnGap="9.6%"
          rowGap="60px"
          flexBasis="70%"
        >
          {merchandises.map((m: any, i: number) =>
            selectedCategories.length !== 0 &&
            squeezeMerchandises.length === 0 ? (
              <Text>{m}</Text>
            ) : (
              <MerchandiseBox
                key={i}
                name={m.attributes.merchandiseName}
                price={m.attributes.price}
                img={m.attributes.Image.data.attributes.url}
              />
            )
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Products;
