import React, { useState } from "react";
import PromoPhoto from "../promoPhoto/promoPhoto";

const Promo = () => {
  const [frontOpacity, setFrontOpacity] = useState(0);
  const [langOpacity, setLangOpacity] = useState(0);

  const mouseOverHandler = ({ target }) => {
    if (target.className === "in-left") {
      setFrontOpacity(1);
    }
    if (target.className === "in-right") {
      setLangOpacity(1);
    }
  };

  const mouseOutHandler = ({ target }) => {
    if (target.className === "in-left") {
      setFrontOpacity(0);
    }
    if (target.className === "in-right") {
      setLangOpacity(0);
    }
  };

  return (
    <div className="promo">
      <div className="headline headline_front">
        <h2
          className="in-left"
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Front-end Developer
        </h2>
        <p
          className="description"
          style={{
            opacity: frontOpacity,
            background: frontOpacity !== 0 ? "#04356c78" : "none",
          }}
        >
          I create Web Applications, Landing pages, Websites and many other
        </p>
      </div>

      <PromoPhoto />
      <div className="headline headline_lang">
        <h2
          className="in-right"
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Language Teacher
        </h2>
        <p
          className="description"
          style={{
            opacity: langOpacity,
            background: langOpacity !== 0 ? "#04356c78" : "none",
          }}
        >
          I am a teacher of English and Chinese. IELTS 8.0
        </p>
      </div>
    </div>
  );
};

export default Promo;
