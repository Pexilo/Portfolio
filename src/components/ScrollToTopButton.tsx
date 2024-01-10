import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [fadeEffect, setFadeEffect] = useState("");

  const checkScrollBottom = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight) {
      setTimeout(() => {
        setFadeEffect("fade-in");
        setIsVisible(true);
      }, 1000);
    } else {
      setFadeEffect("fade-out");
      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollBottom);
    return () => window.removeEventListener("scroll", checkScrollBottom);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          className={`go-to-top ${fadeEffect}`}
          onClick={() => window.scrollTo(0, 0)}
        >
          ▲
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
