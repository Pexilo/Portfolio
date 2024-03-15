import { useNavigate } from "react-router-dom";
import "@styles/extras.css";
import { useEffect, useState } from "react";

const GoBackHeader = () => {
  let navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  const deferLoading = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsLoaded(true);
        resolve();
      }, 1500);
    });
  };

  useEffect(() => {
    deferLoading();
  }, []);

  return (
    isLoaded && (
      <div className="go-back-header fade-in">
        <button
          className="go-back-button"
          onClick={() => {
            navigate(-1);
          }}
        >
          ◄ Retour
        </button>
      </div>
    )
  );
};

export default GoBackHeader;
