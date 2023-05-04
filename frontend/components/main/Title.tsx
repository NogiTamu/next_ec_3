import { Flex, Heading, Text } from "@chakra-ui/react";
import classes from "./styles/title.module.css";

export const Title = () => {
    return (
        <Flex className={classes.container}>
            <Heading className={classes.heading}>最高のゲーミングアイテム</Heading>
            <Text className={classes.text}>最先端のテクノロジーが詰まった最高品質のアイテムで<br />最高のパフォーマンスをサポートします。</Text>
        </Flex>
    );
}

export default Title;