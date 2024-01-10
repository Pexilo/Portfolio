import AgostoreBg from "@assets/agostore/agostore_bg.png";
import AgostoreLogo from "@assets/agostore/agostore_logo.png";
import DeliverySVG from "@assets/agostore/delivery.svg";
import OpenSVG from "@assets/agostore/open.svg";
import PriceSVG from "@assets/agostore/price.svg";
import StockSVG from "@assets/agostore/stock.svg";
import { Tire, tires } from "@data/agostore.data";
import "@styles/agostore.css";
import { useState } from "react";
import { SquareLoader } from "react-spinners";
import { simulateTyping, useDocumentTitle } from "src/utils/functions";
import ScrollToTopButton from "./ScrollToTopButton";

const Agostore = () => {
  const [loading, setLoading] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [fadeEffect, setFadeEffect] = useState("");

  const fakeLoading = async () => {
    return new Promise<void>((resolve) => {
      setLoading(true);
      setFadeEffect("fade-in");
      setTimeout(() => {
        setFadeEffect("fade-out");
        setTimeout(() => {
          setLoading(false);
          setFadeEffect("");
          resolve();
        }, 500);
      }, 1000);
    });
  };

  return (
    <div className="agostore-container">
      {loading ? (
        <div className={`loader-container ${fadeEffect}`}>
          <SquareLoader
            size={150}
            color={"var(--agostore-color)"}
            loading={loading}
          />
        </div>
      ) : (
        <>
          <div className={`research fade-in ${fadeEffect}`}>
            <Research
              fakeLoading={fakeLoading}
              minimized={minimized}
              setMinimized={setMinimized}
            />
          </div>
          {minimized && (
            <div className={`card fade-in ${fadeEffect}`}>
              <h3>Produits trouvés : {tires.length}</h3>
              {tires.map((tire) => (
                <Card key={tire.id} tire={tire} />
              ))}
              <ScrollToTopButton />
            </div>
          )}
        </>
      )}
    </div>
  );
};

const Research = ({
  fakeLoading,
  minimized,
  setMinimized,
}: {
  fakeLoading: () => Promise<void>;
  minimized: boolean;
  setMinimized: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [dimensionValue, setDimensionValue] = useState("");
  const [marqueValue, setMarqueValue] = useState("");
  const [searching, setSearching] = useState(false);
  useDocumentTitle("Agostore - Comparateur de pneus");

  const handleSearch = async (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    e.preventDefault(); // Prevent form submission
    if (searching || minimized) return;
    setSearching(true);
    /* Simulate typing in dimension input */
    const dimensionInput = document.querySelector(
      "input[placeholder='Dimension']"
    ) as HTMLInputElement;
    await simulateTyping(dimensionInput, "215/45R16", 100);
    setDimensionValue("215/45R16");
    /* Simulate typing in marque input */
    const marqueInput = document.querySelector(
      "input[placeholder='Marque']"
    ) as HTMLInputElement;
    await simulateTyping(marqueInput, "Michelin", 100);
    setMarqueValue("Michelin");
    /* Simulate clicking on search button */
    const searchButton = document.querySelector("button") as HTMLButtonElement;
    searchButton.focus();
    searchButton.style.transform = "scale(1.1)";
    searchButton.style.transition = "transform 0.1s ease-in-out";
    setTimeout(() => {
      searchButton.style.transform = "scale(1)";
    }, 100);

    /* Simulate loading */
    setTimeout(async () => {
      setMinimized(true);
      await fakeLoading();
    }, 1500);
    setSearching(false);
  };

  const handleTopDivClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!minimized) return handleSearch(e); // Secondary event if not minimized
    fakeLoading();
    setDimensionValue("");
    setMarqueValue("");
    setMinimized(false);
  };

  return (
    <div
      className={"agostore-bg"}
      style={
        !minimized
          ? { backgroundImage: `url(${AgostoreBg})` }
          : { height: "100%" }
      }
    >
      <div
        className="container"
        style={
          !minimized
            ? {
                height: "100%",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.419)",
              }
            : {}
        }
      >
        <div className="top" role="button" onClick={handleTopDivClick}>
          <img src={AgostoreLogo} alt="agostore" />
          <h1 style={minimized ? { color: "var(--primary-text-color)" } : {}}>
            AGOSTORE
          </h1>
        </div>
        <div className="middle">
          <form>
            <input
              type="text"
              placeholder="Dimension"
              value={dimensionValue}
              onChange={(e) => setDimensionValue(e.target.value)}
              onKeyDown={(e) => e.preventDefault()}
            />
            <input
              type="text"
              placeholder="Marque"
              value={marqueValue}
              onChange={(e) => setMarqueValue(e.target.value)}
              onKeyDown={(e) => e.preventDefault()}
            />
            <input
              type="text"
              placeholder="Modèle"
              onKeyDown={(e) => e.preventDefault()}
            />
            <input
              type="text"
              placeholder="Stock minimum"
              onKeyDown={(e) => e.preventDefault()}
            />
            <input
              type="text"
              placeholder="Prix maximum"
              onKeyDown={(e) => e.preventDefault()}
            />
            <button onClick={(e) => handleSearch(e)}>Rechercher</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Card = ({ tire }: { tire: Tire }) => {
  return (
    <div className="container">
      <div className="top">
        <h2>
          {tire.size} {tire.name} {tire.model}
        </h2>
      </div>
      <div className="middle">
        <div className="left">
          <img src={tire.image} alt={tire.name} />
          <div className="tags">
            <div style={{ backgroundColor: "darkorange" }}>
              {tire.tags.range}
            </div>
            <div style={{ backgroundColor: "forestgreen" }}>
              {tire.tags.class}
            </div>
            {tire.tags?.eXtraLoad ? (
              <div style={{ backgroundColor: "dodgerblue" }}>
                {tire.tags.eXtraLoad}
              </div>
            ) : null}
            {tire.tags?.ms ? (
              <div style={{ backgroundColor: "deeppink" }}>{tire.tags.ms}</div>
            ) : null}
            {tire.tags?.treepmfs ? (
              <div style={{ backgroundColor: "teal" }}>
                {tire.tags.treepmfs}
              </div>
            ) : null}
            <div style={{ backgroundColor: "dodgerblue" }}>
              {tire.tags.euDir}
            </div>
          </div>
        </div>
        <div className="stocks">
          {tire.stocks.map((stock) => (
            <div
              key={stock.id}
              style={stock.id === 1 ? { backgroundColor: "#bfdbfe" } : {}}
            >
              <span>
                <img
                  src={stock.flag}
                  alt={stock.country}
                  title={stock.country}
                />
                <p> {stock.name.toUpperCase()}</p>
                <img
                  src={DeliverySVG}
                  alt="delivery"
                  title={
                    "Délais de livraison: " +
                    (Math.random() * 20).toFixed(0) +
                    " jours"
                  }
                />
              </span>
              <span>
                <img src={PriceSVG} alt="price" />
                <p>{stock.price.toFixed(2)} €</p>
              </span>
              <span>
                <p>{stock.stock}</p> <img src={StockSVG} alt="stock" />
              </span>
              <span>
                <img src={OpenSVG} alt="open" style={{ cursor: "pointer" }} />
              </span>
            </div>
          ))}
        </div>
        <div className="right">
          <button>
            <span className="short-txt">Plus</span>{" "}
            <span className="long-txt">Plus d'infos</span>
          </button>
          <button className="edit">
            <span className="short-txt">Edit</span>{" "}
            <span className="long-txt">Modifier</span>
          </button>
        </div>
      </div>
      <div className="bottom">
        <p>
          <b>EAN: </b>
          {Math.floor(Math.random() * 1e13)
            .toString()
            .padStart(13, "0")}
        </p>
      </div>
    </div>
  );
};

export default Agostore;
