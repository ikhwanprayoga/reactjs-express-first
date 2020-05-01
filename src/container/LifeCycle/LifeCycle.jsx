import React, { Component } from 'react';
import './LifeCycle.css'

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log("contructor")
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps")
        return null
    }

    componentDidMount () {
        console.log("componentDidMount")
        // setTimeout(()=>{
        //     this.setState({
        //         count:5
        //     })
        // }, 5000)
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.group("shouldcomponentUpdate")
        console.log("nextProps", nextProps)
        console.log("nextState", nextState)
        console.groupEnd()
        if (nextState.count >=4) {
            return false
        }
        return true
    }

    getSnapshotBeforeUpdate (nextProps, prevState) {
        console.log("getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate (nextProps, prevState) {
        console.log("componentDidUpdate")
    }

    componentWillUnmount () {
        console.log("componentWillUnmount")
    }

    changeMount = () => {
        
        this.setState({
            count: this.state.count + 1
        })
    
    }

    render() { 
        console.log('render')
        return (
            <button className="btn" onClick={this.changeMount}>Component Button { this.state.count }</button>
        );
    }
}
 
export default LifeCycle;