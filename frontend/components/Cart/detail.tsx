import IncDecButton from "./incDecButton";
import { Box, Text } from '@chakra-ui/react'
import classes from "./styles/cartdetail.module.css";

type Props = {
  merchandise: {
    img: string;
    name: string;
    price: number;
    color: string;
    zaiko: boolean;
    quantity: number;
  };
  cart?: boolean;
};

const Detail = (props: Props) => {
  const { merchandise } = props;
  return (
    <Box className={classes.container} >
      <Text fontSize="lg" fontWeight={700}>{merchandise.name}</Text>
      <Box className={classes.text}>
        <Box className={classes.colors}>
          <Text fontWeight={700}>{merchandise.color}</Text>
          {merchandise.zaiko ? <Text color="green">在庫あり</Text> : <Text>在庫切れ</Text>}
        </Box>
        <IncDecButton q={merchandise.quantity}></IncDecButton>
      </Box>
    </Box>
  );
};

export default Detail;
