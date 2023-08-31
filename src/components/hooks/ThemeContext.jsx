import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.style.setProperty(
        "--current-background-color",
        "var(--background-light)"
      );
      document.documentElement.style.setProperty(
        "--current-text-color",
        "var(--text-color-light)"
      );
    } else {
      document.documentElement.style.setProperty(
        "--current-background-color",
        "var(--background-dark)"
      );
      document.documentElement.style.setProperty(
        "--current-text-color",
        "var(--text-color-dark)"
      );
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "UseThemeContext must be used within a themeContextProvider"
    );
  }
  return context;
}
