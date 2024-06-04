import { useState } from "react";
import "./App.css";
import Clock from "./components/Clock";
import { LanguageContext } from "./components/LanguageContext";

const App = () => {
  const [language, setLanguage] = useState("en");

  function handleSetLanguage(language) {
    setLanguage(language);
  }
  function handleSelectChange(event) {
    setLanguage(event.target.value);
  }

  return (
    <div>
      <LanguageContext.Provider value={language}>
        <select onChange={handleSelectChange} value={language}>
          <option value="it">IT</option>
          <option value="en">EN</option>
        </select>
        <Clock />
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
