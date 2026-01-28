import { useState } from "react";

function TextInputDisplay() {
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Type something:</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing..."
      />

      <p>
        <strong>Live Preview:</strong> {text}
      </p>
    </div>
  );
}

export default TextInputDisplay;
