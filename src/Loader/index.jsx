import "./Loader.css";

function Loader({ loaderColor }) {
  return (
    <div
      className="dot-loader"
      style={{ animation: `${loaderColor} 1s infinite linear alternate` }}
    ></div>
  );
}

export default Loader;
