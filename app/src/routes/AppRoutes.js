import React from 'react';
import {
  BrowserRouter as Router,
    Link, 
    Route, 
    Switch } from "react-router-dom";
import { DashboardRouter } from './DashboardRouter';
  
export const AppRouter = () => {
    return (
      <Router>
        <div className="container">  
          <Switch>
            <Route path="/" component={DashboardRouter}></Route>
          </Switch>
        </div>
      </Router>
    )
}
