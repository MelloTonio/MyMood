import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';
import MoodThermometer from './components/MoodThermometer';



ReactDOM.render(

  <div className="GOD">
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MoodThermometer} exact />
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);

