import { useState, useEffect } from "react";
import { Alert, Button, Card, CardImg } from "react-bootstrap";
import axios from 'axios';
import { useHistory } from "react-router";

import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";


function Home() {
    const [movies, setMovies] = useState([]);
    const [Loading, setLoading] = useState(false)
    const [Error, setError] = useState(null);
    const [searchText, setSearchText] = useState('');
    const history = useHistory()

  useEffect(()=> {
    getMovies();
  }, []);

  const getMovies = async() =>{
    try{
      setLoading(true);
      const response = await axios.get(`http://localhost:4000/api/movies?searchText=${searchText}`);
      setLoading(false);
      setMovies(response.data);
      setError(null);
    }
    catch(e){
      setLoading(false);
      setError(`Server Error: ${e.message} ${e.stackTrace}` )
    }
  }
    
  const viewDetails = ({ id })=>{
    history.push(`/${id}`); 
  }


    return (
        <>
        <SearchBar onClickRefresh={getMovies} setSearchText={setSearchText}/>
        {Error && <Alert variant="danger">{Error}</Alert>}
        {Loading ?
        <Loader />:
        <div className="d-flex flex-wrap mt-5 justify-content-center">
        {movies.map(movie => {
          const {title, id, poster, description} = movie;
          return (
            <Card key={id} className="m-4" style={{width:'17rem'}}>
              <CardImg variant="top" src={poster} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
                <Button className="d-grid gap-2 col-6 mx-auto" variant="outline-danger" onClick={()=>viewDetails(movie)}>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          );
        })}
        </div>
      }
      </>
    )
}

export default Home
