import React from 'react';

class BlogPostComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="post">
                <div className="img-thumb">
                    <img src="https://placeimg.com/200/150/tech" alt="dummy"/>
                </div>
                <div className="content">
                    <p className="title" onClick={ () => {this.props.goDetail(this.props.data.id)}}>{this.props.data.title}</p>
                    <p className="desc">{this.props.data.body}</p>
                    <button className="btn btn-update" onClick={ () => { this.props.update(this.props.data) } }>Update</button>
                    <button className="btn btn-remove" onClick={ () => { this.props.remove(this.props.data.id) } }>Remove</button>
                </div>
            </div>
        );
    }
}
 
export default BlogPostComponent;