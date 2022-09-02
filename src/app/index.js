import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { client } from '~apollo/client';
import ErrorBoundary from '~components/Error';
import AppContextProvider from '~contexts';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </BrowserRouter>
      </ApolloProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
