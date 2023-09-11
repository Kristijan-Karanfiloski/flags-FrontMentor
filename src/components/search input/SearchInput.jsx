import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SearchInput.module.css";

const SearchInput = ({ search, setSearch }) => {
  // const handleChange = (value) => {
  //   setSearch(value);
  // };
  return (
    <>
      <div className={styles.inputWrapper}>
        <span>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          id="queryCountries"
          placeholder="Search for a country..."
        />
        {/*to check if the input search is working*/}
        {/*<p>{search} </p>*/}
      </div>
    </>
  );
};

export default SearchInput;
