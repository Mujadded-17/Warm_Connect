import React from "react";
import "../css/footer.css";

function Footer() {
  return React.createElement(
    "footer",
    { className: "footer" },
    React.createElement(
      "div",
      { className: "footer-content" },
      React.createElement("p", null, "© 2025 WarmConnect. All rights reserved."),
      React.createElement(
        "div",
        { className: "social-links" },
        React.createElement(
          "a",
          { href: "mailto:warmconnect@email.com", target: "_blank", rel: "noopener noreferrer" },
          "Email"
        ),
        React.createElement(
          "a",
          { href: "https://facebook.com/warmconnect", target: "_blank", rel: "noopener noreferrer" },
          "Facebook"
        ),
        React.createElement(
          "a",
          { href: "https://instagram.com/warmconnect", target: "_blank", rel: "noopener noreferrer" },
          "Instagram"
        ),
        React.createElement(
          "a",
          { href: "https://youtube.com/@warmconnect", target: "_blank", rel: "noopener noreferrer" },
          "YouTube"
        )
      )
    )
  );
}

export default Footer;
