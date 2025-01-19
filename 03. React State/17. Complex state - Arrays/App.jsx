import React from "react"

export default function App() {
  /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array as an empty array
     * 
     * Don't worry about fixing `addFavoriteThing` quite yet.
     */
  const [myFavoriteThings, setMyFavouriteThings] = React.useState([]);
  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    /**
    * Follow-up Challenge: you do it!
    * Every time "Add item" is clicked, it should add another string
    * "Test" to the list on the page
    */
   setMyFavouriteThings(prevFavThings => [...prevFavThings, "Test"]);

  }
  
  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )
}