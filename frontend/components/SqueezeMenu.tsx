import {
  merchandiseLists,
  selectedCategorie,
  squeezeMerchandise,
} from "@/atom";
import { gql, useQuery } from "@apollo/client";
import { Checkbox, VStack } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useEffect } from "react";

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
  const [squeezeMerchandises, setSqueezeMerchandises] = useAtom(squeezeMerchandise);
  const { loading, error, data } = useQuery(query);
  const subCategory: string[] = [];
  const displayLists: string[] = [];

  data?.subCategories.data.map((sub: categoryType) => {
    subCategory.push(sub.attributes.sub_category.toString());
    displayLists.push(sub.attributes.display.toString());
  });

  const [selectedCategories, setSelectedCategories] =
    useAtom(selectedCategorie);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };


  useEffect(() => {
    const squeeze =
      selectedCategories.length !== 0
        ? merchandiseList.filter((list: any) =>
            list.attributes.sub_categories.data.some((a) =>
              selectedCategories.includes(a.attributes.sub_category)
            )
          )
        : merchandiseList;

    setSqueezeMerchandises(squeeze);
  }, [selectedCategories, merchandiseList]);


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
