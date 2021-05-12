import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from "react";
import Parent from './components/parent';
import Child from './components/child';

let name="developed by Tanvee"
class MainApp extends Component{
  render(){
    return <div>
      <h1>Main Application</h1>
      <Parent/>
      <Child me={name}/>
    </div>
  }
}
ReactDOM.render(<MainApp/>,
  document.getElementById('root')
);


