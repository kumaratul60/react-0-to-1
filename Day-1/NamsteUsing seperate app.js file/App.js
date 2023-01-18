
// const heading = React.createElement('tag', 'object','what you need to put inside the tag')

const heading1 = React.createElement(
    "h1",
    { id: "heading1" },

    "hello start10"
);
const heading2 = React.createElement(
    "h2",
    { id: "heading2" },

    "hello start2"
);

const containerDiv = React.createElement("div", { id: "container" }, [
    heading1,
    heading2,
]);

// const root = ReactDOM.createRoot(document.getElementById("root")); // work
const root = ReactDOM.createRoot(document.querySelector("#root")); // work

// const root = ReactDOM.createRoot(document.getElementsByClass("root")); // Not-work
// const root = ReactDOM.createRoot(document.querySelector("root")); // Not-work
// const root = ReactDOM.createRoot(document.querySelectorAll("#root")); // Not-work

// passing a react element inside the root

root.render(containerDiv);