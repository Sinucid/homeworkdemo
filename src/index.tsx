import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from '@apollo/client';
import createClient from './api';
import App from "./App";
import './styles.scss';

const client = createClient();

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
