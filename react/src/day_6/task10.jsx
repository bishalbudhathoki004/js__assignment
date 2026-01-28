import { useState } from "react";

function TrafficLight() {
  const [activeLight, setActiveLight] = useState("red");

  const nextLight = () => {
    if (activeLight === "red") setActiveLight("yellow");
    else if (activeLight === "yellow") setActiveLight("green");
    else setActiveLight("red");
  };

  const lightStyle = (color) => ({
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: activeLight === color ? color : "#ccc",
    margin: "10px auto",
    transition: "background-color 0.3s",
  });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Traffic Light Simulator</h2>

      <div
        style={{
          width: "100px",
          padding: "20px",
          backgroundColor: "#333",
          borderRadius: "20px",
          margin: "20px auto",
        }}
      >
        <div style={lightStyle("red")}></div>
        <div style={lightStyle("yellow")}></div>
        <div style={lightStyle("green")}></div>
      </div>

      <button onClick={nextLight}>Next Light</button>
    </div>
  );
}

export default TrafficLight;
