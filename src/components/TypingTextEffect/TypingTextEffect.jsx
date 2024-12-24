import React, { useEffect, useState } from "react";
import styles from "./TypingTextEffect.module.css";

const TypeingTextEffect = ({ text, typingSpeed }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [textState, setTextState] = useState(text);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setTextState(text);
    setDisplayText("");
    setTextIndex(0);
  }, [text]);

  useEffect(() => {
    if (textIndex < textState.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + textState[textIndex]);
        setTextIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [displayText, textIndex]);

  return (
    <>
      {displayText}
      <span className={styles.cursor}>|</span>
    </>
  );
};

export default TypeingTextEffect;
