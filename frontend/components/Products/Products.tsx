import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Header } from "components/Header";
import SqueezeMenu from "components/SqueezeMenu";
import MerchandiseBox from "./MerchandiseBox";
import { useAtom } from "jotai";
import {
  merchandiseLists,
  selectedCategorie,
  squeezeMerchandise,
} from "@/atom";
import { useEffect, useLayoutEffect, useState } from "react";

const Products = () => {
  const [merchandiseList, setMerchandiseLists] = useAtom(merchandiseLists);
  const [squeezeMerchandises, setSqueezeMerchandises] =
    useAtom(squeezeMerchandise);
  const [selectedCategories, setSelectedCategories] =
    useAtom(selectedCategorie);

  const [merchandises, setMerchandises] = useState([]);

  // useLayoutEffect(() => {
  //   let m =
  //     selectedCategories.length !== 0 && squeezeMerchandises.length === 0
  //       ? []
  //       : squeezeMerchandises.length !== 0
  //       ? squeezeMerchandises
  //       : merchandiseList;

  //   setMerchandises(m);
  // }, [selectedCategories, squeezeMerchandises, merchandiseList]);

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
          {squeezeMerchandises.length ===0 ? <Text fontSize="36px">一致する製品はありません</Text>:
            squeezeMerchandises.map((m: any, i: number) => (
              <MerchandiseBox
                key={i}
                name={m.attributes.merchandiseName}
                price={m.attributes.price}
                img={m.attributes.Image.data.attributes.url}
              />
            ))
          }
        </Flex>
      </Flex>
    </Box>
  );
};

export default Products;
