import React, { startTransition } from "react";
import avatar from "./images/user.png";
import starFilled from "./images/star-filled.png";
import starEmpty from "./images/star-empty.png";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */

  /**
   * Follow-up Challenge: Use a ternary to determine which star image variable
   * should be used based on the `contact.isFavorite` property. Test
   * your results by manually changing the isFavorite value in state.
   *
   * `true` => starFilled
   * `false` => starEmpty
   */
    
    /**
     * Follow-up Challenge:
     * Update the following:
     * - aria-pressed should reflect the same value as contact.isFavorite.
     * - aria-label should switch to say "Remove from favorites" if
     *   contact.isFavorite is `true`.
     * - img alt should say "filled star icon" when it is filled.
     */

  let starIcon = contact.isFavorite ? starFilled : starEmpty;

  function toggleFavorite() {
    console.log("Toggle Favorite");
  }

  return (
    <main>
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt={`User profile picture of ${contact.firstName} ${contact.lastName}`}
        />
        <div className="info">
          <button
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            aria-label={contact.isFavorite ? "Remove from favourites" : "Add to favourites"}
            className="favorite-button"
          >
            <img src={starIcon} alt={contact.isFavorite ? "filled star icon" : "empty star icon"} className="favorite" />
          </button>
          <h2 className="name">{`${contact.firstName} ${contact.lastName}`}</h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
