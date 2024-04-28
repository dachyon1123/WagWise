import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = () => {
  const mailtoHref = "mailto:support@example.com?subject=Dog Training&body=Description";

  return (
    <div className="App md:mr-10 md:ml-2 md:text-base text-xs">
      <a href={mailtoHref} target="_blank">
        random@random.com
      </a>
    </div>
  );
};

export default ButtonMailto;
