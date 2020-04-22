import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made by Tej Patel. Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
