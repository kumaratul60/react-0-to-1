
# Chapter 03 - Laying the Foundation

## Q: What is `JSX`?
A: JSX stands for JavaScript XML.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
* JSX ==>  React.createElement => Object => HTML(DOM)
* JSX makes it easier to write and add HTML in React.
* JSX converts HTML tags into react elements.
* JSx is html like syntax but not a html

### Example 1 using JSX:
```
const myElement = <h1>JSX beast</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```
### Example 2 Without JSX:
```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```


## Q: Superpowers of `JSX`.
A. JSX is easy to maintain and debug.

#  JSX features:
 * Readability
 * Batter developer experience
 * Syntactical sugar
 * Less code
 * maintainability
 * No repetition
 * JSX prevents XSS(cross-site scripting) attacks, it sensitizes the code.

``` 
jsx expression => (<h1 id="title" key="h2">Namaste Hello</h1>)
```

### Example
```
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}
```
## Q: What is React element ?
React element is a normal variable which has some jsx assigned to it.  it is an object at the end.

### Example
```
const heading3 = (
    <h1 id="title" key="h2">
        Namaste Hello
    </h1>
);
```

## Q: Do you know `Composing Components`?
Yes, to use react component inside react component is know as `Component composition` or `Composing Components`.

### Example

```
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

const root = ReactDOM.createRoot(document.querySelector("#root"));

 root.render(<HeadingComponent1 />);
//root.render(HeadingComponent1());

```


## Q: Role of `type` attribute in script tag? What options can I use there?
A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.
### `type` attribute can be of the following types:
- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
    ### Syntax
    ```
    <script type="text/javascript"></script>
    ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. 
The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```