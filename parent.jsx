import {Component} from "react";
import Child from "./child";

let name="developed by Tanvee"
class Parent extends Component{
    
    render(){
        return ( <div>
            <h1>Hello from Parent Component</h1>
            <Child me={name}/>

        </div> );
    }
}

 
export default Parent;