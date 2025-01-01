/**
 * Challenge: complete the Navbar to match the Figma design
 *
 * Hints:
 * - for semantic HTML purposes, the Navbar should render
 *   a <header> with a <nav> nested inside. The image and "ReactFacts"
 *   text elements can both be rendered as children inside the <nav>
 * - reference the Figma design for the most accurate info about
 *   colors, sizes, font information, etc.
 */

import logo from "/react-logo.png";

export default function Navbar() {
  return (
    <header className="header">
      <nav>
        <a className="header-logo-wrapper" target="_self" href="#">
          <img src={logo} alt="React logo" className="header-logo" />
          <span className="header-logo-text">ReactFacts</span>
        </a>
      </nav>
    </header>
  );
}
