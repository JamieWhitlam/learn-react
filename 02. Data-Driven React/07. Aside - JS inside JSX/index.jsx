import ReactDOM from 'react-dom/client';

function App() {
  // const firstName = "Joe"
  // const lastName = "Schmoe"
  
  /**
   * Challenge: finish off the h1 below so it says "Hello Joe Schmoe"
   */
  
  /**
   * Follow up Challenge: change the hard-coded "night" to display the
   * text we determined from the logic above.
   */

  const hours = new Date().getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else if (hours < 21) {
    timeOfDay = "evening"
  } else {
    timeOfDay = "night"
  }

  return (
    <h1>Good {timeOfDay}</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);