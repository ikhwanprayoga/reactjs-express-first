import React from 'react';
import Axios from 'axios';

class DetailBlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post :{
                title: '',
                body: ''
            }
        }
    }

    componentDidMount () {
        let id = this.props.match.params.id

        Axios.get('http://localhost:3004/data/'+id).then((res) => {
            // console.log(res)
            this.setState({
                post : {
                    title : res.data.title,
                    body: res.data.title
                }
            })
        })
        // console.log(this.props.match.params.id)
    }

    render() { 
        return (
            <div>
                <p>Title :{this.state.post.title}</p>
                <p>Body :{this.state.post.body}</p>
            </div>
        );
    }
}
 
export default DetailBlogPost;