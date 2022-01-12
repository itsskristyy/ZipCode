import React from 'react';
import ReactDOM from 'react-dom';

//checks to see if it is zipcode
function zipCode(str)
{
    return /^\d{5}(-\d{4})?$/.test(str);
}

class SearchBar extends React.Component { //search function which handles if input = zipcode
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if (!zipCode(this.state.value)) {
            alert(this.state.value + ' is not a zip code.');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Zip Code:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default SearchBar

const styles = {
    input:{
        fontFamily:"Open Sans",
        backgroundColor: '#000000',
        color: 'white',
        fontSize: "30px",
        paddingTop: "50px",
        paddingBottom: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"


     },
   }
