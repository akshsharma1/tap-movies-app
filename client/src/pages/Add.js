import { Form, Button, Card } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Add() {
   const [FormValues, setFormValues] = useState({});
   const history = useHistory();

   const onChangeFormField = (event)=>{
        const { value, name, type } = event.target;  
   
        setFormValues({
            ...FormValues,
            [name]: type==="number" ? Number(value) : value   
        });
    
    }

    const onClickSubmit = async()=> {
        try{
            await axios({
            url: 'http://localhost:4000/api/movies',
            method: 'POST',
            data: FormValues
            });
            history.push('/');
        }
        catch(e){
            alert("Add Movie Failed!")
        }
    }

  return (
    <Card className="mt-5">
      <Card.Header>
          <h4>Add Movie</h4>
      </Card.Header>
      <Card.Body>
        <Form.Group className="mb-3" controlId="title" onChange={onChangeFormField}>
          <Form.Label>Movie Title</Form.Label>
          <Form.Control type="text" name="title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="poster" onChange={onChangeFormField}>
          <Form.Label>Movie Poster</Form.Label>
          <Form.Control type="text" name="poster" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="rating" onChange={onChangeFormField}>
          <Form.Label>Movie Rating</Form.Label>
          <Form.Control type="number" name="rating" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description" onChange={onChangeFormField}>
          <Form.Label>Movie Description</Form.Label>
          <Form.Control type="text" name="description" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={onClickSubmit}>
          Submit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Add;
