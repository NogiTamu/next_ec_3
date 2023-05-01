import { ProductList } from "components/Products/ProductList";
import { Hero } from "./Hero";
import Title from "./Title";


export const Main = () => {
    return (
        <>
          <Hero></Hero>
          <Title/>
          <ProductList></ProductList>
        </>
    );
}

