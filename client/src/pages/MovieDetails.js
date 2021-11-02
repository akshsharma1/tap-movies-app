import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Row, Col, Badge } from "react-bootstrap";
import moment from 'moment';

function MovieDetails() {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetchMovieDetails();
    },[])

    const fetchMovieDetails = async() =>{
        try {
            setLoading(true);
            const response = await axios({
                method: 'get',
                url: `http://localhost:4000/api/movies/${movieId}`
            });
            setLoading(false);
            setDetails(response.data.movie);
            console.log(details)
        } 
        catch (e) {
            setError(e.message);
        }
    }

    return (
       /* <Card className="mt-5" >
            <Card.Header>
                <h1>{details.title}</h1>
            </Card.Header>
            <Card.Img variant="top" src={details.poster} style={{ width: '18rem' }} className="float-left"/>
            <Card.Body className="float-right h-50">
                <h1>{details.description}</h1>
            </Card.Body>
        </Card> */
        <Card className="mt-5" >
            <Row>
                <Card.Header>
                    <h1>{details.title}</h1>
                </Card.Header>
                <Col sm={3}>
                    <Card.Img variant="top" src={details.poster} /> 
                </Col>
                <Col sm={9}>
                    <Card.Body>
                        <div className="d-flex mb-2">
                            <Badge bg="warning" style={{fontSize: '18px'}}>Rating</Badge>
                            <h5 className="ms-3">&#11088; {details.rating}</h5>
                        </div>
                        <Badge bg="primary" style={{fontSize: '25px'}}>Description</Badge>
                        <h3>{details.description}</h3>
                        <div className="d-flex mt-5">
                            <Badge bg="danger" style={{fontSize: '25px'}}>Created At : </Badge>
                            <h5 className="ms-3">{moment(details.createdAt).format('DD-MMM-YYYY')}</h5>
                        </div>
                        <div className="d-flex mt-5">
                            <Badge bg="success" style={{fontSize: '25px'}}>Updated At :</Badge>
                            <h5 className="ms-3">{moment(details.createdAt).format('DD-MMM-YYYY')}</h5>
                        </div>
                    </Card.Body> 
                </Col>
            </Row>
        </Card>
    )
}

export default MovieDetails
