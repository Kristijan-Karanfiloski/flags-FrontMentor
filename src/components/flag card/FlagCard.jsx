import styles from "./FlagCard.module.css";

const FlagCard = ({ data }) => {
  return (
    <>
      {/*<Link to={`/cardDetails/${data.name}`}>*/}
      <div className={styles.card}>
        <div>
          <img src={data.flags.png} alt={data.name} />
        </div>
        <div className={styles.cardBody}>
          <h5>{data.name}</h5>
          <p>Population: {data.population.toLocaleString("en-US")}</p>
          <p>Region: {data.region}</p>
          <p>Capital: {data.capital}</p>
        </div>
      </div>
      {/*</Link>*/}
    </>
  );
};

export default FlagCard;
