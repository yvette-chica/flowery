import React from 'react'
import VideoItem from './VideoDetail'

const VideoList = ({ videos, handleVideoSelect }) => {
    const renderedVideos = videos.map(video => (
        <VideoItem
            key={video.id.videoId}
            video={video}
            handleVideoSelect={handleVideoSelect}
        />
    ))

    return (
        <div>
            {renderedVideos}
        </div>
    )
}

export default VideoList
