import styles from "./FlagCard.module.css";
import { useSelector } from "react-redux";

const FlagCard = ({ data }) => {
  const theme = useSelector((state) => state.themePickerSlice.value);

  return (
    <>
      {/*<Link to={`/cardDetails/${data.name}`}>*/}
      <div
        className={
          theme === "light" ? styles.cardWhiteTheme : styles.cardDarkTheme
        }
      >
        <div className={styles.img}>
          <img src={data.flags.png} alt={data.name} />
        </div>
        <div className={styles.cardBody}>
          <h5>{data.name}</h5>
          <p className={styles.mainText}>
            Population:{" "}
            <span className={styles.rightText}>
              {data.population.toLocaleString("en-US")}
            </span>
          </p>
          <p className={styles.mainText}>
            Region: <span className={styles.rightText}>{data.region}</span>
          </p>
          <p className={styles.mainText}>
            Capital: <span className={styles.rightText}> {data.capital}</span>
          </p>
        </div>
      </div>
      {/*</Link>*/}
    </>
  );
};

export default FlagCard;
