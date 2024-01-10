import { Link } from "react-router-dom";

const Discord = () => {
  return (
    <div className="discord">
      <Link to="stealthy">Stealthy</Link>
      <Link to="whosthat">WhosThat</Link>
      <Link to="misc">Misc</Link>
    </div>
  );
};

export default Discord;
