import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: 0
        }
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.props.onChangeCounterCardProduct(1, "plus")
        })
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.props.onChangeCounterCardProduct(1, "minus")
            })
        }
    }

    render() { 
        return (
            <div className="counter">
                <button className="minus" onClick={ this.handleMinus }>-</button>
                <input type="text" value={ this.state.order }/>
                <button className="plus" onClick={ this.handlePlus } >+</button>
            </div>
        );
    }
}
 
export default Counter;