import React, { Component, Fragment } from 'react';
import './TodoList.css'
import CardTodoList from '../Component/CardTodoList';
import axios from 'axios'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTodoList : [],
            formPost : {
                id: '',
                title: '',
                description: ''
            },
            isUpdate: false
        }
    }

    setFormToDefault = () => {
        this.setState({
            formPost : {
                id: '',
                title: '',
                description: ''
            },
            isUpdate: false
        })
    }

    //get data from api
    getDataApi = () => {
        axios.get('http://localhost:3004/todoList/?_sort=id&_order=desc')
            .then((result) => {
                // console.log(result)
                this.setState({
                    dataTodoList: result.data
                })
            }).catch((err) => {
                console.log(err)
            });
    }

    //store data to api
    storeDataToApi = () => {
        axios.post('http://localhost:3004/todoList', this.state.formPost)
            .then((result) => {
                console.log(result)
                this.getDataApi()
                this.setFormToDefault()
            }).catch((err) => {
                console.log(err)
            });
    }

    //update data api
    updataDataApi = () => {
        console.log('update')
        axios.put('http://localhost:3004/todoList/'+this.state.formPost.id, this.state.formPost)
            .then((result) => {
                console.log(result)
                this.getDataApi()
                this.setFormToDefault()
            }).catch((err) => {
                
            });
    }

    //delete data api
    deleteDataApi = (id) => {
        // console.log('delte', id)
        axios.delete('http://localhost:3004/todoList/'+id)
            .then((result) => {
                console.log(result)
                this.getDataApi()
            }).catch((err) => {
                
            });
    }

    //hande on form change
    handleFormChange = (event) => {
        // console.log(event.target.value)
        //copy index dari object state formpost ke variabel dataFormNew
        let dataFormNew = {...this.state.formPost}
        dataFormNew[event.target.name] = event.target.value
        
        //set state formPost dari dataFormNew
        this.setState({
            formPost: dataFormNew
        })
    }

    //fungsi untuk meng handle ketika tombol submit di tekan
    handleSubmit = () => {
        // console.log('handle submit')
        if (this.state.isUpdate == true) {
            this.updataDataApi()
        } else {
            this.storeDataToApi()
        }
    }

    //handle form updata, handle data return dari tombol update
    handleUpdate = (data) => {
        this.setState({
            formPost: data,
            isUpdate: true
        })
    }

    //mount data
    componentDidMount () {
        this.getDataApi()
    }

    render() { 
        return (
            <Fragment>
                <div className="">
                    <p className="section-title">Todo List</p>
                    <hr/>
                    <div className="form-add-post">
                        <label htmlFor="">Title Todo List</label>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="add a title"
                            value={this.state.formPost.title}
                            onChange={ this.handleFormChange }
                        />
                        <label htmlFor="">Description Todo List</label>
                        <textarea 
                            name="description" 
                            rows="5"
                            placeholder="add a description"
                            value={this.state.formPost.description}
                            onChange={ this.handleFormChange }
                        ></textarea>
                        <button className="btn btn-submit" onClick={this.handleSubmit}>Save</button>
                    </div>
                    {
                        this.state.dataTodoList.map((data) => {
                            return <CardTodoList key={data.id} data={data} update={this.handleUpdate} delete={this.deleteDataApi}/>
                        })
                    }
                </div>
            </Fragment>
        );
    }
}
 
export default TodoList;