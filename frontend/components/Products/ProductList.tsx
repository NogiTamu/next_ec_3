import { Product } from "./Product";
import classes from "./styles/productLists.module.css";

export const ProductList = () => {

    return (
        <div className={classes.lists}>
            <Product name="マウス" path="mouse"></Product>
            <Product name="キーボード" path="keybord"></Product>
            <Product name="ヘッドフォン" path="headphone"></Product>
        </div>
        
    );
}

