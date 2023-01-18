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


import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement('tag', 'object','what you need to put inside the tag')

const heading1 = React.createElement(
    "h1",
    { id: "heading1" },

    "hello Day2"
);
const heading2 = React.createElement(
    "h2",
    { id: "heading2" },

    "hello start-Day2 with parcel"
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