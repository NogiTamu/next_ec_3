import { Product } from "./Product";
import classes from "./styles/productLists.module.css";

export const ProductList = () => {

    return (
        <div className={classes.lists}>
            <Product name="マウス"></Product>
            <Product name="キーボード"></Product>
            <Product name="ヘッドフォン"></Product>
        </div>
        
    );
}

