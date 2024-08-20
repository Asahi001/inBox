import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <GlobalContext.Provider
      value={{ darkMode: darkMode, setDarkMode: setDarkMode }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
