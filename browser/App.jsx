import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../src/styles.css';
import Routing from '../src/Routing.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routing />
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
