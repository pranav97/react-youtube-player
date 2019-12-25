import React from 'react';

const VideoDetail = ({video, searchPressed}) => {

    if (searchPressed) {
        if (!video) {
            return <div>Loading.. </div>
        }
    }
    else {
        return <div>Search something and hit enter!!</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" 
                    src={videoSrc} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">
                    {video.snippet.title}
                </h4>
                <p>
                    {video.snippet.description}
                </p>
            </div>
        </div>
    );
}
export default VideoDetail;