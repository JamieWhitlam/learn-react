import React from "react"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    
    /**
     * Challenge: use form action instead of onSubmit to
     * handle the data from the form
     */

    
    function handleAction(formData) {
        const ingredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, ingredient]);        
    }

    return (
        <main>
            <form action={handleAction} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}