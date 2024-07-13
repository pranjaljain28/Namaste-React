const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "h1",{id :"child" },
        "I'm a h1 tag"
    )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


