import Link from "next/link";
import classes from "./styles/productLists.module.css";

type Props = {
  name: string,
  path:string
};

export const Product = (props: Props) => {
  const { name,path } = props;

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <p className={classes.name}>{name}</p>
        <p className={classes.ex}>{name}</p>
        <Link href={`/merchandise/${path}`} className={classes.link}>
          すべての{name}を見る
        </Link>
      </div>
    </div>
  );
};
