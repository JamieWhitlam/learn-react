import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

/**
 * Challenge:
 *
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
 */

/**
 * Follow up challenge:
 * 
 * Move the `width` style off the JSX and into CSS with a dedicated
 * className on the img element, and change the width to 55px instead
 */

/**
 * Follow up challenge:
 * 
 * Style the page.
 * 
 */

function Header() {
  return (
    <header className="header-bar">
      <img src="react-logo.png" alt="React logo" className="header-logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <h1>Reasons I am excited to learn React</h1>
      <ol>
        <li>
          React is a popular library, so I will be able to fit in with all the
          coolest devs out there! 😎
        </li>
        <li>
          I am more likely to get a job as a front end developer if I know React
        </li>
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2024 Ziroll development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

root.render(<Page />);
