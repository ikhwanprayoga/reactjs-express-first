import React, {Fragment} from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col, Card, Table } from 'react-bootstrap';

class MahasiswaDetail extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            baseHost: 'http://localhost:8080',
            mahasiswaData: {
                nim: '',
                nama: '',
                alamat: ''
            }
        }
    }
    handleGoBack =  () => {
        // return <Link to="/mahasiswa"></Link>
        this.props.history.push('/mahasiswa')
    }

    componentDidMount () {
        console.log(this.props)
        let id = this.props.match.params.id
        Axios.get(this.state.baseHost+'/api/mahasiswa/'+id).then((res) => {
            // console.log(res)
            this.setState({
                mahasiswaData: {
                    nim: res.data.nim,
                    nama: res.data.nama,
                    alamat: res.data.alamat
                }
            })
        })
    }

    render() { 
        return (
            <Fragment>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col><h2>mahasiswa detail</h2></Col>
                    </Row>
                    <Row>
                        <Col>
                        <Card>
                            <Card.Body>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Nama</Form.Label>
                                        <Form.Control type="text" value={this.state.mahasiswaData.nama} disabled/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Nama</Form.Label>
                                        <Form.Control type="text" value={this.state.mahasiswaData.nim} disabled/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Alamat</Form.Label>
                                        <Form.Control type="text" value={this.state.mahasiswaData.alamat} disabled/>
                                    </Form.Group>

                                    <Button variant="primary" type="submit" onClick={this.handleGoBack}>
                                        Go Back
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
 
export default MahasiswaDetail;