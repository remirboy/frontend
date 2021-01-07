import React, { Component } from "react";
import './index.css'

class Counter extends Component{
    state ={
        count:0
    }
  
    dec = () => this.setState(({count})=>({count:count-1}));
    inc = () => this.setState(({count})=>({count:count+1}));
  
    render(){
        const {count}= this.state
        return(
            <div className="counter">
                <button className="counter_btn" onClick={this.dec}>-</button>
                <div className="counter_count">{count}</div>
                <button className="counter_btn" onClick={this.inc}>+</button>
            </div>
        )
    }
  
  }

export { Counter}