import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TypeAheadBox from "./TypeAheadBox";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <TypeAheadBox />
    </div>
  </StrictMode>
);
