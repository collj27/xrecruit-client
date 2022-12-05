import ReactPlayer from "react-player";
import "./videoPlayer.css"

/*wrap the player in a fixed aspect ratio box to get a responsive player*/
function VideoPlayer(props) {

    if (ReactPlayer.canPlay(props.url)) {
        return (
            <div className='video-player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    width='100%'
                    height='100%'
                    url={props.url}/>
            </div>
        );
    } else if (props.url) {
        return (
            <div>
                <span>Error loading video</span>
            </div>
        );
    }

}

export default VideoPlayer;