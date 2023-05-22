import IncDecButton from "./incDecButton";
import { Box, Text } from "@chakra-ui/react";
import classes from "./styles/cartdetail.module.css";

type Props = {
  merchandise: {
    img: string;
    name: string;
    price: number;
    color: string;
    zaiko: any;
    quantity: number;
  };
  page?: string;
};


const Detail = (props: Props) => {
  const { merchandise,page } = props;

  return (
    <Box className={classes.container}>
      <Text fontSize="lg" fontWeight={700}>
        {merchandise.name}
      </Text>
      <Box className={classes.text}>
        <Box className={classes.colors}>
          <Text fontWeight={700}>{merchandise.color}</Text>
          {page === "cart" ? (
            merchandise.zaiko !==0 ? (
              <Text color="green">在庫あり{merchandise.zaiko}</Text>
            ) : (
              <Text>在庫切れ</Text>
            )
          ) : (
            <></>
          )}
        </Box>
       {page==="cart" ? <IncDecButton q={merchandise.quantity}></IncDecButton> :<></>} 
      </Box>
    </Box>
  );
};

export default Detail;
