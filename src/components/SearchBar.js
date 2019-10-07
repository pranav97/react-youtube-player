import React from 'react';

class SearchBar extends React.Component {
    state = {search : ""};

    changeHandler = (event) => {
        this.setState({search : event.target.value});
        // console.log("state = " + this.state);
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.search);
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form 
                    className="ui form"
                    onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search </label>
                        <input 
                            type="text" 
                            name="Video Search" 
                            value={this.state.search}
                            onChange={this.changeHandler}/>
                    </div>
                </form>
            </div>
        );
        
    }
}

export default SearchBar;