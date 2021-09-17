import React from 'react';
import { StaticRouter } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import Routing from '../src/Routing.jsx';
import template from './template';

export default function render(req, res) {
    const body = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={{}}>
            <Routing />
        </StaticRouter>
    );

    const page = template(body);
    res.send(page);
}
