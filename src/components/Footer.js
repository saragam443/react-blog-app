import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <div className="footer container">
        <p>Copyright &copy; {date.getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
