import { getFromLocalStorage, setToLocalStorage } from "../../utils/storage.js";
import { useEffect, useState } from "react";

export const useTheme = () => {
  const themes = getFromLocalStorage("allThemes");

  // console.log("From Local Storage: ", JSON.parse(themes));

  const [theme, setTheme] = useState(themes.light);

  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode) => {
    setToLocalStorage("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = getFromLocalStorage("theme");

    localTheme ? setTheme(localTheme) : setTheme(theme.light);

    setThemeLoaded(true);
  }, []);
  //
  // // const toggleTheme = () => {
  // //   if (theme === themes.light) {
  // //     setMode(themes.dark);
  // //   } else {
  // //     setMode(themes.light);
  // //   }
  // // };
  //
  // console.log("STATE : ", theme);
  return { theme, themeLoaded, setMode };
};
