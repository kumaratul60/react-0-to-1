/*
Parcel do:

* Created a server (parcel-cache)
* HMR => Hot Module Replacement
* File Watcher algorithm - C++  ==> Parcel watches every file in your project root (including node_modules)
* Bundling
* MINIFY
* Cleaning our Code
* Dev and Production Build
* Super Fast build algorithm
* Image optimization
* Caching while development
* Compatible with older versions of browser
* HTTPS on dev env -> npx parcel index.html --https
* parcel manage port number also
* Consistent Hashing Algorithm todo all bundling 
* Parcel is a Zero config bundler
* Tree-shaking => Removing un-wanted code

* Transitive Dependencies:  We've package manager which handles and take care of Transitive Dependencies

POWER -> PM -> Home Minister -> CMs -> cabinet minister -> minister -> Parliament  ==> PUBLIC
Apps -> React -> Parcel/Webpack (Bundler) -> node manager (node_modules) -> dependencies -> devDependencies ==> Transitive- Dependencies

-> ** above all thing done in .parcel-cache

do not put package-lock.json files in gitignore
Always put parcel-cache & node_module in gitignore

How to know which file I put in gitignore?

Anything which is auto generated on server in your project put in gitignore except package-lock.json


to run parcel -> npx parcel entry-file(index.js/App.js in my case entry file is index.html)
to build => npx parcel build index.html (for this command we don't need "main": "App.js" in package.json file also no need dist folder, this command will automatically create minify build for out apps)

// https://browserslist.dev
*/

import { createElement } from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement('tag', 'object','what you need to put inside the tag')

const heading1 = createElement(
    "h1",
    {
        id: "heading1",
        key: "h1",
    },

    "hello Day2"
);
const heading = createElement(
    "div",
    {
        id: "heading",
        key: "h2",
    },

    [
        createElement(
            "h2",
            {
                id: "heading",
                key: "h3",
            },

            "hello "
        ),
        createElement(
            "h2",
            {
                id: "heading",
                key: "h4",
            },

            "hello "
        ),
        createElement(
            "h2",
            {
                id: "heading1",
                key: "h2",
            },

            "hello "
        ),
    ]
);

// React.createElement => Object => HTML(DOM)

console.log(heading);

// JSX ==>  JSX converted the code with the help of babel into React.createElement => Object => HTML(DOM)
// * JSX ==>  React.createElement => Object => HTML(DOM)
//  JSx is html like syntax but not a html

/* JSX features:
 * Readability
 * Batter developer experience
 * Syntactical sugar
 * Less code
 * maintainability
 * No repetition
 * JSX prevents XSS(cross-site scripting) attacks, it sensitizes the code.
 
jsx expression => 
(<h1 id="title" key="h2">Namaste Hello</h1>)


*/
// React element => React element is a normal variable which has some jsx assigned to it.  it is an object at the end.
const heading3 = (
    <h1 id="title" key="h2">
        Namaste Hello
    </h1>
);

// React Components
// Functional Components -> New way of writing code
// Class Based Components -> Old way of writing code

// Name of component starts with capital letter => it is a best practice to write a component but not mandatory

// Functional Components => It is a normal javascript function that return some peace of jsx or a react element or composition of a react element or a component itself.

const Title = () => {
    return (
        <h2 id="title" key="h3">
            Functional Components
        </h2>
    );
};

const HeadingComponent1 = () => {
    return (
        <div>
            <h1>hello1</h1>
            {/* to use react element inside react component */ }
            { heading3 }

            {/* Component composition or Composing Components ==> to use react component inside react component is know as Component composition or Composing Components  */ }
            {/*  recommended way to call a Component */ }
            <Title />

            {/* similar to component because react component at the end it is a js function this way is not recommended to call a component */ }
            { Title() }

            <h2>hello2</h2>
        </div>
    );
};

const HeadingComponent2 = () => (
    <div>
        <h1>hello1</h1>
        <h2>hello2</h2>
    </div>
);

const HeadingComponent3 = function () {
    return (
        <div>
            <h1>hello1</h1>
            <h2>hello2</h2>
        </div>
    );
};

const root = ReactDOM.createRoot(document.querySelector("#root")); // work

// passing a react element inside the root

// render react element
// root.render(heading3);

// render react components
// root.render(<HeadingComponent1 />);
root.render(HeadingComponent1());

