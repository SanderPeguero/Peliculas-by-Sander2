import styles from "../CSS/Spinner.module.css";
import Loader from "../Images/Logo.png";

export function Spinner() {
    return (
        <div className={styles.spinner}>
            <img src={Loader} alt="" className={styles.spinning} size={10}/>

        </div>
    )
}
