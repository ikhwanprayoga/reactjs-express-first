import React from 'react';

class CardTodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="post">
                <div className="img-thumb">
                    <img src="https://placeimg.com/200/150/tech" alt=""/>
                </div>
                <div className="content">
                    <p className="title">{this.props.data.title}</p>
                    <p className="desc">{this.props.data.description}</p>
                    <button className="btn btn-update" onClick={ () => {this.props.update(this.props.data)} }>Update</button>
                    <button className="btn btn-remove" onClick={ () => {this.props.delete(this.props.data.id)} }>Remove</button>
                </div>
            </div>
        );
    }
}
 
export default CardTodoList;