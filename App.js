const child = React.createElement(
    'div',
    { id : 'child'},
    [React.createElement('h1' , { id: 'heading'}, 'hello'), 
    React.createElement('h2' , { id: 'heading2'}, 'world')]

);

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(child);
 