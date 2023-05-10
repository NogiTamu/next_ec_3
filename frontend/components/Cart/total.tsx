import { Flex, Stack, Text } from "@chakra-ui/react";
import PrimaryButton from "components/Button/PrimaryButton";

const Total = () => {
  return (
    <Stack bg="#dddddd"  minWidth="360px" p="40px" h="fit-content" spacing="5">
      <Flex justify="space-between">
        <Text>注文内容</Text>
        <Text>2件</Text>
      </Flex>
      <Stack borderTop="1px solid white" borderBottom="1px solid white" spacing="3" pt="16px" pb="16px">
        <Flex justify="space-between">
          <Text>注文</Text>
          <Text>￥5000</Text>
        </Flex>
        <Flex justify="space-between">
          <Text>送料</Text>
          <Text>￥550</Text>
        </Flex>
        <Flex>
          <Text>割引</Text>
          <Text>￥0</Text>
        </Flex>
      </Stack>
      <Flex justify="space-between">
        <Text>合計</Text>
        <Text>￥5000</Text>
      </Flex>
      <PrimaryButton path="/cart/confirm" text="購入手続きへ進む" />
    </Stack>
  );
};

export default Total;
