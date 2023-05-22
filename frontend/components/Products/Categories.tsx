import { MainCategory } from "./MainCategory";
import classes from "./styles/MainCategory.module.css";

export const Categories = () => {

    return (
        <div className={classes.lists}>
            <MainCategory name="マウス" path="mouse"></MainCategory>
            <MainCategory name="キーボード" path="keybord"></MainCategory>
            <MainCategory name="ヘッドフォン" path="headphone"></MainCategory>
        </div>
        
    );
}

