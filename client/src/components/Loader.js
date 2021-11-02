import { Spinner } from "react-bootstrap"

function Loader() {
    return (
        <Spinner className="d-flex mx-auto" style={{marginTop: '18vw'}}animation="border" variant="danger" size="lg"/>          
    )
}

export default Loader
