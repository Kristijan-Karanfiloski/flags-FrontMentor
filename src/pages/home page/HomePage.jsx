import SearchInput from "../../components/search input/SearchInput.jsx";
import FilterDropdown from "../../components/filter dropdown/FilterDropdown.jsx";
import styles from "./HomePage.module.css";
import FlagCard from "../../components/flag card/FlagCard.jsx";
import data from "/src/data/data.json";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("filter");

  const handleChange = (eventTargetValueFromChildComponentSearchComponent) => {
    setSearch(eventTargetValueFromChildComponentSearchComponent);
  };

  const handleSelect = (eventTargetValueFromChildComponentSelectComponent) => {
    setSelect(eventTargetValueFromChildComponentSelectComponent);
  };

  return (
    <>
      <div className={styles.searchFilter}>
        <SearchInput search={search} setSearch={handleChange} />
        <FilterDropdown select={select} handleSelect={handleSelect} />
      </div>
      <main>
        {data
          // .filter((country) => country.region === select || select === "filter")
          .filter(
            (country) =>
              // country.name.toLowerCase().includes(search.toLowerCase()) ||
              (country.region === select || select === "filter") &&
              country.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((data) => (
            <NavLink
              to={`/${data.name}`}
              key={data.name}
              // style={{ textDecoration: "none" }}
              className={styles.navLink}
            >
              {<FlagCard data={data} />}
            </NavLink>
          ))}
        {/*{data*/}
        {/*  .filter((country) => {*/}
        {/*    if (search !== "") {*/}
        {/*      return (*/}
        {/*        country.name.toLowerCase().indexOf(search.toLowerCase()) > -1*/}
        {/*      );*/}
        {/*    } else {*/}
        {/*      return true;*/}
        {/*    }*/}
        {/*  })*/}
        {/*  .map((data, i) => (*/}
        {/*    <FlagCard data={data} key={i} />*/}
        {/*  ))}*/}
      </main>
    </>
  );
};

export default HomePage;
