import React, {component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {
    Card, CardImg, Spinner, CardText, CardBody,
    CardTitle, CardSubtitle,ListGroup, Button
  } from 'reactstrap';

class PhoneDetails extends React.Component {

    state = {
        phone: null
    }

    getPhoneData =  () => {
        const phoneName = this.props.match.params.id;
        axios.get(`/api/phones/${phoneName}`) 
        .then(response => {
            console.log(response.data);
            this.setState ({
               phone: response.data 
            })
        })
        .catch(err => console.log(err)); 
    }

    deletePhone = () => {
        axios.
            delete(`/api/phones/${this.state.phone._id}`)
            .then(() => {
                this.props.history.push("/phones");
            })
            .catch ((err) => {
                console.log(err);
            })
    };

    componentDidMount(){
       this.getPhoneData();
    }

    render () {
    
    if(!this.state.phone) return <Spinner animation="border" role="status"> <span className="visually-hidden">Loading...</span> </Spinner>
    
    return(

        <div className="phoneDetails" >

            <Card className="phoneCard" style={{ width: '32rem' }}>

                <CardBody>
                    <img
                        className="card-img-top img-responsive"
                        src={this.state.phone.imageFileName}
                        alt="Card image cap">
                    </img>
                </CardBody>

                <CardBody >
                    <CardTitle className="cardTitle text-white mb-3 p-2 ">{this.state.phone.name}</CardTitle>
                    <CardText>
                    {this.state.phone.description}
                    </CardText>
                </CardBody>
                
                <ListGroup className="list-group-flush">
                    <h1>{this.state.phone.manufacturer}</h1>
                    <br/>
                    <h4>Color: {this.state.phone.color}</h4>
                    <h4>Price: {this.state.phone.price}</h4>
                    <h4>Screen: {this.state.phone.screen}</h4>
                    <h4>Processor: {this.state.phone.processor}</h4>
                    <h4>Ram: {this.state.phone.ram}</h4>
                </ListGroup>
                <CardBody>
                    <Link to={'/phone'}>
                        <button
                        className="buttonPhone btn btn-block my-4"
                        >
                        Back to phones
                        </button>
                    </Link>
                    <button 
                        className="buttonPhone btn btn-block my-4"
                        onClick= {this.deletePhone} >
                        Delete Phone
                    </button>
                </CardBody>
            </Card>
        
        </div>
    )

    }

}

export default PhoneDetails; 




