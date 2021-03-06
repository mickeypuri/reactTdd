import React, {Component} from 'react';
import Title from "../title/title";
import Preferences from "../preferences/preferences";
import Sorter from "../sorter/sorter";
import Hotels from "../hotels/hotels";

const App = () => (
  <div className="app-container">
    <Title/>
    <Sorter/>
    <Preferences/>
    <Hotels/>
  </div>
);

export default App;
