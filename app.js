import React from "react";
import ReactDOM from "react-dom/client";

{/* 
<div>
    <div>
        <h1></h1>
        <p></p>
    </div>
    <div>
        <h1></h1>
        <p></p>
    </div>
</div> 
*/}
    
const parent = React.createElement("div", {id : "parent1"}, 
    React.createElement("div", {id : "parent2"}, 
        [
            React.createElement("h1", {id : "child1"}, "This is Namaste React Course"),
            React.createElement("p", {id : "child2"}, "By Akshay Saini")
        ]
    ),
    React.createElement("div", {id : "parent3"}, 
        [
            React.createElement("h1", {id : "child3"}, "Learning React from Namaste React"),
            React.createElement("p", {id : "child4"}, "By Mallikarjun")
        ]
    )
);
    
console.log(parent);
    
const reactRootContainer = ReactDOM.createRoot(document.getElementById("root"));
reactRootContainer.render(parent);// Converts React Element into a browser understandable HTML Element