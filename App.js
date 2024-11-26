import React from 'react';
import ReactDOM from 'react-dom/client';

// const child = React.createElement(
//     'div',
//     { id : 'child'},
//     [React.createElement('h1' , { id: 'heading'}, 'hello'), 
//     React.createElement('h2' , { id: 'heading2'}, 'world')]

// );

// const child = <div>we can do this too.</div>; //html like syntax ho

const child = (
    <div id='container'>
        <h1> KONICHIWA </h1>
        <h2> hello</h2>
    </div>
);

const Homepage = () => {
    return (
       <div id='container'>
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
    );

};
const Navbar=()=>{
    return <nav>It is a navbar</nav>
};

const Main=()=>{
    return (
        <main>
            <p>This is main section.</p>
        </main>
    );
};

const Footer=()=>{
    return (
        <footer>
            <p>This is footer section.</p>
        </footer>
    )
}

 const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(child);
 root.render(<Homepage />);
 