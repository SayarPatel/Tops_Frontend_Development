import React, { Component } from 'react'
import './counter.css';

export default class Counter extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div>
        <div className='count'>
        <p><strong>Current count is:</strong> {this.state.count}</p>
        <button onClick={this.increment}>Count</button>
        </div>
      </div>
    )
  }
}
