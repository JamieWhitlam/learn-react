1. What do props help us accomplish?
Allow components to be reused.


2. How do you pass a prop into a component?
Like you pass a standard html attribute to a component.


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   No you can't because it's a real dom element which has properties in the html spec


4. How do I receive props in a component?
function Navbar(props) {
    return (
        <header>
            props.text
        </header>
    )
}


5. What data type is `props` when the component receives it?
A JavaScript object.