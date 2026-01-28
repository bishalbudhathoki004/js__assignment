import { useState } from "react";

function ToggleImage() {
  const [showImage, setShowImage] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={() => setShowImage(!showImage)}>
        {showImage ? "Hide Image" : "Show Image"}
      </button>

      {showImage && (
        <div style={{ marginTop: "20px" }}>
          <img
            src="https://www.bing.com/th/id/OIP.zB1rsS80G2GPbY0mMvKnigHaEK?w=251&h=128&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="Example"
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}
    </div>
  );
}

export default ToggleImage;
