import { useState } from "react";

function ClickTracker() {
  const [clicks, setClicks] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Click Tracker</h2>
      <p>Clicks: {clicks}</p>

      <div
        onClick={() => setClicks(clicks + 1)}
        style={{
          width: "300px",
          height: "150px",
          margin: "0 auto",
          backgroundColor: "#4f46e5",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      >
        Click Me!
      </div>
    </div>
  );
}

export default ClickTracker;
