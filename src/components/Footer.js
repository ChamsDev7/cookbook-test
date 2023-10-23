import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <span>© {date} Chamseddine Tekaya</span>
    </div>
  );
};

export default Footer;
