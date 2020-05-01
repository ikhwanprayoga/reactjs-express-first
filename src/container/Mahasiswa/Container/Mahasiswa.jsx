import React, { Component, Fragment } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col, Card, Table } from 'react-bootstrap';

class Mahasiswa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            baseHost: 'http://localhost:8080',
            dataMahasiswa : [],
            mahasiswaForm : {
                id: '',
                nim: '',
                nama: '',
                alamat: ''
            },
            isUpdate : false
        }
    }

    setDefaultFormInput = () => {
        this.setState({
            mahasiswaForm : {
                id: '',
                nim: '',
                nama: '',
                alamat: ''
            },
            isUpdate: false
        })
    }

    //get data from api
    getDataApi = () => {
        axios.get(this.state.baseHost+'/api/mahasiswa/')
            .then((result) => {
                // console.log(result)
                this.setState({
                    dataMahasiswa: result.data
                })
            }).catch((err) => {
                
            });
    }

    //store data to api
    storeDataToApi = () => {
        // console.log('store data')
        axios.post(this.state.baseHost+'/api/mahasiswa/store/', this.state.mahasiswaForm)
            .then((result) => {
                console.log(result)
                this.getDataApi()
                this.setDefaultFormInput()
            }).catch((err) => {
                alert('form wajib di isi')
            });
    }

    //update data to api
    updateDataToApi = () => {
        console.log('update data')
        axios.put(this.state.baseHost+'/api/mahasiswa/update/'+this.state.mahasiswaForm.id, this.state.mahasiswaForm)
            .then((result) => {
                console.log(result)
                this.getDataApi()
                this.setDefaultFormInput()
            }).catch((err) => {
                
            });
    }

    //remove data api
    removeDataApi = (data) => {
        axios.delete(this.state.baseHost+'/api/mahasiswa/delete/'+data.id)
            .then((result) => {
                console.log(result)
                this.getDataApi()
            }).catch((err) => {
                
            });
    }

    handleChangeForm = (event) => {
        let mahasiswaFormNew = { ...this.state.mahasiswaForm }
        mahasiswaFormNew[event.target.name] = event.target.value

        this.setState({
            mahasiswaForm: mahasiswaFormNew
        })
    }

    //handle button update
    handleUpdate = (data) => {
        this.setState({
            mahasiswaForm: data,
            isUpdate: true
        })
    }

    //handle button submit
    handleSubmit = () => {
        if (!this.state.isUpdate) {
            this.storeDataToApi()
        } else {
            this.updateDataToApi()
        }
    }

    //handle button remove
    handleRemove = (data) => {
        // console.log('remove')
        const re = window.confirm('are you sure?')

        if (re == true) {
            console.log('hapus')
            this.removeDataApi(data)
        } else {
            console.log('no hapus')
        }
    }

    componentDidMount () {
        this.getDataApi()
    }

    render() { 
        return (
            <Fragment>
                <p>mahasiswa</p><hr/>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Nama</Form.Label>
                                            <Form.Control type="text" name="nama" placeholder="Enter name" value={this.state.mahasiswaForm.nama} onChange={this.handleChangeForm}/>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>NIM</Form.Label>
                                            <Form.Control type="text" name="nim" placeholder="Enter NIM" value={this.state.mahasiswaForm.nim} onChange={this.handleChangeForm} />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Alamat</Form.Label>
                                            <Form.Control as="textarea" rows="3" name="alamat" placeholder="Enter Alamat" value={this.state.mahasiswaForm.alamat} onChange={this.handleChangeForm} />
                                        </Form.Group>

                                        <Button variant="primary" onClick={this.handleSubmit}>
                                            Save
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginTop:22}}>
                        <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>NO</th>
                                    <th>NIM</th>
                                    <th>Nama</th>
                                    <th>Alamat</th>
                                    <th>#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.dataMahasiswa.map((data, i) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>{i + 1}</td>
                                                <td>{data.nim}</td>
                                                <td>{data.nama}</td>
                                                <td>{data.alamat}</td>
                                                <td>
                                                    <Button variant="warning" size="sm" style={{marginRight:5}} onClick={() => {this.handleUpdate(data)}}>Update</Button>
                                                    <Button variant="danger" size="sm" style={{marginRight:5}} onClick={() => {this.handleRemove(data)}}>Remove</Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                
                            </tbody>
                        </Table>
                        </Col>
                    </Row>
                </Container>
                
            </Fragment>
        );
    }
}
 
export default Mahasiswa;