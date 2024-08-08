import React, { useEffect } from "react";

const useThemeSwitcher = () => {
  const preferDark = "(prefers-color-scheme: dark)";
  const [mode, setMode] = React.useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDark);
    const userTheme = window.localStorage.getItem("theme");

    const toggleMode = () => {
      if (userTheme) {
        let newMode = userTheme === "dark" ? "dark" : "light";
        setMode(newMode);
        if (newMode === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let newMode = mediaQuery.matches ? "dark" : "light";
        setMode(newMode);
        if (newMode === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    toggleMode();

    mediaQuery.addEventListener("change", toggleMode);

    return () => {
      mediaQuery.removeEventListener("change", toggleMode);
    };
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }

    if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
