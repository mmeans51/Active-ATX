import './App.css';
import React, { useState } from 'react';
// Apollo import
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

// retrieve token from localStorage and include it with request to the API - every time make a GraphQL request
import { setContext } from '@apollo/client/link/context';
// setContext we can create a middleware function that will retrieve the token for us and combine it with existing httpLink

// react-router-dom BrowserRouter(renamed to Router) and Route - components that the React Router library provides
// Switch would reroute it to display error or page not found when route is non existent
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import FreeAgent from './pages/FreeAgent';
import Leagues from './pages/Leagues';
import Tournament from './pages/Tournament';
import Schedule from './pages/Schedule';
import Rules from './pages/Rules';
import OpenPlay from './pages/OpenPlay';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Login from './pages/Login';

// first establish a new link to the GraphQL server at its /graphql endpoint with createHttpLink()
const httpLink = createHttpLink({
  uri: '/graphql',
});

// we use the setContext() function to retrieve the token from localStorage and set the HTTP request headers of every request to include the token
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// when a user signs up or logs in and receives an access token in return, we store it in localStorage. With this token, we can decode it to retrieve the logged-in user's nonsensitive data, check if the token is still valid, and use it to make requests to the server.
// Any time we make a request to the server, we use the code we just implemented a few moments ago to automatically set the HTTP request headers with our token
// This way, our server can receive the request, check the token's validity, and allow us to continue our request if it is

// After we create the link, we use the ApolloClient() constructor to instantiate the Apollo Client instance and create the connection to the API endpoint
const client = new ApolloClient({
  // link: httpLink,
  link: authLink.concat(httpLink), // combine the authLink and httpLink objects so that every request retrieves the token and sets the request headers before making the request to the API
  //  also instantiate a new cache object using new InMemoryCache()
  cache: new InMemoryCache(),
});

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Leagues') {
      return <Leagues />;
    }
    if (currentPage === 'Tournament') {
      return <Tournament />;
    }
    if (currentPage === 'Schedule') {
      return <Schedule />;
    }
    if (currentPage === 'Rules') {
      return <Rules />;
    }
    if (currentPage === 'FreeAgent') {
      return <FreeAgent />;
    }
    if (currentPage === 'OpenPlay') {
      return <OpenPlay />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
    return <Signup />;
  };

  const handlePageChange = page => setCurrentPage(page);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* <Home /> */}
        {renderPage()}
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
