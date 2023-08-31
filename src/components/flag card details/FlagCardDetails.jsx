import styles from "./FlagCardDetails.module.css";
import { NavLink, useParams } from "react-router-dom";
import data from "/src/data/data.json";

import { useEffect, useState } from "react";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../header/Header.jsx";

const FlagCardDetails = () => {
  const [flagDetails, setFlagDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const details = data.find((countryName) => countryName.name === id);
    setFlagDetails(details);
  }, [id]);

  // console.log(flagDetails.flag);

  if (!flagDetails) {
    return <p>Loading...</p>;
  }
  ////////////////////////////////////////////////////////////////

  const getBorderingCountries = (borders, data) =>
    borders.map(
      (bord) => data.find((country) => country.alpha3Code === bord).name
    );

  const borderNamesList = flagDetails.borders
    ? getBorderingCountries(flagDetails.borders, data).map((name) => (
        <span className={styles.borders} key={name}>
          {name}
        </span>
      ))
    : "No Borders";

  ////////////////////////////////////////////////////////////////

  return (
    <>
      <Header />
      <main className={`${styles.mainContainer}`}>
        <div className={styles.backButtonAndImageWrapper}>
          <span className={styles.navLinkWrapper}>
            <NavLink className={styles.navLink} to="/">
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
              Back
            </NavLink>
          </span>
          <div className={styles.imgWrapper}>
            <img alt="flag" src={flagDetails?.flags.svg} />
          </div>
        </div>
        <div className={styles.cardDetailWrapper}>
          <div className={`${styles.cardDetailBody} `}>
            <h2>{flagDetails.name}</h2>
            <div className={styles.mainText}>
              <div className={`${styles.leftMainText} ${styles.gridFlow}`}>
                <p>
                  Native Name:{" "}
                  <span className={styles.dataOutput}>
                    {flagDetails.nativeName}
                  </span>
                </p>

                <p>
                  Population:{" "}
                  <span className={styles.dataOutput}>
                    {flagDetails.population.toLocaleString()}
                  </span>
                </p>

                <p>
                  Region:
                  <span className={styles.dataOutput}>
                    {flagDetails.region}
                  </span>
                </p>

                <p>
                  Sub Region:{" "}
                  <span className={styles.dataOutput}>
                    {flagDetails.subregion}
                  </span>
                </p>

                <p>
                  Capital:{" "}
                  <span className={styles.dataOutput}>
                    {flagDetails.capital}
                  </span>
                </p>
              </div>
              <div className={`${styles.rightMainText} `}>
                <p>
                  Top Level Domain:{" "}
                  <span className={styles.dataOutput}>
                    {flagDetails.topLevelDomain}
                  </span>{" "}
                </p>

                <p>
                  Currencies:{" "}
                  <span className={styles.dataOutput}>
                    {" "}
                    {flagDetails.currencies &&
                      flagDetails.currencies.map((cur) => cur.name).join(", ")}
                  </span>
                </p>

                <p>
                  Languages:{" "}
                  <span className={styles.dataOutput}>
                    {flagDetails.languages.map((lang) => lang.name).join(" ")}
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.bottomText}>
              <p>
                Borders countries:{" "}
                <span className={styles.borders}> {borderNamesList}</span>
              </p>
              {/*{!flagDetails.borders*/}
              {/*  ? "No Borders"*/}
              {/*  : flagDetails.borders.map((bord) => {*/}
              {/*      return (*/}
              {/*        <span key={bord}>*/}
              {/*          {*/}
              {/*            data.find((country) => country.alpha3Code === bord)*/}
              {/*              .name*/}
              {/*          }*/}
              {/*        </span>*/}
              {/*      );*/}
              {/*    })}*/}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FlagCardDetails;
