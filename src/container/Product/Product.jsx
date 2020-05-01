import React, {Component, Fragment} from 'react';
import './Product.css';
import CardProduct from '../CardProduct/CardProduct'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allOrder: 0
        }
    }

    handleChangeCounter = (newValue, operasi) => {
        if (operasi == "plus") {
            this.setState({
                allOrder : this.state.allOrder + newValue
            })
        } else {
            this.setState({
                allOrder : this.state.allOrder - newValue
            })
        }
    }

    render() { 
        return (
            <Fragment>
            <div className="header">
                <div className="logo">
                    <img src="https://etanee.id/homescreen/android-icon-144x144.png" alt=""/>
                </div>
                <div className="troley">
                    <img src="https://etanee.id/static/media/wallet.1aeaedf1.svg" alt=""/>
                    <div className="count">{this.state.allOrder}</div>
                </div>
            </div>

            <CardProduct onChangeCounter = { (value, operasi) => this.handleChangeCounter(value, operasi) } />
            <CardProduct onChangeCounter = { (value, operasi) => this.handleChangeCounter(value, operasi) } />
            <CardProduct onChangeCounter = { (value, operasi) => this.handleChangeCounter(value, operasi) } />
            <CardProduct onChangeCounter = { (value, operasi) => this.handleChangeCounter(value, operasi) } />
            <CardProduct onChangeCounter = { (value, operasi) => this.handleChangeCounter(value, operasi) } />
            </Fragment>
        );
    }
}
 
export default Product;