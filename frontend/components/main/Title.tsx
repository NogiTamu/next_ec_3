import classes from "./styles/title.module.css";

export const Title = () => {
    return (
        <div className={classes.container}>
            <h2 className={classes.heading}>最高のゲーミングアイテム</h2>
            <p className={classes.text}>最先端のテクノロジーが詰まった最高品質のアイテムで<br />最高のパフォーマンスをサポートします。</p>
        </div>
    );
}

export default Title;