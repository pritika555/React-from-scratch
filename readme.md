# Job of Parcel

-Makes development build of our project
-Hosts the development onto the servere
-HMR (Hot Module Replacement)
-Faster build(Caching)
-Image optimization
-Minification of File
-Bundling 
-Compressing

# JSX 
    
-html like syntax

# JOb of Parcel

-Transpiling of jsx code
-Parcel does this transpiling job with the help of external package itself which is Babel.

# Babel
-Babel is a JavaScript compiler commonly used in web development. It enables developers to write modern JavaScript code using the latest syntax and features and then converts (or "transpiles") that code into an older version of JavaScript for compatibility with older browsers or environments that do not support the latest standards.

# Key Features of Babel:
Transpilation: Converts ES6/ESNext code (modern JavaScript) into ES5 (older JavaScript) for broader browser compatibility.
Plugins and Presets:
Plugins: Customize Babel's behavior, such as transforming specific syntax.
Presets: Collections of plugins for common configurations, like @babel/preset-env.
Polyfilling: Babel can integrate with libraries like core-js to add missing features to environments by including "polyfills."
Customizable: Developers can configure Babel via a .babelrc file or babel.config.js file to suit their project’s needs.


map()
function()
 
const child = React.createElement(h1' , { id: 'heading'}, 'hello'); yesari garey ni bho
OR 
const child = <div>we can do this too.</div>; ani render garne.

# React element
const child = (
    <div id='container'>
        <h1> KONICHIWA </h1>
        <h2> hello</h2>
    </div>
);

# React component (button euta component ho, nav bar euta component ho)

1. Functional component.
    Normal function ho 
- Functional component is a normal Javascript

2. Class based component.


component bhitra ko component lai component composition bhaninxa.


# how to create a react app (template)
- Using command:
npx create-react-app  my-app-name