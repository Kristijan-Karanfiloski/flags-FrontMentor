import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";
import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme as toggleThemeAction } from "../../redux/themePickerSlice.js";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export const ThemeContext = createContext(null);

const Header = () => {
  // const [isDark, setIsDark] = useState("light");
  ////////////////////////////////////////////////////////////////////////

  const theme = useSelector((state) => state.themePickerSlice.value);
  const dispatch = useDispatch();

  console.log(theme);
  console.log(dispatch);
  // const { theme, themeLoaded } = useTheme();
  // const [selectedTheme, setSelectedTheme] = useState(theme);
  // const [isFakeDark, setIsFakeDark] = useState(false);
  // const { theme, setTheme } = useThemeContext(ThemeContext);

  // const StyledApp = styled.header`
  //   background: black;
  // `;
  ////////////////////////////////////////////////////////////////////

  // console.log("THEME", theme, "THEME", themeLoaded);
  ///////////////////////////////////////////////////////////////////////
  // useEffect(() => {
  //   // setSelectedTheme(theme);
  //   document.documentElement.classList.toggle("fakeDarkTheme");
  // }, [isFakeDark]);

  const handleTheme = () => {
    dispatch(toggleThemeAction());
  };

  const isThemeDark = theme === "dark";

  const headerClassName = !isThemeDark ? styles.header : styles.darkHeader;

  return (
    <>
      <header className={headerClassName}>
        <p className={styles.leftText}>Where in the world?</p>
        <button onClick={handleTheme} className={styles.headerRight}>
          <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
          <p className={[styles.rightText, isThemeDark && styles.whiteText]}>
            {!isThemeDark ? "Dark Mode" : "Light Mode"}
          </p>
        </button>
      </header>
    </>
  );
};

export default Header;
