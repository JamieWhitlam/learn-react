export default function App() {
    /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */

    /**
     * Follow-up Challenge: move our ternary directly inside of the JSX
     * so the "Yes" and "No" are determined inside the <h1>
     * 
     * Hint: you will no longer need the `answer` variable
     */

    const isGoingOut = true;
            
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value">{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}
