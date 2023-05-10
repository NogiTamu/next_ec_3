import Link from "next/link";
import classes from "./Button.module.css";

type Props = {
    text:string,
    path:string
}

const PrimaryButton = (props:Props) => {
    const {path , text} = props
    return (
        <Link href={path} className={classes.primary}>{text}</Link>
    );
}

export default PrimaryButton;