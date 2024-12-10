import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>
          Copyright © {new Date().getFullYear()} Pet Shop. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
