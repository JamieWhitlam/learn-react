1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?
Inside the root element.


2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```
A JavaScript object of the element.

3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```
Can only render one element inside root.render. They can be wrapped in one element.

4. What does it mean for something to be "declarative" instead of "imperative"?
It tells you what it wants, not how to do it.

5. What does it mean for something to be "composable"?
Reusable, flexible. Small pieces that can be used together to create something big.