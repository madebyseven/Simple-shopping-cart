import React, { useState } from "react";
import "./MoodToggler.css";

function MoodToggler() {
  const [isHappy, setIsHappy] = useState(true);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  const style = { color: isHappy ? "green" : "red" };

  return (
    <div>
      <h3 className="MoodToggler" style={style} onClick={toggleIsHappy}>
        {isHappy ? "Happy" : "Sad"}
      </h3>
    </div>
  );
}

export default MoodToggler;
