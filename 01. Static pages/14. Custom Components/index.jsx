import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 *
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 *
 * Render the Page component.
 */

root.render(<Page />);

function Page() {
  return (
    <section>
      <h1>Reasons why I'm excited to learn React, again:</h1>
      <ol>
        <li>I love learning new things</li>
        <li>It's very popular</li>
        <li>Something not on the Microsoft stack</li>
      </ol>
    </section>
  );
}
