import { useState, useEffect } from "react";

type prop={
  texts:string,
}

export default function Typewriter({ texts }:prop) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(100);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[index];
      const textLength = text.length;

      if (!isDeleting) {
        setText(currentText.substring(0, textLength + 1));
        setDelay(100);
      } else {
        setText(currentText.substring(0, textLength - 1));
        setDelay(50);
      }

      if (isDeleting) {
        if (text === "") {
          setIsDeleting(false);
          setIndex((index + 1) % texts.length);
        }
      } else {
        if (text === currentText) {
          setIsDeleting(true);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [index, text, isDeleting, delay, texts]);

  return <span>{text}</span>;
}

