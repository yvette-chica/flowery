import React from 'react'

const VideoDetail = ({ video, handleVideoSelect }) => {
    console.log('video', video)

    const content = video
        ? (
            <div onClick={() => handleVideoSelect(video)}>
                <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.description}
                />
                <div>{video.snippet.title}</div>
            </div>
        )
        : <div>No video</div>
    return content
}
export default VideoDetail
