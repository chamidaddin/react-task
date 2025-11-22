import { useState } from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [theme, setTheme] = useState("light");
  const isLight = theme === "light";

  // Full-screen background
  const appStyles = {
    backgroundColor: isLight ? "#ffffffff" : "#120c3bff", // soft pink / deep plum
    color: isLight ? "#170f4cff" : "#ffffffff",
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px",
  };

  // Center card
  const cardStyles = {
    maxWidth: "720px",
    width: "100%",
    backgroundColor: isLight ? "#ffffffff" : "#170f4cff", // a bit lighter than bg
    borderRadius: "18px",
    padding: "24px 28px",
    boxShadow: isLight
      ? "0 18px 40px rgba(0,0,0,0.15)"
      : "0 18px 40px rgba(0,0,0,0.45)",
  };

  // Row for theme text + button
  const headerRowStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
  };

  // Cute pill button
  const buttonStyles = {
    padding: "8px 16px",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: 600,
    backgroundColor: isLight ? "#170f4cff" : "#ffffffff",
    color: isLight ? "#ffffffff" : "#170f4cff",
  };

  return (
    <div style={appStyles}>
      <div style={cardStyles}>
        <div style={headerRowStyles}>
          <p style={{ margin: 0 }}>Current theme: {theme}</p>

          <button
            style={buttonStyles}
            onClick={() => setTheme(isLight ? "dark" : "light")}
          >
            Switch to {isLight ? "Dark" : "Light"} Theme
          </button>
        </div>

  

        <ProfileCard />
      </div>
    </div>
  );
}

export default App;
