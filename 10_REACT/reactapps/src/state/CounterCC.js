import React, {Component} from "react";

export default class CounterCC extends Component {

    constructor() {
        super()
        this.state = {
            counter: 0
            // this.increment = this.increment.bind(this)
            // bind 'this' method with increment and store in the this.increment object
        }
    }
    increment() {
        console.log(this)
        this.setState({counter: this.state.counter + 1})
    }

    render() {
        return (
            <>
                <h2>Counter</h2>
                <h3>{this.state.counter}</h3>
                <button onClick={this.increment.bind(this)} className="btn btn-primary">Increment</button>
            </>
        )
    }
}