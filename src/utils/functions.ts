import { useEffect, useRef } from "react";

export const stringCapitalize = (str: string): string => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const simulateTyping = async (
  input: HTMLInputElement,
  text: string,
  speed: number
): Promise<void> => {
  let index = 0;
  return new Promise((resolve) => {
    const typeCharacter = () => {
      if (index < text.length) {
        input.value += text[index++];
        setTimeout(typeCharacter, speed);
      } else {
        input.blur();
        resolve();
      }
    };

    try {
      setTimeout(() => {
        input.focus();
        typeCharacter();
      }, 1000);
    } catch (_) {}
  });
};

export const useDocumentTitle = (title: string, prevailOnUnmount = false) => {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    []
  );
};

export const formattedTime = (timeStamp: number): string => {
  const date = new Date(timeStamp);
  const timeComponents = [date.getHours(), date.getMinutes()];
  return timeComponents
    .map((component) => {
      const pad = component < 10 ? "0" : "";
      return pad + component;
    })
    .join(":");
};
