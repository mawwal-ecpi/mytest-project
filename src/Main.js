import React, { Component } from "react";
import { 
    Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Community from "./Community";
import Discussion from "./Discussion";
import Sale from "./Sale";
import craigslistImage from './Images/craigslist.png';
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1><img src= {craigslistImage} className= "logo-spin" alt= "logo" width= "50" height= "30"/>CraigsList</h1>
                <ul className="header">
                    <li><NavLink to="/">Community</NavLink></li>
                    <li><NavLink to="/discussion">Discussion Forums</NavLink></li>
                    <li><NavLink to="/sale">For Sale</NavLink></li>
                </ul>
                <div className="content">
                <Routes>
                    <Route path="/" Component={Community}/>
                    <Route path="/discussion" Component={Discussion}/>
                    <Route path="/sale" Component={Sale}/>
                </Routes>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;