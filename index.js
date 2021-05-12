import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from "react";
import Parent from './components/parent';
import Child from './components/child';


class MainApp extends Component{
  render(){
    return <div>
      <h1>Main Application</h1>
      <Parent/>
      <Child/>
    </div>
  }
}
ReactDOM.render(<MainApp/>,
  document.getElementById('root')
);


