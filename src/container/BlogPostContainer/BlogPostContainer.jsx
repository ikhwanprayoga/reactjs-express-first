import React, { Fragment } from 'react';
import './BlogPostContainer.css'
import BlogPostComponent from '../../component/BlogPost/BlogPost';
// import StoreForm from '../../component/BlogPost/StoreForm';

const axios = require('axios');

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            formBlogPost : {
                id:1 ,
                userId: 1,
                title: '',
                body: ''
            },
            isUpdate : false
        }
    }

    getDataApi = () => {
        axios.get('http://localhost:3004/data/?_sort=id&_order=desc').then((res) => {
            // console.log(res.data)
            this.setState({
                post: res.data
            })
        })
    }

    postDataApi = () => {
        axios.post('http://localhost:3004/data', this.state.formBlogPost)
            .then((result) => {
                console.log(result)
                this.getDataApi()
            }).catch((err) => {
                
            });
    }

    putDataApi = () => {
        axios.put('http://localhost:3004/data/'+this.state.formBlogPost.id, this.state.formBlogPost)
            .then((result) => {
                console.log(result)
                this.getDataApi()
                this.setState({
                    isUpdate: false,
                    formBlogPost : {
                        id:1 ,
                        userId: 1,
                        title: '',
                        body: ''
                    },
                })
            }).catch((err) => {
                
            });
    }

    handleUpdate = (data) => {
        // console.log(data)
        this.setState({
            formBlogPost: data,
            isUpdate : true
        })
    }

    handleRemove = (id) => {
        // console.log('remove ', id)
        axios.delete('http://localhost:3004/data/'+id).then((res)=>{
            console.log(res)
            this.getDataApi()
        })
    }

    handleSubmit = () => {
        // console.log(this.state.formBlogPost)
        if (this.state.isUpdate === true) {
            this.putDataApi()
        } else {
            this.postDataApi()
        }
    }

    handleDetailPost = (id) => {
        // console.log(id)
        this.props.history.push(`/blog-post/detail/${id}`)
    }

    handleFormChange = (event) => {
        let time = new Date().getTime();

        let formBlogPostNew = {...this.state.formBlogPost}
        if (this.state.isUpdate === false) {
            formBlogPostNew["id"] = time
        }
        formBlogPostNew[event.target.name] = event.target.value
        
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    componentDidMount () {
        this.getDataApi()
    }

    render() { 
        return (
            <Fragment>
                <div className="container">
                    <p className="section-title">Blog Post</p>
                    <div className="form-add-post">
                        <label htmlFor="">Title</label>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="add a title" 
                            value={this.state.formBlogPost.title}
                            onChange={this.handleFormChange}
                        />
                        <label htmlFor="">Body</label>
                        <textarea 
                            name="body" 
                            id="" 
                            cols="30" 
                            rows="5" 
                            placeholder="add some body" 
                            value={this.state.formBlogPost.body}
                            onChange={this.handleFormChange}
                        ></textarea>
                        <button className="btn btn-submit" onClick={this.handleSubmit}>Save</button>
                    </div>
                    {
                        this.state.post.map( (dataPost) => {
                            return <BlogPostComponent key={dataPost.id} data={dataPost} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetailPost}/>
                        })
                    }
                </div>
            </Fragment>
        );
    }
}
 
export default BlogPost;