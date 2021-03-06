import React from "react"

import ReactDOM from "react-dom"

import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://core-graphql.dev.waldo.photos/pizza",
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: "no-cors",
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.querySelector("#root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
