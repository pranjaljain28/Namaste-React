import React from "react";

import ReactDOM from "react-dom/client"; 


const gps = React.createElement("div", { id: "grandparents" }, [ 
  React.createElement("div", { id: "parent1", key: "parent1" }, [
    React.createElement("div", { id: "child1", key: "child1" }, [
      React.createElement("h1", { key: "h1-pranjal" }, "Happy Birthday Pranjal"),
      React.createElement("h2", { key: "h2-pranjal" }, "Happy Birthday Pranjal"),
      React.createElement("h3", { key: "h3-pranjal" }, "Happy Birthday Pranjal"),
    ]),
    React.createElement("div", { id: "child2", key: "child2" }, [
      React.createElement("h1", { key: "h1-prasuk" }, "Happy Birthday PRASUK"),
      React.createElement("h2", { key: "h2-prasuk" }, "Happy Birthday PRASUK"),
      React.createElement("h3", { key: "h3-prasuk" }, "Happy Birthday PRASUK"),
    ]),
  ]),
  React.createElement("div", { id: "parent2", key: "parent2" }, [
    React.createElement("div", { id: "child3", key: "child3" }, [
      React.createElement("h1", { key: "h1-rythm" }, "Happy Birthday Rythm"),
      React.createElement("h2", { key: "h2-rythm" }, "Happy Birthday Rythm"),
      React.createElement("h3", { key: "h3-rythm" }, "Happy Birthday Rythm"),
    ]),
    React.createElement("div", { id: "child4", key: "child4" }, [
      React.createElement("h1", { key: "h1-shresth" }, "Happy Birthday SHRESTH"),
      React.createElement("h2", { key: "h2-shresth" }, "Happy Birthday SHRESTH"),
      React.createElement("h3", { key: "h3-shresth" }, "Happy Birthday SHRESTH"),
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

root.render(gps);
