import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends React.Component {
    state = {videos:[], selectedVideo: null, searchPressed: false}
    onTermSubmit = async (term) => {
        // call the render method to the video list 
        this.state.searchPressed = true;
        const resp = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        // console.log(resp.data.items);
        this.setState({
            videos: resp.data.items,
            selectedVideo: resp.data.items[0]
        });
    }

    componentDidMount() {
        // this.onTermSubmit('diary of jane');
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo:video});
    }

    render() {
        return (
            <div>
                <div className="ui container">
                    <SearchBar onFormSubmit={this.onTermSubmit}/>
                    <div className='ui grid'>
                        <div className='ui row'>
                            <div className='eleven wide column'>
                                <VideoDetail 
                                    video={this.state.selectedVideo}
                                    searchPressed={this.state.searchPressed} />
                            </div>
                            <div className='five wide column'>
                                <VideoList
                                    onVideoSelect={this.onVideoSelect}
                                    videos={this.state.videos} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 
export default App
