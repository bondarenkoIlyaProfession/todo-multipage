import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './scss/styles.scss';

import { App } from './App';

import { Tasks, Today, Personal, Work, GroceryStore, Error } from './pages';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route exact path="/" element={<Tasks />} />
          <Route path="/today" element={<Today />} />
          <Route path="/additional/personal" element={<Personal />} />
          <Route path="/additional/work" element={<Work />} />
          <Route path="/additional/grocery-store" element={<GroceryStore />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
