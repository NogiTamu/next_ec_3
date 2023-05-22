import { merchandiseLists } from "@/atom";
import { gql, useQuery } from "@apollo/client";
import { Box, Checkbox, Text, VStack } from "@chakra-ui/react";
import { useAtom } from "jotai";

import { useState } from "react";

const query = gql`
  {
    subCategories {
      data {
        attributes {
          sub_category
          display
        }
      }
    }
  }
`;

type categoryType = {
  attributes: { sub_category: string; display: string };
};
const SqueezeMenu = () => {
  const [merchandiseList, setMerchandiseLists] = useAtom(merchandiseLists);
  const { loading, error, data } = useQuery(query);
  const subCategory: string[] = [];
  const displayLists: string[] = [];
  console.log(merchandiseList);

  data?.subCategories.data.map((sub: categoryType) => {
    subCategory.push(sub.attributes.sub_category.toString());
    displayLists.push(sub.attributes.display.toString());
  });

  const [selectedCategories, setSelectedCategories] = useState<any>([]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const squeezeMerchandise = merchandiseList.filter((list: any) =>
    list.attributes.sub_categories.data.some(
      (a) => a.attributes.sub_category === "Bluethooth"
    )
  );
  
  console.log(squeezeMerchandise);

  return (
    <VStack flexBasis="20%" bg="red" h="calc(100vh - 100px)" align="start">
      {displayLists.map((displayName, i) => (
        <Checkbox
          key={displayName}
          isChecked={selectedCategories.includes(subCategory[i])}
          onChange={() => handleCategoryChange(subCategory[i])}
        >
          {displayName}
        </Checkbox>
      ))}
    </VStack>
  );
};

export default SqueezeMenu;
