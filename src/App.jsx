import { useEffect, useState } from "react";
import "./styles/cv.css";
import CV from "./components/cv/CV";

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("cv-theme");

    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("cv-theme", theme);
  }, [theme]);

  return (
    <CV
      theme={theme}
      onToggleTheme={() =>
        setTheme((currentTheme) =>
          currentTheme === "light" ? "dark" : "light",
        )
      }
    />
  );
}
