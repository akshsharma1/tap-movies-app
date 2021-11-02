import { Button , FormControl } from "react-bootstrap";

function SearchBar({
    setSearchText,
    onClickRefresh
}) {
    const onChangeSearchText = (event) => {
        setSearchText(event.target.value)
    }

    const onKeyPressSearchText = (event) => {
        if (event.charCode === 13) {
            onClickRefresh();
        }
    }

    return (
        <div className="d-flex justify-content-center mt-5">
                <FormControl className="w-50" type="text" placeholder="Search for movies..." 
                    onChange={onChangeSearchText}
                    onKeyPress={onKeyPressSearchText}/>
                <Button variant="outline-primary" className="mx-3" onClick={onClickRefresh}>Search</Button>
                <Button variant="outline-success" onClick={onClickRefresh}>&#11118;</Button>
        </div>
        
    )
}

export default SearchBar
