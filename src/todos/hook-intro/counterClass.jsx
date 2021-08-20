import React, { Component } from 'react';
class CounterClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
        this.handleCount = this.handleCount.bind(this)
    }
    handleCount(){
        this.setState({count : this.state.count + 1})
    }
    render() { 
        return (  <React.Fragment>
            <h1>{this.state.count}</h1>
            <button onClick = {this.handleCount}>Kill 1</button>
        </React.Fragment>);
    }
}
 
export default CounterClass;