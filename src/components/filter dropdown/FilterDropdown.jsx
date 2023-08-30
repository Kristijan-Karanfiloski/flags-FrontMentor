import styles from "./FilterDropdown.module.css";

const FilterDropdown = ({ select, handleSelect }) => {
  return (
    <form>
      <select
        onChange={(event) => handleSelect(event.target.value)}
        className={styles.select}
        name="regions"
        value={select}
      >
        <option value="filter">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      {/*  to check if the dorpdown e.target is working*/}
      {/*<p>{select}</p>*/}
    </form>
  );
};

export default FilterDropdown;
