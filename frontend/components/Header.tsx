import Image from "next/image";
import Link from "next/link";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <header className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.logoContainer}>
            <Link href="/">
                 <Image src="/logo.png" alt="ロゴ" width={60} height={60} />
            </Link>
          <ul className={classes.list}>
            <li>
              <Link href="/merchandise/mouse">マウス</Link>
            </li>
            <li>
              <Link href="/merchandise//keybord">キーボード</Link>
            </li>
            <li>
              <Link href="/merchandise//headphone">ヘッドフォン</Link>
            </li>
          </ul>
        </div>
        <div className={classes.menu}>
          <Link href="/cart" className={classes.carts}>カート</Link>
          <button className={classes.serach}>探す</button>
          <Link href="/login" className={classes.carts}>ログイン</Link>
        </div>
      </div>
    </header>
  );
};
