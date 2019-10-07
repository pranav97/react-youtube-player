import React from 'react';

import './VideoItem.css'

const VideoItem = ({video, onVideoSelect}) => {
    // console.log(video, onVideoSelect);;'
    return (
        <div onClick={() => onVideoSelect(video)} className="item video-item">
            <img className="ui image" 
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.description} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
}
export default VideoItem;