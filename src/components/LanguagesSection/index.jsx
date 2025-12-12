import React from "react";

export default function LanguagesSection() {
  return (
    <div className="languages">
      <div id="first-row">
        <div className="circle">
          <img src="/src/assets/images/icons8-react-48.svg" alt="React" />
        </div>
        <div className="circle">
          <img src="/src/assets/images/icons8-figma.svg" alt="Figma" />
        </div>
        <div className="circle">
          <img src="/src/assets/images/icons8-adobesvg.svg" alt="Adobe Tools" />
        </div>
      </div>
      <div id="second-row">
        <div className="circle">
          <img src="/src/assets/images/icons8-html.svg" alt="HTML" />
        </div>
        <div className="circle">
          <img src="/src/assets/images/icons8-css.svg" alt="CSS" />
        </div>
        <div className="circle">
          <img src="/src/assets/images/icons8-js.svg" alt="JavaScript" />
        </div>
        <div className="circle">
          <img src="/src/assets/images/icons8-c.svg" alt="C Language" />
        </div>
      </div>
    </div>
  );
}
