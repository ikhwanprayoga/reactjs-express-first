import React, {Component} from 'react';
import '../../container/Product/Product.css';
import Counter from './Counter';

class CardProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    // handleChangeCounter = (value) => {
    //     this.props.onChangeCounter(value)
    // }

    render() { 
        return (
            <div className="card-product">
                <div className="imp-thumb-prod">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/sayap_tengah.jpg" alt=""/>
                </div>
                <p className="product-title">Daging ayam</p>
                <p className="product-price">Rp. 4.000</p>
                <Counter onChangeCounterCardProduct={(value, operasi)=>{this.props.onChangeCounter(value, operasi)}} />
            </div>
        );
    }
}
 
export default CardProduct;