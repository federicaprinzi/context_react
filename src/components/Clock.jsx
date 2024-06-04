import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timeExact = () => {
      setCurrentTime(new Date());
    };

    const intervalId = setInterval(timeExact, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const language = useContext(LanguageContext);

  return (
    <h2>
      {language === "en" ? "Exact Time:" : "Ora Esatta:"}
      {currentTime.toLocaleTimeString()}
    </h2>
  );
};

export default Clock;
