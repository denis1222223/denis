import express  from 'express';
import React    from 'react';
import ReactDom from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import getRoutes from './getRoutes';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import proxy from 'http-proxy-middleware';

const app = express();

app.use('/api', proxy({target: 'http://localhost:10702', changeOrigin: true}));

app.use((req, res) => {
    const store = configureStore();
    match({ routes: getRoutes(store.dispatch), location: req.url }, (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
            return res.redirect(301, redirectLocation.pathname + redirectLocation.search);
        }

        if (error) {
           return res.status(500).send(error.message);
        }

        if (!renderProps) {
            return res.status(404).send('Not found');
        }

        const componentHTML = ReactDom.renderToString(
            <Provider store={store}>
                <RouterContext {...renderProps} />
            </Provider>
        );

        return res.end(renderHTML(componentHTML));
    });
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

function renderHTML(componentHTML) {
    return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Sprints</title>
          <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>      
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
});