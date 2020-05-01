import React, {Component} from 'react';
import '../Product/Product.css';

class CardProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: 0
        }
    }

    // handleChangeCounter = (value) => {
    //     this.props.onChangeCounter(value)
    // }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.props.onChangeCounter(1, "plus")
        })
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.props.onChangeCounter(1, "minus")
            })
        }
    }

    render() { 
        return (
            <div className="card">
                <div className="imp-thumb-prod">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/sayap_tengah.jpg" alt=""/>
                </div>
                <p className="product-title">Daging ayam</p>
                <p className="product-price">Rp. 4.000</p>
                <div className="counter">
                    <button className="minus" onClick={ this.handleMinus }>-</button>
                    <input type="text" value={ this.state.order }/>
                    <button className="plus" onClick={ this.handlePlus } >+</button>
                </div>
            </div>
        );
    }
}
 
export default CardProduct;