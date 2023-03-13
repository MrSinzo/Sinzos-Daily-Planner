//A single `Header` component that appears on multiple pages
// GIVEN a single-page application portfolio for a web developer
// WHEN I load the portfolio
// THEN I am presented with a page containing a header, a section for content, and a footer
// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
import React from "react";
// href="%PUBLIC_URL%" / console during development doesnt like publicpath thing
function Header() {
  return (
    <div>
      <h1>Teacher Katie Class</h1>
      <h3></h3>
      <br />
    </div>
  );
}

export default Header; // our connection to the rest of the application
