import React, { Component } from 'react';

class StoreForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <div className="form-add-post">
                <label htmlFor="">Title</label>
                <input type="text" name="title" placeholder="add a title"/>
                <label htmlFor="">Body</label>
                <textarea name="body" id="" cols="30" rows="5" placeholder="add some body"></textarea>
                <button className="btn btn-submit">Save</button>
            </div>
        );
    }
}
 
export default StoreForm;