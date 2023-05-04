import { Button, Flex, Text } from "@chakra-ui/react";
import classes from "./styles/cartdetail.module.css";

type Props = {q : Number}

    
const IncDecButton = (props:Props) => {
    const { q }  = props

  return (
    <Flex className={classes.btns}>
      <Button>-</Button>
      <Text>{`${q}`}</Text>
      <Button>+</Button>
    </Flex>
  );
};

export default IncDecButton;
