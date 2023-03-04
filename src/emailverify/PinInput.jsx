import React from "react";
import '../screens/css/login.css';

function PinInput({ firstInput }) {
  return (
    <input className="verify-input"
      type="tel"
      maxlength="1"
      aria-label="verification pin"
      required
      id={firstInput && "cc-1"}
      pattern="[0-9]{1}"
    />
  );
}

export default PinInput;
