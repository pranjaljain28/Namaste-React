const gps = React.createElement("div", { id: "grandparents" }, [
  React.createElement("div", { id: "parent1" }, [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", "Happy Birthday Pranjal"),
      React.createElement("h2", "Happy Birthday Pranjal"),
      React.createElement("h3", "Happy Birthday Pranjal"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", "Happy Birthday PRASUK"),
      React.createElement("h2", "Happy Birthday PRASUK"),
      React.createElement("h3", "Happy Birthday PRASUK"),
    ]),
  ]),
  React.createElement("div", { id: "parent2" }, [
    React.createElement("div", { id: "child3" }, [
      React.createElement("h1", "Happy Birthday Rythm"),
      React.createElement("h2", "Happy Birthday Rythm"),
      React.createElement("h3", "Happy Birthday Rythm"),
    ]),
    React.createElement("div", { id: "child4" }, [
      React.createElement("h1", "Happy Birthday SHRESTH"),
      React.createElement("h2", "Happy Birthday SHRESTH"),
      React.createElement("h3", "Happy Birthday SHRESTH"),
    ]),
  ]),
]);

/*
const parent = React.createElement("div", { id: "parent" }, 
    [
        React.createElement("div", { id: "child1" }, 
        [
            React.createElement("h1", {}, "Heading 1"),
            React.createElement("h2", {}, "Heading 2"),
        ]),
        React.createElement("div", { id: "child1" }, 
        [
            React.createElement("h1", {}, "Heading 1"),
            React.createElement("h2", {}, "Heading 2"),
        ]),
    ]
);

*/

console.log(gps);
/*
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(heading); //js object or React element
*/
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
