import classes from "./styles/hero.module.css";
import homeCss from "../../src/styles/Home.module.css";
import { Box } from "@chakra-ui/react";


export const Hero = () => {
    return (
        <Box className={`${classes.hero} ${homeCss.header_margin}`}>
           
        </Box>
    );
}