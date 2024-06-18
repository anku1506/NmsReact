const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag")
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
    
  ]),
]);

// if we want to create another h1 or h2 inside same levael we have to use Array of children[], explain below.
// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//       "div",
//       { id: "child" },
//      [React.createElement("h1", {}, "I am a h1 tag"),React.createElement("h2", {}, "I am a h2 tag")]  // inside array 
//     )
//   );

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from react!"
// );
console.log( parent);
console.log(typeof (parent));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
