/**
 * Challenge: Set up a React app from scratch again.
 * This time, try rendering an unordered list with 2-3 list items inside
 * with why you're excited to be learning React.
 */

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    Reasons why I'm excited to learn React!
    <ul>
      <li>Very popular framework.</li>
      <li>I love learning new skills!</li>
      <li>Something not on the Microsoft stack!</li>
    </ul>
  </div>
);
