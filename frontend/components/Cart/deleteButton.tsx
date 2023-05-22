import { cartAtom } from "@/atom";
import { Box, Button } from "@chakra-ui/react";
import { useAtom } from "jotai";

const DeleteButton = (props:any) => {
    const {name} =props

    const [cart, setCart] = useAtom(cartAtom);

    const removeItemFromCart = (name: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.name !== name));
      };

    return (
        <Box>
            <Button onClick={() => removeItemFromCart(name)}>削除</Button>
        </Box>
    );
}

export default DeleteButton;