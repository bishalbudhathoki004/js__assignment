import { useState } from "react";

function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Password Input</h2>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
      />

      <br /><br />

      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"} Password
      </button>
    </div>
  );
}

export default PasswordToggle;
