import { useState } from "react";
import darkMode from "../assets/icons/dark-mode.png";
import lightmode from "../assets/icons/light-mode.png";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  }

  return (
    <div className="flex justify-between w-full">
      <h1 className="font-black text-text-light dark:text-text-dark text-lg md:text-2xl">
        GitHub Profile Finder
      </h1>
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 font-semibold text-secondary cursor-pointer"
      >
        <span className="pt-[3px] text-[14px]">{isDarkMode ? "LIGHT" : "DARK"}</span>
        <img src={isDarkMode ? lightmode : darkMode} />
      </button>
    </div>
  );
};

export default Header;
