import { cartAtom } from "@/atom";
import { Box, Button, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import Image from "next/image";





// カートにいれたタイミングで在庫数を減らす。

const MerchandiseBox = (props:any) => {
    const {name ,img,price,zaiko} = props
    const [cart, setCart] = useAtom(cartAtom);
    

    const addToCart = (name,price,img,zaiko) => {
    const existingItem = cart.find((item) => item.name === name);
    if (existingItem) {
      // 商品が既にカートに存在する場合、数量を増やす
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // 商品がカートに存在しない場合、新しいアイテムとして追加
      const newItem = {
        name: name,
        price:price,
        quantity: 1,
        img:img,
        zaiko
      };
      setCart((prevCart) => [...prevCart, newItem]);
    }
};


    return (
        <Box key={name} w="26%" minW="240px" bg="grey" h="280px">
            <Image src={`${process.env.NEXT_PUBLIC_API_URL}${img}`} width={100} height={100} alt="a"></Image>
            <Text>{name}</Text>
            <Text>￥{price}</Text>
            <Button onClick={()=>addToCart(name,price,img,zaiko)}>カートに追加</Button>
        </Box> 
        
    );
}

export default MerchandiseBox;