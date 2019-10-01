import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'
class App extends React.Component {
    onTermSubmit = (term) => {
        try {
            youtube.get('/search', {
                params: {
                    q: term
                }
            });

        } catch(e) {
            console.log(e.response) // undefined
        }
    }
    render() {
        return (
            <div>
                <div className="ui container">
                    <SearchBar onFormSubmit={this.onTermSubmit}/>

                </div>
            </div>
        );
        

    }
} 
export default App
